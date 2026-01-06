import Head from "next/head";
import React from "react";
import Script from "next/script";
import Navbar from "../Components/Navbar";
import Album from "../Components/Album";
import DriveEmbedBox from "../Components/DriveEmbedBox";

//Home function returns html for Home page
export default function Radio() {
  return (
    <div className="background">
      <Head>
        <title>Bob&apos;s Scratchy Records</title>
        <meta name="description" content="Bob Reuter Digital Archive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/2fda98f1da.js"
        crossOrigin="anonymous"
        async
      ></Script>
      <div>
        <Navbar />
      </div>
      <main>
        <br></br>

        <div className="radio-collection-container">
          <h1>Full Episodes of Bob&apos;s Scratchy Records</h1>
          <DriveEmbedBox link="https://drive.google.com/file/d/16ASjIKkYWjKM-aKdD0zrIxhaKns1sc79/view" />
          <DriveEmbedBox link="https://drive.google.com/file/d/1cmEWPQ9iML1s_OzpZgvq3JJrUCk5yRcW/view" />
          <DriveEmbedBox link="https://drive.google.com/file/d/1-n3j9Mdb6JC3Ye-hpkFX6eT6rOLLzkhB/view" />
          <DriveEmbedBox link="https://drive.google.com/file/d/1-i52eF99tPIcFeTcMKgWnW5XJSfg2QKU/view" />
          <DriveEmbedBox link="https://drive.google.com/file/d/1l0cQO073DNNJExK2AGXV9gLNs4N8RhpP/view" />
        </div>
        <br></br>

        <div className="radio-collection-container">
          <h1>Bob&apos;s Scratchy Records Demo Reel</h1>
        </div>
        <br></br>
        <div className="radio-collection-container">
          <div>
            <Album
              link={"https://bobsscratchyrecords.bandcamp.com/track/demo-reel"}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
