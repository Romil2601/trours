import { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const notify = () => toast("Login Successful !");

  async function signin() {

    let data = { username, password }

    // console.warn(username, password)

    let result = await fetch("http://clickandcall.spectricssolutions.com/apilist/toursapi/user_login.php", {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      'body': JSON.stringify(data)

    })
    result = await result.json()
    if (result.message === "Login successfull") {
      localStorage.setItem('user', JSON.stringify(result))
      console.warn(result)
      navigate('/Home')
    }
    else {
      alert(result.message)
    }
  }

  const login = () => {
    signin();
    notify();
  };

  return (

    <>
      <div class="banner-login">
        <h1>Login</h1>
        <p>Become a Traveller..!</p>
      </div>

      <div className='login'>
        <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required></input>
        <input type='text' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
        <p>Create an Account?  <a href='/register'> Register</a></p>
        <Button onClick={login}>Login</Button>
        <ToastContainer />
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