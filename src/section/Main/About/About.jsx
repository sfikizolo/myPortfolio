import React from 'react'
import './AboutSection.css'
function AboutSection() {
  return (
    <section className="h-100 w-100 d-flex align-items-center justify-content-center" id="#about-section">
        <div className="about-container w-75 h-75 py-3">
				<i class="bi bi-gear icon1 theme-color"></i>
				<p className='paragraph1'>
				'//linked about'
				</p>
			
				<i class="bi bi-code-slash icon2 theme-color"></i>
				<p className='paragraph2'>
					'//linkend about'
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