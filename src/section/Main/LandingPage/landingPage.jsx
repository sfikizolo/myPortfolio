import React from 'react'
import './landingPage.css'
function LandingPage() {
    return (
      <section className="h-100 w-100 d-flex align-items-center  landing-section">
          <div className="content-container d-flex flex-column gap-md-3">
                  <h1 className="text-white">
                      <span className="name theme-color">
                          <span className="name theme-color">Molweni</span>, I am <br/>
                      </span>
                  
                      <span className="name theme-color">Sisipho Fikizolo</span>
                  </h1>
                  <p className="text theme-color">
                  I am a problem solver who enjoys tackling complex tech challenges.</p>
                  <div
                      className="home-buttons mt-3 d-flex gap-2 gap-md-4 flex-row justify-content-center justify-content-md-start">
                      <a href='#contact-container'	> 
                      <button className="contact-btn theme-border-color background">Contact Me</button>
  
                      </a>
                     
                  </div>
              </div>
      </section>
    )
  }
  
  export default LandingPage