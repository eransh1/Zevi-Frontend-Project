import React, { useState } from 'react'
import styles from "./Home.module.css"
import Navbar from '../../components/Navbar/Navbar'
import Searchbar from '../../components/SearchBar/Searchbar'
import LatestTrends from '../../components/Latest Trends/LatestTrends'

const Home = () => {
const[isSearchBarClicked,setIsSearchBarClicked]=useState(false)
  return (
    <section className={styles.outerCont}>
    <div className={styles.overlay}>
      {/* NAVBAR COMPONENT */}
       <Navbar/>
       <div className={styles.searchbarCont}>
         {/* SEARCHBAR COMPONENT */}
        <Searchbar setIsSearchBarClicked={setIsSearchBarClicked}/>
       </div> 
       {isSearchBarClicked&&<div className={styles.latestTrendCont}>
         {/* LATEST TREND COMPONENT */}
        <LatestTrends/>
       </div>}
    </div>
    </section>
  )
}

export default Home