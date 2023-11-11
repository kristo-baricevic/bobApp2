import Photocard from "./Photocard";
import React from "react";

export default function Collection({ visiblePhotos, searchTag, tagSearch, resetTagSearch }) {
  return (
    <div className="collection-container">
      {visiblePhotos.map((property, index) => (
        <div key={index} className="py-4">
            <Photocard
              searchTag={searchTag}
              tagSearch={tagSearch}
              property={property}
              resetTagSearch={resetTagSearch}
            />
        </div>
      ))}
    </div>
  );
}
