import Head from 'next/head'
import { connectToDatabase } from "../util/mongodb";
import React, { useState, useEffect, useRef } from 'react';
import Collection from '../Components/Collection';
import ResetSearch from '../Components/ResetSearch';
import SearchBar from '../Components/SearchBar';

/*
getServerSideProps establishes connection with MongoDB database
and returns destructured data
*/
export async function getServerSideProps() {
  
  //await connection to mongodb database
  const { db } = await connectToDatabase();

  //parse data
  const data = await db.collection("sample_photoApp").find({}).limit(80);
  const arrayData = await data.toArray();
  const parsedData = JSON.parse(JSON.stringify(arrayData));

  //return object props with parsed pata
  return {
    props: { properties: parsedData },
  }
}

//Home function returns html for Home page 
export default function Home( { properties }, {tagSearch}, value) {

    const [visiblePhotos, setVisiblePhotos] = useState(properties);
    const [searchTerm, setSearchTerm] = useState("");

    // searchItems handles the searchbar by updating visiblePhotos
    const searchItems = (searchValue) => {
      setSearchTerm(searchValue)
      if (searchTerm !=="") {
        const filteredData = properties.filter((item) => {
          console.log(item.tags);
          return Object.values(item.tags).join("").toLowerCase().includes(searchTerm.toString().toLowerCase())
      })
      setVisiblePhotos(filteredData)
      }
    }

    // handles updating visblePhotos by clicking on a tag
    const searchTag = (tagSearch) => {
      if (tagSearch !=="") {
      console.log(tagSearch)
      const filteredData = properties.filter((item) => {
        return Object.values(item.tags).join("").toLowerCase().includes(tagSearch.toLowerCase())
      })
      setVisiblePhotos(filteredData)
    }}

    // handles updating via search bar entry
    const setValueFromInput = (value) => {
      searchItems(value)
    };

    // resets the view and clears search bar
    const resetSearchBar = () => {
      setSearchTerm("");
      console.log("received");
      setVisiblePhotos(properties);
    }

    /*this is the body the application with Input that collects searchTerm and a return of Collection
    with the data variable as an argument. data variable is conditionl upon searchTerm  
    */
    return (
      
        <div className="background">
          <main>
          <Head>
            <title>Bob Reuter Photography Archive</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          </Head>
          <div>
            <h1 className="uppercase">Bob Retuer Photo Archive [Prototype]</h1>
          </div>
        <div>
          <div className="flex justify-center items-center">
            <div className="flex w-fit mt-9 pt-20 pb-5 align-middle justify-center items-center">
              <SearchBar 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                value={searchTerm}
                setValueFromInput={setValueFromInput}
              />
              <ResetSearch 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
                resetSearchBar={resetSearchBar} 
              />
            </div>
          </div>
        </div>
          <div className="columns-2xs gap-4 px-3">
            <div>
                    <div>
                      <Collection 
                      className="overflow-clipped"
                      searchTag={searchTag}
                      tagSearch={tagSearch}
                      properties={visiblePhotos}/>
                    </div>
            </div>
          </div>
            <footer>
                
            </footer>
            </main>
        </div>
    )
  }