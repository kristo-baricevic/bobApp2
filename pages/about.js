import Head from 'next/head';
import { connectToDatabase } from "../util/mongodb";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Script from 'next/script';
import SearchFilter from '../Components/SearchFilter';
import Navbar from '../Components/Navbar';

export async function getServerSideProps() {

  //await connection to mongodb database
  const { db } = await connectToDatabase();

  //parse data
  const data = await db.collection("sample_photoApp").aggregate([{$sample: {size: 511 }}]).limit(511);
  const arrayData = await data.toArray();
  const parsedData = JSON.parse(JSON.stringify(arrayData));
 
  //return object props with parsed pata
  return {
    props: { parsedData }
  }
}


//Home function returns html for Home page 
export default function Home() {


    return (
      
        <div>
          <main>
            <Head>
                <title>Bob Reuter Photography Archive</title>
                <meta name="description" content="Bob Reuter Digital Archive" />
            </Head>
            <Script src="https://kit.fontawesome.com/2fda98f1da.js" crossOrigin="anonymous" async></Script>
            <div>
              <Navbar />
            </div>
            <div className="about-body">
                <div className="about-photo-container">
                    <img className="about-photo" src="https://bobreuterphotoarchive-vercel.b-cdn.net/Reuter_0456%20Bob%20Reuter_0.jpg" />
                </div>
                <div className="about-bio-container">
                    <p className="about-bio-paragraph">
                        Bob Reuter’s musical career spanned decades – he began playing in the garage rock era of the 60s and with the Cough Medicine Company layed teen clubs, frat parties, and dance halls.

                        In the 1970’s, Bob’s band The Dinosaurs became widely regarded as one of St. Louis’s first Punk bands, and released their seven inch 45 single “Rock and Roll Moron” b/w “It Might Be Rose”. In the 1980s, his Syracuse, NY band Serious Journalism cranked out loud, fast, hard and aggressive melodic rock, and Bob released a 45 single under his own name. Bob later gravitated to roots-rock and helped build the alt-country movement of the 90s with his band Kamikaze Cowboy.

                        Cut to 2009, Bob in a hospital bed, his cracked chest just wired shut, blood pumping into one arm, and morphine into the other. He meets two visitors, two young men who had just founded St. Louis’s Big Muddy Records. “We’d like cut a record with you,” they said. “Could you empty my pee bottle?” Bob asked. Well, they did and Bob Reuter’s Bob Reuter’s Alley Ghost was born.

                        The band was as talented a group of young rockers as the city of St. Louis could supply, culled from the ranks of other Big Muddy Records bands. They recorded in Bob’s apartment’s kitchen. That recording and a Big Muddy Release of ultra lo-fi lost Dinosaurs tapes began garnering Bob renewed attention among the late teen and early 20’s demographic of the St. Louis’ south side.

                        By 2011, Bob Reuter’s Alley Ghost, as the band had become commonly known, released the album “Born There,” and adopted a sweat-drenched proto-punk sound. In support of the album, the band began touring through the Midwest and South in an effort to introduce themselves to the rest of the United States.

                        Over the years as personnel changes ensued, the band continued moving in an electric rock direction. In 2013, Bob Reuter’s Alley Ghost released what would be their final single with Reuter- “Dana Dew” b/w “She Brought Me to the Wire.”

                        On August 3, 2013, Bob Reuter died in a tragic accident. Though he left this world too soon, Bob left behind a body of work that spans a lifetime – poetry, literature, photographs, and of course 100’s of songs in the care of Big Muddy Records.
                    </p>
                </div>
                <div className="cowboy-angel-container">
                    <Link href="/">
                      <img className="about-photo" src="https://bobreuterphotoarchive-vercel.b-cdn.net/Reuter_0273.jpg" />
                    </Link>
                </div>
            </div>
          </main>
        </div>
    )
  }