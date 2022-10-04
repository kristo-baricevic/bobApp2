import Photocard from "./Photocard";


export default function Collection ({properties, searchTag, tagSearch} ) {
            return properties.map((property) => {
              return (
                <div className="columns-2xs gap-4 px-3">
                    <div>
                        <Photocard
                        searchTag={searchTag}
                        tagSearch={tagSearch}
                        property={property}
                        />
                    </div>
                </div>
            )}
            )
          }
