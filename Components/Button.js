import React, { useState } from 'react';


export default function Button ({tag, searchTag, currentPage, resetTagSearch, toggleClassCheck}) {
        const [btnState, setBtnState] = useState(false);
        const [tagSearch, setTagSearch] = useState("");

        const handleClick = (tag) => {
            resetTagSearch();
            searchTag(tag)
            console.log(tag)
        }
    
        return (
            <button
            tagsearch={tagSearch}
            searchTag={searchTag}
            className={`pill btn${toggleClassCheck}`}
            onClick={(tag)=>handleClick(tag.target.firstChild.data)}
            >{tag}</button>
        )
    }