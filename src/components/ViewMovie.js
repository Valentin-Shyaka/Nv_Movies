import React from 'react'
import './view.css'
import { useState } from 'react'
import NavBar from './NavBar'
import { FaHeart, FaLanguage, FaPeopleArrows, FaVoteYea } from 'react-icons/fa';
import {Navigate, useRoutes} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

function ViewMovie({movie}) {
  const url= `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  const navigate=useNavigate();
  // const [singleMovie,setSingleMovie]=useState({})
  // async function getSingleMovie() {
  //   // Headers.catch()
    
  //   const data = fetch(
  //     `https://api.themoviedb.org/3/movie/${id}?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US`
  //   )
  //   const result = await data
  //   setSingleMovie(data.results)
    
  // }
  
  return (
    <>
    <NavBar/>
    <div className='main' style={{backgroundImage: `url(${url})`,  backgroundRepeat: "no-repeat", backgroundSize: "100%"}}>
    <div className='view_movie'>
      <div className='poster_toaster'>
      <div className='img_poster'>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
      </div>
      <button>Download</button>
      <button style={{background: "red"}} onClick={()=>{navigate(`https://www.youtube.com/results?search_query=${movie.title}`)}}>Watch</button>
      </div>
      <div className='text'>
        <h1>{movie.title}</h1>
        <h3>Released : <span>{movie.release_date}</span></h3>

        <p>{movie.overview}</p>

        <div className='popularity'>
          <div className='votes'>
            <h5>Likes :</h5>
            <FaHeart className='heart_icon'/> <p>{movie.vote_average}</p>
          </div>
          <div className='votes'>
          <h5>Votes :</h5>
            <FaVoteYea className='vote_icon'/> <p>{movie.vote_count}</p>
          </div>
          <div className='votes'>
          <h5>Language :</h5>
            <FaLanguage className='lang_icon'/> <p>{movie.original_language}</p>
          </div>

        </div>

      </div>
      
    </div>
    </div>
    </>
  )
}

export default ViewMovie