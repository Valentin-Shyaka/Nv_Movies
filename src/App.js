import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Router, Route } from 'react-router-dom';
import Toons from './toons';
import Movies from './Movies';
import Contact from './Contact';
import Home from './home';

function App() {
  return (
    <BrowserRouter>
    <Routes>

          <Route path={"/"} element={<Home/>} />
          <Route path={"/toons"} element={<Toons/>} />
          <Route path={"/Releases"} element={<Movies/>} />
          <Route path={"/contact_us"} element={<Contact/>} />
    
    
    
    
    
    
    
    
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
