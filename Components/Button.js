import React, { useState } from 'react';


export default function Button ({tag, searchTag}) {
        const [btnState, setBtnState] = useState(false);
        const [tagSearch, setTagSearch] = useState("");

        let toggleClassCheck = btnState ? ' active': null;

        const handleClick = (tag) => {
            searchTag(tag)
            console.log(tag)
            
            // toggleClassCheck
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