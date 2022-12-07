import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FaCameraRetro } from 'react-icons/fa'
import { FaFilm } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import Movie from './OneMovie'
import "./navbar.css"



function NavBar({movie}) {
  const [display, setDisplay] = useState("none")
  const [searching, setSearching] = useState(false)
  const [search, setSearch] = useState([''])
  const [searchedMovies, setSearchedMovies] = useState(null)
  const [focus,setFocus]=useState(false)
  const [color,setColor]=useState('white')

  function trigger() {
    if (searching = true) {
      setDisplay("fixed")
    } else {
      setDisplay(false)
    }

  }

  async function searchMovies(search) {


    const results = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US&page=1&query=${search}`
    ).then(res => res.json()).then(data => {
      // console.log(data.results)
      setSearchedMovies(data.results)


    }).catch(err => console.log('Error=====', err))
    // const result = await data
    // result.forEach((movie) => {

    //   console.log(searchedMovies.json())
    // })
  }


  //  if(res.search) try{
  //    setMovies(res.search)
  //   console.log(res.search)}
  //  catch{
  //    console.log("Search not executed")
  //  }

  useEffect(() => {

    // searchMovies(search)
    console.log(search)

  }, [search])







  return (
    <div>

      <nav id="navbar">

        <div class="logosearch">

          <h3 id="title">K-LIX</h3>
          <div className='search-input'
          onChange={(e) => {
            setDisplay("flex")
            searchMovies(e.target.value)

          }}
          
          >
              <FaSearch className="search-searchIcon"/>
              <input placeholder='Search movie' type={"text"}/>
          </div>
         
        </div>
        <div class="navbar-tooggle" id="mobile-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <div class="navbar-content"></div>
        </div>
        <div id="navbarlinks">
          <Link to={"/home"} onClick={()=>{
            setFocus(true)
            if(focus){
              setColor("dodgerblue")

            }else{
              setColor("white")
            }
          }}>
            <p id="home" style={{color: `${color}` }}><i class="fa-solid fa-house"><FaHome /></i> Home</p>
          </Link>
          <Link to={"/toons"}>
            <p id="home"><i class="fa-solid fa-camera-retro"><FaCameraRetro /></i> Toons</p>
          </Link>
          <Link to={"/Releases"}>
            <p id="home"><i class="fa-solid fa-film"><FaFilm /></i>Movies</p>
          </Link>
          <Link to={"/contact_us"}>
            <p id="home"><i class="fas fa-mobile-alt"><FaPhoneAlt /></i>Contact us</p>
          </Link>
          {/* <input type="button" value="Sign Up" id="home1" onclick="document.location='#subs'" /> */}
        </div>


      </nav>
      <div className='results' style={{ display: `${display}` }} onMouseLeave={()=>{setDisplay('none')}}>
        {
          searchedMovies?.map((movie) => {
            return <Movie
            id={movie.id}
              cover={movie.poster_path}
              title={movie.title} />
          })}
      </div>
    </div>

  )
}

export default NavBar