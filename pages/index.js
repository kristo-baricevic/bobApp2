import Head from 'next/head';
import { connectToDatabase } from "../util/mongodb";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import SearchFilter from '../Components/SearchFilter';
import Navbar from '../Components/Navbar';

export async function getServerSideProps() {

  //await connection to mongodb database
  const { db } = await connectToDatabase();

  //parse data
  const data = await db.collection("sample_photoApp").aggregate([{$sample: {size: 511 }}]).limit(511);
  const arrayData = await data.toArray();
  const parsedData = JSON.parse(JSON.stringify(arrayData));
 
  //return object props with parsed pata
  return {
    props: { parsedData }
  }
}


//Home function returns html for Home page 
export default function Home( { parsedData, setCurrentPage } ) {

  const [data, setData] = useState(parsedData);
  const [visiblePhotos, setVisiblePhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  useEffect(()=>{
    setVisiblePhotos(parsedData);
  },[parsedData])

  // searchItems handles the searchbar by updating visiblePhotos
  const searchItems = (searchValue) => {
    setSearchTerm(searchValue)
    if (searchValue !=="") {
      const filteredData = data.filter((item) => {
          console.log(item.tags);
          return Object.values(item).join("").toLowerCase().includes(searchValue.toLowerCase())
    })
    setVisiblePhotos(filteredData);
  }}

  // handles updating visiblePhotos by clicking on a tag
  const searchTag = (tagSearch) => {
  console.log(tagSearch);
  if (tagSearch !=="") {
    const filteredData = data.filter((item) => {
      return Object.values(item.tags).join("").toLowerCase().includes(tagSearch.toString().toLowerCase())
    })
    setVisiblePhotos(filteredData);
    console.log(filteredData)
  }}

  // handles updating via search bar entry
  const setValueFromInput = (value) => {
    searchItems(value)
  };

  // shuffles photos -- currently just a page refresh
  const shufflePhotos = () => {
    router.reload();
  }

  return (
      <div className="background">
          <Head>
            <title>Bob Reuter Photography Archive</title>
              <meta name="description" content="Bob Reuter Digital Archive" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <Script src="https://kit.fontawesome.com/2fda98f1da.js" crossOrigin="anonymous" async></Script>
          <div>
            <Navbar />
          </div>
          <main>
          <div className="photo-collection-external-container">
            <SearchFilter 
              visiblePhotos = {visiblePhotos}
              setVisiblePhotos = {setVisiblePhotos}
              shufflePhotos = {shufflePhotos}
              searchTag = {searchTag}
              parsedData = {parsedData}
              setValueFromInput = {setValueFromInput}
              searchTerm = { searchTerm }
              setSearchTerm = { setSearchTerm }
            />
          </div>
        </main>
      </div>
  )
}