import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Carousel className='content-slider'>
        <Carousel.Item alt="First slide"
          fluid
          style={{
            height: "660px",
            width: "100%",
            objectFit: "cover",
            filter: "brightness(90%)",
          }}>

          <img src='https://wallpaperaccess.com/full/201088.jpg' alt='Vietnam'></img>

          <Carousel.Caption style={{
            textDecoration: "bolder",
            textAlign: "left",
            marginBottom: "400px",
          }}>

            <h2 style={{ fontSize: "80px" }}>Vietnam</h2>
            <p style={{ fontSize: "20px" }} > Legend has it that the peoples of this land originated from a union between an immortal Chinese princess and
              “The Dragon Lord of the Seas.”</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item alt="Second slide"
          fluid
          style={{
            height: "660px",
            width: "100%",
            objectFit: "cover",
            filter: "brightness(80%)",
          }}>

          <img src='https://www.fizzer.com/wp-content/uploads/histoire-taj-mahal.jpg' alt='Taj Mahal'></img>

          <Carousel.Caption style={{
            textDecoration: "bolder",
            textAlign: "left",
          }}>

            <h2 style={{ fontSize: '80px', marginLeft: '700px' }}>Taj Mahal</h2>
            <p style={{ fontSize: '20px' }}>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna
              in Agra, Uttar Pradesh, India. </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item alt="Third slide"
          fluid
          style={{
            height: "660px",
            width: "100%",
            objectFit: "cover",
            filter: "brightness(90%)",
          }}>

          <img src='https://66.media.tumblr.com/bc35bb76aa6bb3379f99562228002101/tumblr_o5xz5833UG1tomxvuo4_1280.jpg' alt='Bali'></img>

          <Carousel.Caption style={{
            textDecoration: "bolder",
            textAlign: "left",
          }}>

            <h2 style={{ fontSize: '80px' }}>Bali</h2>
            <p style={{ fontSize: '20px' }}>
              Bali is the only Hindu-majority province in Indonesia, with 86.9% of the population adhering to Balinese Hinduism.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className='about'>
        <div className='about-text'>
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button class="btnn">Know More</button>
        </div>
        <div id='about-img'>
          <img src='https://i.pinimg.com/originals/71/fa/ff/71faff3e26cd4bef3ec542814b2567c2.png' alt='AboutImage' height={'400'} style={{ zIndex: '1' }}></img>
        </div>
      </div>

      <div class="parallax">
        <button class="btnn-1"><a href='/destinations'>Destinations</a></button>
      </div>

      <div className='blogs'>
        <h3 style={{ padding: '50px' }}>Blogs</h3>
        <h4 style={{ textAlign: 'center' }}>"Either write something worth reading or do something worth writing."- Benjamin Franklin</h4>

        <div className='blogs_example'>
          <div class="blog">
            <img src="https://images.unsplash.com/photo-1615147342761-9238e15d8b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" class="card__image" alt="brown couch" />
            <div class="card__content">
              <time datetime="2021-03-30" class="card__date">3 March 2024</time>
              <span class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
          </div>

          <div class="blog">
            <img src="https://images.unsplash.com/photo-1615147342761-9238e15d8b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" class="card__image" alt="brown couch" />
            <div class="card__content">
              <time datetime="2021-03-30" class="card__date">3 March 2024</time>
              <span class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
          </div>

          <div class="blog">
            <img src="https://images.unsplash.com/photo-1615147342761-9238e15d8b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" class="card__image" alt="brown couch" />
            <div class="card__content">
              <time datetime="2021-03-30" class="card__date">3 March 2024</time>
              <span class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className='footer'>
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h4>SKYFLY</h4>
              <p className="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <p className="small mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" href="/">SKYFLY.com</a></p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h4>Quick links</h4>
              <ul className="list-unstyled">
                <li><a href="/">Home</a></li>
                <li><a href="/destinations">Destinations</a></li>
                <li><a href="/add">Add</a></li>
                <li><a href="/manage">Manage</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/aboutus">About</a></li>
                <li><a href="/blogs">Blogs</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4>Newsletter</h4>
              <p className="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <form action="#">
                <div className="input-group mb-3">
                  <input className="form-control" type="text" placeholder="Recipient's username" />
                  <button className="btn btn-primary" type="button">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}