import React, { useState, useEffect, useCallback } from 'react';

export default function Button ({tag, searchTag}) {
        const [btnState, setBtnState] = useState(false);
        const [tagSearch, setTagSearch] = useState("");

        let toggleClassCheck = btnState ? ' active': null;

        const handleClick = (tag) => {
            console.log(tag)
            searchTag(tag)
            toggleClassCheck
        }
    
        return (
            <button
            tagSearch={tagSearch}
            searchTag={searchTag}
            className={`pill btn${toggleClassCheck}`}
            onClick={(tag)=>handleClick(tag.target.firstChild.data)}
            >{tag}</button>
        )
    }