import Head from "next/head";
import React from "react";
import Script from "next/script";
import Navbar from "../Components/Navbar";
import MusicCollection from "../Components/MusicCollection";

//Home function returns html for Home page
export default function Music() {
  return (
    <div className="background">
      <Head>
        <title>Bob Reuter Music Archive</title>
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
        <div className="">
          <MusicCollection />
        </div>
      </main>
    </div>
  );
}
