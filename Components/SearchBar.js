import React from "react";

export default function SearchBar ({searchTerm, setValueFromInput}) {

    const handleChange = (value) => {
        setValueFromInput(value)
    }

    return (
        <div>
            <input 
            type="text"
            className="block w-100px border-2 rounded border-stone-700"
            value={searchTerm}
            placeholder="Type to search..."
            onChange={(event) => handleChange(event.target.value)}
            />
        </div>
    )
}