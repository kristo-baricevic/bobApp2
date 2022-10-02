import Home from ".";
import Photocard from "./Photocard";

export default function Collection ({properties}) {
            return properties.map((property) => {
              return (
                console.log({property}),
                <div className="columns-2xs gap-4 px-3">
                    <div>
                        <Photocard property={property} />
                    </div>
                </div>
            )}
            )
          }
