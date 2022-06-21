import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function Movies() {
  return (
    <div>
        <NavBar/>
        <div class="movie1"><i class="fa-solid fa-ellipsis"></i></div>

<div class="identifires">
     <div class="movies" >
         <div class="navigation">
             <button>TRENDING</button>
             <button>POPULAR</button>
             <button>UPCOMING</button>
         </div>
         <div class="pre_show">
             <p>Online Movies Booking</p>
             <p id="show2">All Available Movies</p>
         </div>
         <div class="all_movies">
             <div class="type1">
                 <div class="one_mv">
                     <img src="batman.jpg" alt=""/>
                     <p>BATMAN 4</p>
                     <div class="identif">
                         <i class="fa-solid fa-download"></i>
                         <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                         <h3>Anime</h3>
                         <button>click to watch</button>
                         
 
                     </div>
                 </div>
                 <div class="one_mv">
                     <img src="uncharted.jpg" alt=""/>
                     <p>Uncharted</p>
                     <div class="identif">
                         <i class="fa-solid fa-download"></i>
                         <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                         <h3>Anime</h3>
                         <button>click to watch</button>
 
                     </div>
                 </div>
                 <div class="one_mv">
                     <img src="adam.jpg" alt=""/>
                     <p>Black Adam</p>
                     <div class="identif">
                         <i class="fa-solid fa-download"></i>
                         <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                         <h3>Anime</h3>
                         <button>click to watch</button>
 
                     </div>
                 </div>
                 


             </div>
             <div class="type1">
                 <div class="one_mv">
                     <img src="thrones.jpg" alt=""/>
                     <p>GOT</p>
                     <div class="identif">
                         <i class="fa-solid fa-download"></i>
                         <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                         <h3>Anime</h3>
                         <button>click to watch</button>
 
                     </div>
                 </div>
                 <div class="one_mv">
                     <img src="train.jpg" alt=""/>
                     <p>Bullet Train</p>
                     <div class="identif">
                         <i class="fa-solid fa-download"></i>
                         <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                         <h3>Anime</h3>
                         <button>click to watch</button>
 
                     </div>
                 </div>
                 <div class="one_mv">
                     <img src="titan.jpg" alt=""/>
                     <p>Titans</p>
                     <div class="identif">
                         <i class="fa-solid fa-download"></i>
                         <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                         <h3>Anime</h3>
                         <button>click to watch</button>
 
                     </div>
                 </div>
                 


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

         </div>


     </div>
     


 
 
 
     
        
         
       


    








      <Footer/>

         

    
     
     
     </div>


 
 
 

  )
}

export default Movies