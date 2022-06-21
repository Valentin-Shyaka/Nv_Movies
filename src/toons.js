import React from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function Toons() {
  return (
    
      <div>
          <NavBar/>
    <div className="homepg" id="homepg">    
          <span id="hometxt">
              <h2 id="id">Bring <br/>Toons to life</h2>
              <p id="haha1">Let your imagination flourish in your heart and enrich your soul</p>
              <input type="button" id="hbutt" value="Learn more" onclick="document.location='learnmorepg.html'"/><i className="fa-solid fa-arrow-down-long"></i>
          </span>
          <div>
              <img src="coco-removebg-preview.png" alt="" id="coco"/>
          </div>
          <div className="templates">
              <div className="row1">
              <div className="info">
                  <img src="the_croods.jpg" alt="" id="temp"/>
                  <p id="par4">The Croods 2</p>
              </div>
              <div className="info">
                  <img src="ht4.jpg" alt="" id="temp"/>
                  <p id="par4">Hotel Transylvania 4</p>
              </div>
              </div>
              <div className="row2">
                  <div className="info">
                      <img src="encanto.jpg" alt="" id="temp"/>
                      <p id="par4">Encanto</p>
                  </div>
                  <div className="info">
                      <img src="incredibles.jpg" alt="" id="temp"/>
                      <p id="par4">The incredibles</p>
                  </div>
                  </div>
  
  
          </div>

      </div>
      <div className="pup"></div>
             
      
              <div className="discover">
                          <div id="tbg">
                              <h2 id="trend">New Releases</h2>
                              
                          </div>
                          <div className="row">
                              <div className="col span-1-of-3">
                                  <h4 className="head">Pixar</h4>
                                  <img src="coco.jpg" alt="London" id="down"/>
                                  <div className="ice"><i className="fa-solid fa-circle-play"></i></div>
                                  <p id="haha">Miguel pursues his love for singing in spite of his family's ban on music. </p></div>
                                  <div className="col span-1-of-3">
                                  <h4 className="head">Japanime</h4>
                                  <img src="titan.jpg" alt="San Fransisco" id="down" />
                                  <p id="haha">When man-eating Titans first appeared 100 years ago, humans found safety...</p></div>
                                  <div className="col span-1-of-3">
                                  <h4 className="head">Cartoons</h4>
                                  <img src="dalton.jpg" alt="Copenhague" id="down" />
                                  <p id="haha">Follows the adventures of the Dalton brothers as they try to escape from prison.</p></div>
                                  

                          </div>
                          

                      </div>
      <div className="follow" id="folow">
          <span id="img"><img src="dodo-removebg-preview.png" alt="follow"/></span>
          <span id="kally">
          <h2 id="follows">FOLLOW <br/> OUR PLATFORMS</h2>
          <p id="par2">A sentence or two describing this item. Lorem ipsum dolor sit amet, 
              consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
              <input type="button" value="Sign Up" id="sign" onclick="document.location='login.html'"/></span>
             
      </div>
      
      
      <div className="subs" id="subs">
          <h2 id="news">SUBSCRIBE TO OUR NEWS LETTER</h2>
          <p id="soon">We'll get touch with you soon</p>
          <span id="subsbutt">
              <input type="text" placeholder="NAME" id="kl" onfocus="this.style.backgroundColor='#f89104'" onblur="this.style.backgroundColor='#312f2f'"/>
              <input type="text" placeholder="EMAIL" id="kl" onfocus="this.style.backgroundColor='#f89104'" onblur="this.style.backgroundColor='#312f2f'" />
              <input type="Button" value="SUBMIT" id="mit" onclick="greetuser()"/>
          </span>
          
      
        <div className="footer">
          <span id="about">
              <h3><u>About us</u></h3><br/>
              <p>Our mission <br/>We're hiring</p>
          </span>
          <span id="about">
              <h3><u>Resources</u></h3><br/>
              <p>Tutorials<br/>Brand assets</p>
          </span>
          <span id="about">
              <h3><u>Contact us</u></h3><br/>
              <p>321-555-5555
                  <br/>

                  info@company.com</p>
          </span>

        </div>
    
    </div>
    <Footer/>
    </div>
  )
}

export default Toons