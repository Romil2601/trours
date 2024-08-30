import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function Header() {
  const navigate = useNavigate();

  function logoutdata() {
    localStorage.clear()

    alert('You have been logged out!')
    navigate('/')
  }

  // async function search(PackageId) {

  //   let data = PackageId
  //   let result = await fetch("http://clickandcall.spectricssolutions.com/apilist/toursapi/packages_id_fetch.php", {
  //     'method': 'POST',
  //     'headers': {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     'body': JSON.stringify(data)

  //   })
  //   result = await result.json()
  // }
  
  return (
    <>
      <Navbar className='navbar' bg="light" data-bs-theme="light">
        <Container>
          
          <Navbar.Brand href="/Home">SKYFLY</Navbar.Brand>

          {
            (localStorage.getItem('user')) ?
              <>
                <Nav className="navlink">
                  <Nav.Link href="/Home">Home</Nav.Link>
                  <Nav.Link href="/destinations">Destinations</Nav.Link>
                  <Nav.Link href="/add">Add</Nav.Link>
                  <Nav.Link href="/manage">Manage</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>

                <Nav className='navlink'>
                  <Nav.Link onClick={logoutdata}>Logout</Nav.Link>
                </Nav>
              </>
              :
              <>
                <Nav className="navlink">
                  <Nav.Link href="/Home">Home</Nav.Link>
                  <Nav.Link href="/destinations">Destinations</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>

                <Nav className='navbar-end'>
                  <Nav.Link href="/">Login</Nav.Link>
                  <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
              </>
          }
        </Container>
      </Navbar>
    </>
  );
}