import { React, useEffect, useState } from 'react'
import { Card, CardGroup, CardSubtitle, CardText } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Destinations() {

  const [show, setShow] = useState([]);

  async function Showpackage() {

    let result = await fetch("http://clickandcall.spectricssolutions.com/apilist/toursapi/admin_packages_fetch.php", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },

    });
    result = await result.json()
    if (result.message === "Data Fetch successful") {
      console.log(result.details);
      setShow(result.details)
    }

  }

  useEffect(
    () => {
      Showpackage()
    }, []
  )


  return (
    <>

      <div className='banner-destinations'>
        <h1>Destinations</h1>
        <p>Explore Packages</p>
      </div>

      <div className="cards">

        {show.map((details) =>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`http://clickandcall.spectricssolutions.com/apilist/toursapi/${details.PackageImage}`} />
            <Card.Title>{details.PackageName}</Card.Title>
            <Card.Body>
              <CardSubtitle>Loaction: {details.PackageLocation}</CardSubtitle>
              <CardGroup>Price: {details.PackagePrice}</CardGroup>
              <CardGroup>Type: {details.PackageType}</CardGroup>
              <br></br>
              <CardText>Features: {details.PackageFetures}</CardText>
              <Card.Text>Details: {details.PackageDetails}</Card.Text>
            </Card.Body>
            {
            (localStorage.getItem('user')) ?
           <>
            <CardText> <button variant="outline-info"><Link to={'/Makebooking/' + details.PackageId}>Make Booking</Link></button></CardText>
           </>
            :
            <>
             <CardText> <button variant="outline-info"><Link to= '/'>Make Booking</Link></button></CardText>
            </>
}
          </Card>
        )}
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
                <li><a href="/destinations">Destinations</a></li>
                <li><a href="/add">Add</a></li>
                <li><a href="/manage">Manage</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/aboutus">About</a></li>
                <li><a href="/blogs">Blogs</a></li>
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
