import React, { useState, useEffect, useRef } from 'react';



export default function ShuffleButton ({ searchTerm, properties, setSearchTerm, shufflePhotos, setVisiblePhotos }){
    
    const handleClick = () => {
        shufflePhotos();
        // setVisiblePhotos(properties);
        console.log('shuffle');
    }

    return (
        <>
        <button 
            value={searchTerm}
            className="border-2 ml-1 rounded border-black px-1"
            onClick={handleClick}
            shufflePhotos={shufflePhotos}
            setVisiblePhotos={setVisiblePhotos}
            > Shuffle
        </button>
        </>
    )
}
