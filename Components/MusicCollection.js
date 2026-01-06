import React from "react";
import Album from "./Album";

const links = [
  "https://alleyghost.bandcamp.com/album/born-there",
  "https://alleyghost.bandcamp.com/album/dana-dew",
  "https://alleyghost.bandcamp.com/album/you-belong-to-me",
  "https://thedinosaurs.bandcamp.com/album/the-dinosaurs",
  "https://bobreuter.bandcamp.com/album/kamikaze-cowboy-hurry-sundown",
  "https://bobreuter.bandcamp.com/album/kamikaze-cowboy-down-in-america",
  "https://bobreuter.bandcamp.com/album/cowboy-angel-the-lost-american-life",
  "https://bobreuter.bandcamp.com/album/this-much-i-know",
];

export default function MusicCollection() {
  return (
    <div className="music-collection-container">
      {links.map((link) => (
        <div key={link} className="py-4">
          <Album link={link} />
        </div>
      ))}
    </div>
  );
}
