import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';
import {fetchTopAlbums, fetchNewAlbums} from './api/api'
import Section from './components/Section/Section';
import { useEffect, useState } from 'react';
import styles from "./App.module.css"

function App() {
 //state to store top/new Albums, topAlbumSongs is just an array of 16-17 albums with some info and an array of songs in that album
 const[topAlbumSongs,setTopAlbumSongs]=useState([]);
 const[newAlbumSongs,setNewAlbumSongs]=useState([]);

 //states related to the working of filterSection of songs:
 //state to store  original array of songs(unfiltered)
 const[songsData, setSongsData]=useState([]);

 const generateTopAlbumSongs=async()=>{
  try{
    const res= await fetchTopAlbums();
  setTopAlbumSongs(res);
  }
  catch(error){
    console.log(error);
    return null;
  } 
}

const generateNewAlbumSongs=async()=>{
  try{
    const res= await fetchNewAlbums();
    console.log(res);
  setNewAlbumSongs(res);
  }
  catch(error){
    console.log(error);
    return null;
  } 
}



useEffect(()=>{
  generateTopAlbumSongs();
  generateNewAlbumSongs();
 
},[])

  return (
    <div className="App">
 <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
      <Section type='album' title='Top Albums' data={topAlbumSongs}/>
      <Section type='album' title='New Albums' data={newAlbumSongs}/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
   
    </div>
    </div>
  );
}

export default App;
