import React from 'react'
import {FaFacebookSquare} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import "./footer.css";

function Footer() {
  return (
    <div class="foot1">
     <div class="about">
         <span>Status</span>
         <span>Privacy</span>
         <span>Terms</span>
         <span>Cookie&nbsp;Preferences</span>
         <span>Contact&nbsp;Us</span>
         <span>Change&nbsp;Language</span>
     </div>
     <div class="icon">
         <a href="#"><i class="fa-brands fa-facebook"><FaFacebookSquare/></i></a>
         <a href="#"><i class="fa-brands fa-instagram"><FaInstagram/></i></a>
         <a href="#"><i class="fa-brands fa-linkedin-in"><FaLinkedin/></i></a>
         <a href="#"><i class="fa-brands fa-github"><FaGithub/></i></a>
     </div>
     <div class="text2">K-LIX © copyright 2022</div>


 </div>
  )
}

export default Footer