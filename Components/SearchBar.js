import React from "react";

export default function SearchBar ({searchTerm, resetTagSearch, setValueFromInput}) {

    const handleChange = (value) => {
        resetTagSearch();
        setValueFromInput(value)
        console.log(value)
    }

    return (
        <div>
            <input 
            type="text"
            className="block w-100px border-2 rounded border-stone-700"
            value={searchTerm}
            name="searchTerm"
            placeholder="Type to search..."
            onChange={(event) => handleChange(event.target.value)}
            resetTagSearch={resetTagSearch}
            />
        </div>
    )
}