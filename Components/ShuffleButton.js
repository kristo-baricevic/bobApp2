import React, { useState, useEffect, useRef } from 'react';



export default function ShuffleButton ({ searchTerm, properties, setSearchTerm, shufflePhotos, setVisiblePhotos }){
    
    const handleClick = () => {
        shufflePhotos();
        console.log('shuffle');
    }

    return (
        <>
        <button 
            value={searchTerm}
            className="border-2 px-4 py-2 ml-1 rounded-full border-black bg-white"
            onClick={handleClick}
            setvisiblephotos={setVisiblePhotos}
            > Shuffle
        </button>
        </>
    )
}
