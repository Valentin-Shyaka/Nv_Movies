import React from 'react'
import Footer from './components/Footer'
import {FaStar,FaStarHalf,FaArrowRight,FaFilm} from "react-icons/fa"
import {BiPlayCircle} from "react-icons/bi"
import Movie from './components/movie'
import { Link } from 'react-router-dom'


function Home() {
    const movies=[
        {
           cover:"batman.jpg",
           title:"THE BATMAN" 
        },
        {
            cover:"morbius.jpg",
            title:"THE BATMAN" 
         },
         {
            cover:"tmw.png",
            title:"THE BATMAN" 
         },
         {
            cover:"uncharted.jpg",
            title:"THE BATMAN" 
         }
        ]
        const movies2=[
         {
            cover:"thrones.jpg",
            title:"THE BATMAN" 
         },
         {
            cover:"train.jpg",
            title:"THE BATMAN" 
         },
         {
            cover:"strng.jpg",
            title:"THE BATMAN" 
         },
         {
            cover:"vkngs.jpg",
            title:"THE BATMAN" 
         }
         
    ]
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
        <button id="hm" onclick="document.location='toons.html'">Explore!</button><i className="fa-solid fa-arrow-right-long"><FaArrowRight/></i>
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
                <button>RELEASED</button>
                <button>Imdb</button>
                <button>TRENDING</button>
                <button>POPULAR</button>
                <button>UPCOMING</button>

            </div>
            <div className="pre_show">
                <p>Online Movies Booking</p>
                <p id="show2">All Available Movies</p>
            </div>
            <div className="all_movies">
                <div className='type1'>
                    {movies.map((movie) => (
                        <Movie
                            cover={movie.cover}
                            title={movie.title}
                            />
                    ))}
                   
                   </div>
                   <div className='type1'>
                   {movies2.map((movie) => (
                        <Movie
                            cover={movie.cover}
                            title={movie.title}
                            />
                    ))}

                   </div>
                    


               
                
                    
                    
                    
                    


                
                <div className="now">


                </div>
                

                </div>
               

            </div>
           


        </div>
        


    </div>

    <Footer/>
    </div>
  )
}

export default Home