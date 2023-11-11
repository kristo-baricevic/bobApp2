import React, {useState } from "react";
import Collection from "./Collection";
import NavigationBar from "./NavigationBar";
import Pagination from "./Pagination";


export default function SearchFilter ( { parsedData, visiblePhotos, setVisiblePhotos, setValueFromInput, searchTag, tagSearch, resetSearchBar, searchTerm, setSearchTerm, shufflePhotos}) {
    
    const [currentPage, setCurrentPage] = useState(1);

    // No of Records to be displayed on each page   
    const recordsPerPage = 20;

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    
    // Calculate number of pages    
    const nPages = Math.ceil(visiblePhotos.length / recordsPerPage);

   
    //declare pageData for Pagination
    const pageData = (visiblePhotos.slice(indexOfFirstRecord, 
        indexOfLastRecord));

    const resetTagSearch = () => {
    //   setSearchPill("");
      setCurrentPage(1);
      console.log(currentPage);
      console.log(currentPage);
      }
        
    return (
        <>
            <Pagination
                nPages = { nPages }
                currentPage = { currentPage } 
                setCurrentPage = { setCurrentPage }
                visiblePhotos = { pageData }
            />
            < NavigationBar 
                setVisiblePhotos={setVisiblePhotos}
                resetTagSearch = {resetTagSearch}
                resetSearchBar = {resetSearchBar}
                shufflePhotos = {shufflePhotos}
                setValueFromInput = {setValueFromInput}
                searchTerm = {searchTerm}
                setSearchTerm = {setSearchTerm}
                parsedData = {parsedData}
                setCurrentPage = {setCurrentPage}
                currentPage={currentPage}
            />
            <div className="search-filter-collection-container">
                <Collection
                    searchTag={searchTag}
                    tagsearch={tagSearch}
                    visiblePhotos={pageData}
                    resetTagSearch={resetTagSearch}
                    currentPage={currentPage}
                />
            </div>
            <div>  
                <Pagination
                    nPages = { nPages }
                    currentPage = { currentPage } 
                    setCurrentPage = { setCurrentPage }
                    visiblePhotos = { pageData }
                />
            </div>
        </>
    )
}