import Photocard from "./Photocard";
import React, {useState} from "react";


export default function Collection ({visiblePhotos, searchTag, tagSearch} ) {

  return (
    visiblePhotos.map((property) => {
    return (
      <div className="columns-2xs gap-4 px-3 overflow-hidden">
        <div>
          <Photocard
            searchTag={searchTag}
            tagSearch={tagSearch}
            property={property}
          />
        </div>
      </div>
    )}))
  }
    

