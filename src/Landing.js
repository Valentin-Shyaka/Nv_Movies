import React from 'react'
import { Navigate } from 'react-router-dom'
import "./landing.css"
import { useNavigate } from 'react-router-dom'


function Landing() {
  const navigate=useNavigate()
  function next(){
    navigate("/home")
  }
  const logo= "klix_logo.png"
  const background= "background.jpg"
  return (
    <div className='container'>
    <div className='landing' >

    <div >
      <img src={logo} />
      <p>Welcome to <span>Klix</span></p>
      <button
        onClick={()=>next()}
      >Go to Home</button>
    </div>

    </div>
    </div>
  )
}

export default Landing