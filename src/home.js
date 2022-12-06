import React from 'react'
import Footer from './components/Footer'
import {FaStar,FaStarHalf,FaArrowRight,FaFilm} from "react-icons/fa"
import {BiPlayCircle} from "react-icons/bi"
import Movie from './components/OneMovie'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./home.css"


function Home() {
    const navigate=useNavigate()
    const [page,setPage]=useState(1)
    const [filter,setFilter]=useState('')
    
    const [movies, setMovies] = useState([])
    async function getMovies(){
        const movies= await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=8ded552ed8b3b2c99dd933bbc411544d&language=en-US&page=${page}`)
        .then(res=>res.json()).then(data=>{setMovies(data.results)
        console.log(data)
    })
        console.log(movies.json())
           

        // const result= await movies;
        // result.movies.forEach((movie) => {
        //     console.log(result)
        //     this.movies.push(movie)
            
        // });
    }
    useEffect(() => {
       
        getMovies()
    }, [page])
  return (
    <div>
        <div className="home">
        <div className="indenter">
        <div >

        </div>
        <Link to={"/toons"}>
        <div className="introduction" onclick="document.location='toons.html'">
            <p>K-LIX</p>

        </div>
        </Link>
        <div className="name">
            <p>SPIDER-MAN<span>:</span> <strong>NO WAY HOME</strong></p>
        </div>
        <div className="credits">

            <p><span><i className="fa-solid fa-star"><FaStar/></i><i className="fa-solid fa-star"><FaStar/></i><i className="fa-solid fa-star"><FaStar/></i><i className="fa-solid fa-star"><FaStar/></i><i className="fa-solid fa-star"><FaStar/></i></span> 4.7(imdb) <span>2hr : 22mins</span></p>

        </div>
        <div className="details">
            <p>With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero.
            </p>

        </div>
        <div className="moredet">
            <p><strong>Starring:</strong> Tom Holland, Zendaya</p>
            <p><strong>Genres:</strong> Action</p>
            <p><strong>Tag:</strong> Action, Adventure, Horror</p>

        </div>
        <button>PLAY NOW</button>
        <button id="hm" onclick="document.location='toons.html'" onClick={()=>navigate("/toons")}>Explore!</button><i className="fa-solid fa-arrow-right-long"><FaArrowRight/></i>
        </div>
        
                <div className="othermv">
                        <div className="one_mv">
                            <img src="uncharted.jpg" alt=""/>
                            <p>Uncharted</p>
                            <div className="moredet1">
                                <p><strong>Director:</strong> Ruben Fleischer</p>
                                <p><strong>Genres:</strong> Action</p>
                                <p><strong>Opening:</strong>February 18, 2022 </p>
                    
                            </div>
                            <div className="identif">
                                <i className="fa-solid fa-download"></i>
                                <div className="stars"><i className="fa-solid fa-star"><FaStar/></i><i className="fa-solid fa-star"><FaStar/></i><i className="fa-solid fa-star"><FaStar/></i><i className="fa-solid fa-star"><FaStar/></i><i className="fa-solid fa-star-half-stroke"><FaStarHalf/></i></div>
                                <h3>Movie</h3>
                                <button>click to watch</button>
                                

                            </div>
                        </div>
                        <div className="one_mv">
                            <img src="batman.jpg" alt=""/>
                            <p>THE BATMAN</p>
                            <div className="moredet1">
                                <p><strong>Director:</strong> Matt Reeves</p>
                                <p><strong>Genres:</strong> Action</p>
                                <p><strong>Opening:</strong> March 4, 2022</p>
                    
                            </div>
                            
                            <div className="identif">
                                <i className="fa-solid fa-download"></i>
                                <div className="stars"><i className="fa-solid fa-star"><FaStar/></i><i className="fa-solid fa-star"><FaStar/></i><i className="fa-solid fa-star"><FaStar/></i><i className="fa-solid fa-star-half-stroke"><FaStarHalf/></i></div>
                                <h3>Movie</h3>
                                <button>click to watch</button>
                                

                            </div>
                        </div>
                        <div className="one_mv">
                            <img src="morbius.jpg" alt="" id="img1"/>
                            <p>Morbius</p>
                            <div className="moredet1">
                                <p><strong>Director:</strong> Daniel Espinosa</p>
                                <p><strong>Genres:</strong> Action</p>
                                <p><strong>Opening:</strong> April 1, 2022</p>
                    
                            </div>
                            <div className="identif">
                                <i className="fa-solid fa-download"></i>
                                <div className="stars"><i className="fa-solid fa-star"><FaStar/></i><i className="fa-solid fa-star"><FaStar/></i><i className="fa-solid fa-star"><FaStar/></i><i className="fa-solid fa-star"><FaStar/></i><i className="fa-solid fa-star"><FaStar/></i></div>
                                <h3>Movie</h3>
                                <button>click to watch</button>
                                

                            </div>
                        </div>



                </div>
            
        

    </div>
    <div className="home3">
    <div className="identifires">
        <div className="movies" >
            <div className="navigation">
                <button onClick={()=>{
                setPage(1)
                console.log(`The page is ${page} now`)
                
                }}>RELEASED</button>
                <button onClick={()=>{
                setPage(2)
                console.log(`The page is ${page} now`)
                
                }}>Imdb</button>
                <button onClick={()=>{
                setPage(3)
                console.log(`The page is ${page} now`)
                
                }}>TRENDING</button>
                <button onClick={()=>{
                setPage(4)
                console.log(`The page is ${page} now`)
                
                }}>POPULAR</button>
                <button onClick={()=>{
                setPage(5)
                console.log(`The page is ${page} now`)
                
                }}>UPCOMING</button>

            </div>
            <div className="pre_show">
                <p>Online Movies Booking</p>
                <p id="show2">All Available Movies</p>
            </div>
                    <div className='movies_display'>
                        {movies.map((movie) => (
                         
                            <Movie
                            id={movie.id}
                            cover={movie.poster_path}
                            title={movie.title}
                            />
                           
                            
    
                           
                           
                    ))}
                    </div>
                    
                   
                   </div>
                  


               
                
                    
                    
                    
                    


                
                
                

                </div>
               

            </div>
           
            <Footer/>

        </div>
        


    

  
    
    
  )
}

export default Home