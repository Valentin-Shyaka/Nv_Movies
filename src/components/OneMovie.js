import React from 'react'
import {BiPlayCircle} from "react-icons/bi"
import {FaFilm} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { Navigate,Navigator } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./onemovie.css"

function Movie({id,cover,title}) {
  const navigate=useNavigate();
  

  return (
     <div className='movie_container'>
        <div className="one_mv" onClick={()=>{
          
          navigate(`/viewMovie/${id}`)
        
        
        
        }
      
      
      
      }



        >
            <img src={`https://image.tmdb.org/t/p/w500/${cover} `} alt=""/>
            <div className="but"><p>HD</p> </div>
            <div className="pazel"><i className="far fa-play-circle"><BiPlayCircle/></i></div>
           
                        
                       
        
         </div>

         <div className='movie_title'>
         <p><i className="fas fa-film"><FaFilm/></i>{title}</p>
         </div>


         </div>

         
   
  )
}

export default Movie