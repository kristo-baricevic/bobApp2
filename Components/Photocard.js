import Button from "./Button";
import Modal from "./Modal";

export default function Photocard({ property, searchTag, tagSearch, resetTagSearch, currentPage }) {
  return (
    <div className="pb-3">
      <div className="max-w-sm rounded bg-slate-100 overflow-hidden shadow-lg mx-auto"> {/* Center horizontally */}
        <Modal property={property} />
        <div className="px-6 py-4">
          <div className="text-center text-white bg-black text-xl mb-2">{property.name}</div>
          <div className="p-6">
            {property.tags.map((tag, index) => (
              <div className="inline" key={index}>
                <Button
                  searchTag={searchTag}
                  tagSearch={tagSearch}
                  tag={tag}
                  resetTagSearch={resetTagSearch}
                  currentPage={currentPage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
