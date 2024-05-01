import Head from 'next/head';
import { connectToDatabase } from "../util/mongodb";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Script from 'next/script';
import SearchFilter from '../Components/SearchFilter';
import Navbar from '../Components/Navbar';
import Image from 'next/image';

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
              <Image 
                className="about-photo" 
                src="https://bobreuterphotoarchive-vercel.b-cdn.net/Reuter_0456%20Bob%20Reuter_0.jpg" 
                alt="Picture of artist"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                width={500}
                height={500} 
              />
            </div>
            <div className="flex align-middle justify-center">
              <h1 className="text-4xl">Biography</h1>
            </div>
            <div className="about-bio-container">
              <p className="about-bio-paragraph">
                Bob Reuter was a cherished figure in the St. Louis, Missouri music and arts scene, widely 
                recognized for his raw, heartfelt music and captivating storytelling. Born and raised in 
                St. Louis, he spent decades contributing to the city&#39;s cultural fabric as a musician, radio 
                show host, and photographer. Reuter was known for his gritty, soulful rock and roll style, 
                often drawing comparisons to artists like Bob Dylan and Tom Waits for his poignant lyrics 
                and distinctive voice.
                <br />
                <br />
                Throughout his career, Reuter played in several influential bands, including The Dinosaurs, 
                Kamikaze Cowboy, and later, Alley Ghost, which brought him renewed attention in the local 
                music scene and beyond. His work extended beyond music; he was also a passionate photographer, 
                capturing stark, emotional black and white images that reflected the raw edges of urban life.
                <br />
                <br />
                Bob Reuter&#39;s striking black and white photography captured the essence of the city&#39;s 
                gritty and raw urban landscape. His photographic work, much like his music, was deeply 
                personal and imbued with emotion, showcasing his keen eye for the beauty and despair 
                found in everyday scenes.
                <br />
                <br />
                Reuter&#39;s photography often focused on the overlooked or forgotten aspects of urban life, 
                from desolate alleyways and decaying buildings to the vibrant, often challenging lives of 
                the people who inhabited these spaces. His images were characterized by a rough, unpolished 
                aesthetic that highlighted the imperfections and realities of his subjects, lending a visceral 
                quality to his work that was both haunting and compelling.
                <br />
                <br />
                His approach to photography was intuitive and spontaneous, preferring to shoot with old film 
                cameras that added a layer of unpredictability and charm to his images. This choice of equipment 
                complemented his artistic vision, emphasizing the raw and unfiltered view of the world that he 
                sought to convey.
                <br />
                <br />
                Bob Reuter&#39;s photographs were not just visual records but narrative pieces that told stories 
                of resilience, hardship, and the human condition. His work has been exhibited in various galleries 
                and venues around St. Louis, leaving a lasting impression on both the art community and those who 
                had the chance to view his compelling portrayals of city life.
                <br />
                <br />
                Reuter also had a radio show, &#34;Bob&#39;s Scratchy Records&#34; which became a local favorite on
                KDHX, where he shared obscure, old vinyl tracks, further solidifying his role as a cultural 
                curator. His contributions to St. Louis&#39;s arts and music scene left a lasting legacy, 
                celebrated for his authenticity and unwavering commitment to his craft. Bob Reuter&#39;s 
                life and work remain a testament to the spirit of St. Louis&#39;s underground arts scene.
            
              </p>
            </div>
            <div className="cowboy-angel-container">
              <Link href="/" legacyBehavior passHref>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Image 
                    className="about-photo" 
                    src="https://bobreuterphotoarchive-vercel.b-cdn.net/Reuter_0273.jpg" 
                    alt="Picture of artist"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    width={500}
                    height={500} 
                  />
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>
    )
  }