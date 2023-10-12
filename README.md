
# The Bob Reuter Photography Archive

## Background

I ran a record label when I was growing up and one of my musicians, Bob Reuter (1951-2013), was an accomplished photographer. When Bob passed away, he left all of his work in my care. He had over 500 large and small prints that he created in his own darkroom. Almost all of his negatives had been destroyed, so these photographs were all that existed of Bob's fine-art career. I had been moving these photographs from apartment to apartment, building to building, unsure of how I would find a safe place for them to live. Once I started to learn software development I saw an opportunity to present the work as an online archive to aid in my search. A local history museum aided in scanning the photos and then I was off to the races!

(Spoiler alert: thanks to this website - and a little bit of serendipity - these photographs now live in the historical archives at the University of Missouri in St. Louis)

## Goal

I wanted a simple way to present the photos to the user. The photos speak for themselves and I wanted a minimalistic site that mirrored the style of photography. But I also wanted it to be fast and easy to use. When Bob was alive, he would place a box of new photos in front of you and tell you to look through them. I wanted to simulate that feel of flipping through the photos, but I also wanted to create an organic experience for the user to explore the photos based on what they were drawn to.

## Tech Stack

MongoDb, Express.js, React, Node.js (MERN)

## Deployment

This site was deployed on Vercel with image hosting on bunny.net

## Use 

- On app mount, the user is shown a randomized set of 20 photos from the database. The user can scroll drown the page to look at the photos and use the pagination feature to see the next 20. Or the user can utilize the serach and keyword buttons to guide their experience.
- If the user utilizes the search bar they can search for words that will appear in the title of the photographs, as well as the keywords that appear below them. The app has dynamic search results that update quickly with each character, pulling from the entire catalog of photos.
- Clicking the keywords is a fun way to look at the photos. The keywords are based on topics, or subjects in the photograph, and clicking on them will show you the other photos that share that keyword. So if you are liking a photograph that shows rock and roll, the rest are just a click away!
- The shuffle button is another fun feature. Clicking shuffle will resort all 500 photographs and show you the first 20 of the new arrangement, so it randomizes what you are looking at.


