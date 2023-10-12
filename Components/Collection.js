import Photocard from "./Photocard";
import React from "react";

export default function Collection({ visiblePhotos, searchTag, tagSearch, resetTagSearch }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {visiblePhotos.map((property, index) => (
        <div key={index} className="col-span-1">
          <div className="flex flex-col justify-center items-center ">
            <Photocard
              searchTag={searchTag}
              tagSearch={tagSearch}
              property={property}
              resetTagSearch={resetTagSearch}
              className="flex flex-col mx-auto max-w-screen-xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
