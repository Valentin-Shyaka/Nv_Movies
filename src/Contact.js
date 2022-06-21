import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function Contact() {
  return (
    <div>
        <NavBar/>
        <div class="contact">
        <div class="subcont1">
            <h3>GET IN TOUCH</h3>
            <p>We'd love to hear from you !</p>
            <form>
            <div class="input">
                <input type="text" placeholder="Name" id="text"/>

            </div>
            <div class="input">
                <input type="text" placeholder="Email" id="text1"/>

            </div>
            <div class="input">
                <input type="text" placeholder="Phone No." id="text2"/>

            </div>
            <div class="input2">
                <textarea  cols="30" rows="10" placeholder="Messages/Suggestions"></textarea>

            </div>
            <button>submit</button>
            </form>
            

        </div>
        <div class="subcont2">
            <div class="address">
                <h4>ADDRESS</h4>
                <p><i class="fa-solid fa-location-dot"></i>210,Louise Ave Nashville, IN 37203</p>

            </div>
            <div class="phone">
                <h4>PHONES</h4>
                <p><i class="fa-solid fa-phone"></i>0845 365 0000</p>
                <p><i class="fa-solid fa-phone"></i>0845 365 0000</p>

            </div>
            <div class="timings">
                <h4>TIMINGS</h4>
                <p>Monday to Sunday</p>
                <p>10 AM to 5 PM</p>

            </div>


        </div>

    </div>
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
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i class="fa-brands fa-github"></i></a>
        </div>
        <div class="text2">K-LIX © copyright 2022</div>


    </div>
    <Footer/>
    </div>
  )
}

export default Contact