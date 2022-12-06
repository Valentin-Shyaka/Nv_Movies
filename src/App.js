import logo from './logo.svg';
import {useEffect,useState} from 'react'
import './App.css';
import { BrowserRouter,Routes,Router, Route } from 'react-router-dom';
import Toons from './toons';
import Movies from './Movies';
import Contact from './Contact';
import Home from './home';
import ViewMovie from './components/ViewMovie';
import { useContext } from 'react';
import NavBar from './components/NavBar';
import Landing from './Landing';
import { useNavigate } from 'react-router-dom';

function App() {
  
  const [movies, setMovies] = useState([])
  
  async function getMovies(){
      const movies= await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=8ded552ed8b3b2c99dd933bbc411544d&language=en-US&page=1")
      .then(res=>res.json()).then(data=>{setMovies(data.results)
      console.log(data)
  })
}
  useEffect(() => {
    getMovies();
  },[]);

  return (
    
    <BrowserRouter>
    
    <Routes>
         
          
              
          
          <Route path={"/"} element={<Landing/>} />
          <Route path={"/home"} element={<Home/>} />
          <Route path={"/toons"} element={<Toons/>} />
          <Route path={"/Releases"} element={<Movies/>} />
          <Route path={"/contact_us"} element={<Contact/>} />
          {movies.length>0 && movies.map((movie,i)=>(
          <Route path={`/viewMovie/${movie.id}`} element={<ViewMovie movie={movie}/>} />
          ))}
    
   
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
