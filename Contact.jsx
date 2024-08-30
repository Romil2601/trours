import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Contact() {

  const [FullName, setFullName] = useState("");
  const [EmailId, setEmailId] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [Subject, setSubject] = useState("");
  const [Description, setDescription] = useState("");

  const navigate = useNavigate();

  async function Addquery() {
    let data = { FullName, EmailId, MobileNumber, Subject, Description }
    console.log(data);

    let result = await fetch("http://clickandcall.spectricssolutions.com/apilist/toursapi/equery_add.php", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)

    })
    result = await result.json();
    console.log("message", result);


    if (result.message === 'Add operation successful') {
      localStorage.setItem('user', JSON.stringify(result))
      // alert(result.message)
      console.warn(result)
      navigate('/Home')
    }
    else {
      alert(result.message);
    }
  }

  return (
    <>

      <div className='banner'>
        <h1>Contact</h1>
        <p>We'd Love to support you!</p>
      </div>

      <div className='ContactUs'>
        <div className="row">
          <h3>Contact Us</h3>
        </div>
        <div className="row">
          <h4 style={{ textAlign: 'center' }}>We'd love to hear from you!</h4>
        </div>
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input type="text" value={FullName} onChange={(e) => (setFullName(e.target.value))} required />
              <label>Name</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input type="text" value={EmailId} onChange={(e) => (setEmailId(e.target.value))} required />
              <label>Email</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{ float: 'right' }}>
              <input type="text" value={MobileNumber} onChange={(e) => (setMobileNumber(e.target.value))} required />
              <label>Phone Number</label>
            </div>
          </div>
          <div className="row input-container">
            <div className="col-xs-12">
              <div className="styled-input wide">
                <input type="text" value={Subject} onChange={(e) => (setSubject(e.target.value))} required />
                <label>Subject</label>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="styled-input wide">
                <textarea value={Description} onChange={(e) => (setDescription(e.target.value))} required></textarea>
                <label>Message</label>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="btn-lrg submit-btn" onClick={Addquery}>Send Message</div>
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
                <li><a href="/aboutus">About</a></li>
                <li><a href="/destinations">Destinations</a></li>
                <li><a href="/blogs">Blogs</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h4>Quick links</h4>
              <ul className="list-unstyled">
                <li><a href="/">Home</a></li>
                <li><a href="/aboutus">About</a></li>
                <li><a href="/destinations">Destinations</a></li>
                <li><a href="blogs">Blogs</a></li>
                <li><a href="/contact">Contact</a></li>
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
