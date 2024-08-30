import React from 'react'

export default function AboutUs() {
  return (
    <>

      <div class="banner-about">
        <h1>About Us</h1>
        <p>Know Us More</p>
      </div>

      <div className='about'>
        <div className='about-text'>
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button class="btnn" ><a href='/Contact'>Know More</a></button>
        </div>
        <div id='about-img'>
          <img src='https://i.pinimg.com/originals/71/fa/ff/71faff3e26cd4bef3ec542814b2567c2.png' alt='AboutImage' height={'400'} style={{ zIndex: '1' }}></img>
        </div>
      </div>

      <hr></hr>

      <div className='footer'>
        <div class="container py-4">
          <div class="row gy-4 gx-5">
            <div class="col-lg-4 col-md-6">
              <h4>SKYFLY</h4>
              <p class="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <p class="small mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" href="/">SKYFLY.com</a></p>
            </div>
            <div class="col-lg-2 col-md-6">
              <h4>Quick links</h4>
              <ul class="list-unstyled">
                <li><a href="/">Home</a></li>
                <li><a href="/aboutus">About</a></li>
                <li><a href="/destinations">Destinations</a></li>
                <li><a href="blogs">Blogs</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6">
              <h4>Newsletter</h4>
              <p class="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <form action="#">
                <div class="input-group mb-3">
                  <input class="form-control" type="text" placeholder="Recipient's username" />
                  <button class="btn btn-primary" type="button">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
