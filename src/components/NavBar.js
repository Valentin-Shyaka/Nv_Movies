import React from 'react'
import {FaHome} from 'react-icons/fa'
import {FaCameraRetro} from 'react-icons/fa'
import {FaFilm} from 'react-icons/fa'
import {FaPhoneAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'

function NavBar() {
  const [search,setSearch]= useState([''])
  const [movies,setMovies]= useState([" "])
  const getMovies=async (search) => {
   const response=await fetch("http://www.omdbapi.com/?s=${search}&apikey=6e8bfaf5");
   const res=await response.json()
   console.log(res.response)
   
   if(res.Search) try{
     setMovies(res.search)
    console.log(res.Search)}
   catch{
     console.log("Search not executed")
   }
   
  
  
  }
  useEffect(() => {
    return () => {
      getMovies(search)
    };
  }, [search])

  return (
    
<nav id="navbar">
              
    <div class="logosearch">
        
        <h3 id="title">K-LIX</h3>
        <div class="search"><input type="text" placeholder="search" id="search" onChange={(e)=>setSearch(e.target.value)}/><i class="fas fa-search"></i></div>
        </div>
        <div class="navbar-tooggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <div class="navbar-content"></div>
        </div>
        <div id="navbarlinks">
            <Link to={"/"}>
            <a href="home.html" id="home"><i class="fa-solid fa-house"><FaHome/></i> Home</a>
            </Link>
            <Link to={"/toons"}>
            <a href="#" id="home"><i class="fa-solid fa-camera-retro"><FaCameraRetro/></i> Toons</a>
            </Link>
            <Link to={"/Releases"}>
            <a href="releases.html" id="home"><i class="fa-solid fa-film"><FaFilm/></i>Movies</a>
            </Link>
            <Link to={"/contact_us"}>
            <a href="contact.html" id="home"><i class="fas fa-mobile-alt"><FaPhoneAlt/></i>Contact us</a>
            </Link>
            <input type="button" value="Sign Up" id="home1"  onclick="document.location='#subs'"/>
        </div>
    </nav>

  )
}

export default NavBar