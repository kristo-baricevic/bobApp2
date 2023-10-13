import Button from "./Button";
import Modal from "./Modal";

export default function Photocard({ property, searchTag, tagSearch, resetTagSearch, currentPage }) {
  return (
    <div className="pb-3">
      <div className="flex flex-col max-w-sm rounded bg-slate-100 shadow-lg mx-auto"> 
        <Modal property={property} />
        <div className="px-6 py-4 flex flex-col items-center justify-center h-full">
          <div className="text-center px-20 text-white bg-black text-xl rounded mb-2">
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
    </div>
  );
}
