import React from "react";
import SearchBar from "./SearchBar";
import ResetSearch from "./ResetSearch";
import ShuffleButton from "./ShuffleButton";

export default function NavigationBar ({ parsedData, setCurrentPage, currentPage, shufflePhotos, searchTerm, setSearchTerm, setVisiblePhotos, setValueFromInput, resetTagSearch}) {

    const resetSearchBar = () => {
        setSearchTerm((searchTerm)=>(""));
        setVisiblePhotos(parsedData);
        console.log(searchTerm);
        setCurrentPage(1);
        console.log(currentPage);
      }

    return (
        <>
        <div className="w-full">
          <div className="flex justify-center items-center">
            <div className="flex flex-wrap px-6 mt-2 pt-1 pb-9 align-middle justify-center items-center">
            
            <SearchBar 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                value={searchTerm}
                resetSearchBar={resetSearchBar}
                setValueFromInput={setValueFromInput}
                resetTagSearch = {resetTagSearch}
              />
            <ResetSearch 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
                resetSearchBar={resetSearchBar} 
              />
            <ShuffleButton 
                shufflePhotos={shufflePhotos}
                setVisiblePhotos={setVisiblePhotos}
              />
              </div>
          </div>
        </div>
    </>
    )
}