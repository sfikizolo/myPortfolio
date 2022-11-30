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
			
				<i class="bi bi-search icon3 theme-color"></i>
				<p className='paragraph3'>
					'//linked about'
				</p>				<div className="reason">
					<h2 className="mt-3 theme-color mb-3">Why I want to join SovTech?</h2>
					<p className='reason-paragraph'>
						'//the reason why I want to join'
					</p>
				</div>
		</div>
    </section>
  )
}export default AboutSection