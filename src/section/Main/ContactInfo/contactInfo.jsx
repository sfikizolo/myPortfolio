import React from 'react'
import './contactInfo.css'

function ContactInfo() {
    return (
      <section class="contact-section w-100 h-100 d-flex align-items-center justify-content-center">
          <div id ="contact-container"class="contact-container bg-white rounded-2">
              <form class="form py-5 px-4">
                  {/* name */}
                  <div class="mb-3">
                      <label for="name" class="form-label">Name</label>
                      <input type="text" class="form-control px-3" ></input>
                  </div>
  
                  {/* surname */}
                  <div class="mb-3">
                      <label for="name" class="form-label">Surname</label>
                      <input type="text" class="form-control px-3"></input>
                  </div>
  
                  {/* email */}
                  <div class="mb-3">
                      <label for="name" class="form-label">Email</label>
                      <input type="email" class="form-control px-3"></input>
                  </div>
  
                  <div class="submit-btn w-100 d-flex">
                      <button type="submit" class="btn submit-btn">Submit</button>
                  </div>
                  
              </form>
          </div>
      </section>
    )
  }
  
  export default ContactInfo