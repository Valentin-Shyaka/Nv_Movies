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
    const [displayMovie,setDisplayMovie]= useState({})
    const [filter,setFilter]=useState('')
    const random= Math.random()*10;
    const id=Math.ceil(random)
    
    
    
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
    
    console.log(displayMovie)
    console.log("This is the random id "+id)
    // console.log(id)
    
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
            <p>SpiderMAn<span>:</span><strong>No Way Home</strong></p>
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
        
              



        {/* </div> */}
            
        

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