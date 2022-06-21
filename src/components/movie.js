import React from 'react'
import {BiPlayCircle} from "react-icons/bi"
import {FaFilm} from "react-icons/fa"

function Movie({cover,title}) {
  return (
    
        <div className="one_mv">
            <img src={cover} alt=""/>
            <div className="but"><p>HD</p> </div>
            <div className="pazel"><i className="far fa-play-circle"><BiPlayCircle/></i></div>
            <p><i className="fas fa-film"><FaFilm/></i>{title}</p>
                        
                        
        
    </div>
  )
}

export default Movie