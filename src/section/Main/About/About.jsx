import React from 'react'
import './about.css'
function AboutSection() {
	return (
	  <section className="h-100 w-100 d-flex align-items-center justify-content-center" id="#about-section">
		  <div className="about-container w-75 h-75 py-3">
				  <i class="bi bi-gear icon1 theme-color"></i>
				  <p className='paragraph1'>
				  I attend WeThinkCode as a software development student.
				  I am a skilled user of Java and Python who possesses a natural aptitude for problem-solving along with good design and integration talents.
				  Motivated by the thought of beginning and finishing new initiatives.
				  I'd like to start a career as a software developer with an established business that values technology.
				  </p>
  
				  <div className="reason">
					  <h2 className="mt-3 theme-color mb-3">Why I want to join SovTech?</h2>
					  <p className='reason-paragraph'>
					   You are the best company in the world that develops custom software, which is why I want to work for SovTech.
                       Your business creates a specialized cloud, mobile, and web applications to support growth strategies.
                       You are aware that many customers struggle with the platform's ability to grow and develop.
                       Your multidisciplinary teams are composed of tech enthusiasts with outstanding and varied development skills, 
					   and they are focused on developing scalable products that assist growth-oriented companies. 
					  </p>
				  </div>
		  </div>
	  </section>
	)
  }
  
  export default AboutSection