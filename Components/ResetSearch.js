import React, { useState, useEffect, useRef } from 'react';



export default function ResetSearch ({ searchTerm, setSearchTerm, resetSearchBar }){
    
    const handleClick = () => {
        resetSearchBar();
        console.log('reset');
    }

    return (
        <>
        <button 
            value={searchTerm}
            className="border-2 ml-1 rounded border-black px-1"
            onClick={handleClick}
            resetSearchBar={resetSearchBar}
            > Reset
        </button>
        </>
    )
}
