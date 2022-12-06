import React from 'react'
import NavBar from './components/NavBar'
import { useEffect } from 'react'
import Footer from './components/Footer'
import { useState } from 'react'
import "./moviePage.css"

function Movies() {
     const [page,setPage]=useState(1)
     const [movies, setMovies] = useState([])
    async function getMovies(){
        const movies= await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=8ded552ed8b3b2c99dd933bbc411544d&language=en-US&page=${page}`)
        .then(res=>res.json()).then(data=>{setMovies(data.results)
        console.log(data)
    })
        // console.log(movies.json())?
           

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
        <NavBar/>

        <div class="movie1"><i class="fa-solid fa-ellipsis"></i></div>

<div class="movie_identifires">
     <div class="movies" >
         <div class="navigation">
             <button onClick={()=>{
                setPage(1)
                console.log(`The page is ${page} now`)
                }}>TRENDING</button>
             <button onClick={()=>{
                setPage(2)
                console.log(`The page is ${page} now`)
                }}>POPULAR</button>
             <button onClick={()=>{
                setPage(3)
                console.log(`The page is ${page} now`)
                
                }}>UPCOMING</button>
         </div>
         <div class="pre_show">
             <p
             onClick={()=>{
                setPage(1)
                console.log(`The page is ${page} now`)
                
                }}>Online Movies Booking</p>
             <p id="show2" onClick={()=>{
                setPage(4)
                console.log(`The page is ${page} now`)
                
                }}>All Available Movies</p>
         </div>
         <div class="allMovies">
             <div class="type1">
                 {
                    movies.length>0 && movies.map((movie) =>( 

                        <div class="one_mv">
                     <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}alt=""/>
                     <p>{movie.title}</p>
                     <div class="identif">
                         <i class="fa-solid fa-download"></i>
                         <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                         <h3>{movie.genre}</h3>
                         <button>click to watch</button>
                         
 
                     </div>
                 </div>




                    )

                    )
                 }
                 
                 


             </div>
             
             <div class="now">


             </div>
             

             </div>
            

         </div>
         <div class="rfloaters">
             <div class="book">
                 <div class="header">
                     <h3>BOOKING</h3>

                 </div>
                 <div class="select">
                    <div> <label for="movie" id="label">Select Movie</label></div>
                     <select name="movie" id="select">
                         <option value="">SELECT MOVIE</option>
                         <option value="">SELECT MOVIE</option>
                         <option value="">SELECT MOVIE</option>
                         
                     </select>
                     

                 </div>
                 <div class="select">
                     <div> <label for="movie1" id="label">Select Event</label></div>
                      <select name="movie" id="select">
                          <option value="">SELECT EVENT</option>
                          <option value="">SELECT MOVIE</option>
                          <option value="">SELECT MOVIE</option>
                          
                      </select>
                      

                  </div>
                  <div class="select">
                     <div> <label for="movie2" id="label">Select Date</label></div>
                      <select name="movie" id="select">
                          <option value="">SELECT DATE</option>
                          <option value="">SELECT MOVIE</option>
                          <option value="">SELECT MOVIE</option>
                          
                      </select>
                      
                      

                  </div>
                  <p>Please complete the form above</p>
                  <div class="foot">
                     <h3>20% DISCOUNT ON BOOKING</h3>
                     <hr/>

                     </div>
                  

             </div>
             <div class="out">
                 <button>OUT NOW</button>
             </div>
             <div class="out">
                 <button>OUT NOW</button>
             </div>
             <div class="out">
                 <button>OUT NOW</button>
             </div>

         </div>


     </div>
     


 
 
 
     
        
         
       


    








      <Footer/>

         

    
     
     
     </div>


 
 
 

  )
}

export default Movies