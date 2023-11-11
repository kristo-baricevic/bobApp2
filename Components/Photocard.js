import Button from "./Button";
import Modal from "./Modal";

export default function Photocard({ property, searchTag, tagSearch, resetTagSearch, currentPage }) {
  return (
      <div className="px-5 py-5 flex flex-col justify-center align-middle max-w-sm bg-slate-100 shadow-lg mx-auto border-black border-solid border-2 rounded-xl"> 
        <Modal property={property} />
        <div className="px-6 py-4 flex flex-col items-center justify-center h-full">
          <div className="py-2 text-center px-20 text-white bg-black text-xl rounded mb-2 ">
            {property.name}
          </div>
          <div className="flex flex-wrap justify-center justify-items-center items-center">
            {property.tags.map((tag, index) => (
                <Button
                  key={index}
                  searchTag={searchTag}
                  tagSearch={tagSearch}
                  tag={tag}
                  resetTagSearch={resetTagSearch}
                  currentPage={currentPage}
                />
            ))}
          </div>
        </div>
      </div>
  );
}
