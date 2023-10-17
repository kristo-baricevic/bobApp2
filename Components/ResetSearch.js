import React, { useState, useEffect, useRef } from 'react';



export default function ResetSearch ({ searchTerm, resetSearchBar }){
    
    const handleClick = () => {
        resetSearchBar();
        console.log('reset');
        
    }

    return (
        <>
        <button 
            value={searchTerm}
            className="border-2 px-4 py-2 ml-1 rounded-full border-black bg-white hover:bg-gray-400 active:bg-gray-600 active:text-white"
            onClick={() => handleClick()}
            > Reset
        </button>
        </>
    )
}
