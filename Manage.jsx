import { useEffect, useState } from 'react';
import { Table, Button, Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Manage() {

  const [managedata, setManagedata] = useState([])
  const [alluser, setAlluser] = useState([])
  const [inquiry, setInquiry] = useState([])
  const [showbookings, setShowbookings] = useState([])

  async function qwerty() {

    let result = await fetch("http://clickandcall.spectricssolutions.com/apilist/toursapi/admin_packages_fetch.php", {
      'method': 'GET',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    result = await result.json()

    if (result.message === "Data Fetch successful") {
      // console.log(result);
      setManagedata(result.details)
    }
  }

  useEffect(() => {
    qwerty()
  });

  async function users() {

    let result = await fetch("http://clickandcall.spectricssolutions.com/apilist/toursapi/alluser.php", {
      'method': 'GET',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    result = await result.json()
    if (result.message === "Data Fetch successful") {
      // console.log(result);
      setAlluser(result.details)
    }

  }

  useEffect(() => {
    users()
  });

  async function Inquiry() {

    let result = await fetch("http://clickandcall.spectricssolutions.com/apilist/toursapi/admin_show_enquery.php", {
      'method': 'GET',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    result = await result.json()

    if (result.message === "Data Fetch successful") {
      // console.log(result);
      setInquiry(result.details)
    }

  }

  useEffect(() => {
    Inquiry()
  });

  async function Showbookings() {

    let result = await fetch("http://clickandcall.spectricssolutions.com/apilist/toursapi/admin_show_booking.php", {
      'method': 'GET',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    result = await result.json()

    if (result.message === "Data Fetch successful") {
      // console.log(result);
      setShowbookings(result.details)
    }

  }

  useEffect(() => {
    Showbookings()
  });






  
  async function deletedata(PackageId) {

    let data = { PackageId }
    let result = await fetch("http://clickandcall.spectricssolutions.com/apilist/toursapi/admin_packages_delete.php", {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      'body': JSON.stringify(data)

    })
    result = await result.json()
    if (result.message === "Delete operation successful") {
      alert(result.message)
      qwerty();
    }

  }

  return (
    <>

      <Tabs style={{ display: "inline-flex" }}>
        <Tab eventKey="Packages" title="Packages">
          <Table striped bordered hover style={{ margin: "10px" }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Uname</th>
                <th>Type</th>
                <th>Location</th>
                <th>Price</th>
                <th>Features</th>
                <th>Details</th>
                <th>Images</th>
                <th>Creation-Date</th>
                <th>Upadation-Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                managedata.map((details) =>

                  <tr>
                    <td>{details.PackageId}</td>
                    <td>{details.PackageName}</td>
                    <td>{details.PackageType}</td>
                    <td>{details.PackageLocation}</td>
                    <td>{details.PackagePrice}</td>
                    <td>{details.PackageFetures}</td>
                    <td>{details.PackageDetails}</td>
                    <td><img src={`http://clickandcall.spectricssolutions.com/apilist/toursapi/${details.PackageImage}`} alt='PackageImg' width={'120px'}></img></td>
                    <td>{details.PackageCreationdate}</td>
                    <td>{details.UpadationDate}</td>
                    <td>
                      <Button variant='outline-dark'><Link to={'/Edit/' + details.PackageId} >Edit</Link></Button>
                      <Button variant='outline-danger' onClick={() => { deletedata(details.PackageId) }}>Delete</Button>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </Tab>

        <Tab eventKey="All Users" title="All Users">
          <Table striped bordered hover style={{ margin: "10px" }}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Password</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {
                alluser.map((item) =>

                  <tr>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneno}</td>
                    <td>{item.password}</td>
                    <td>{item.address}</td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </Tab>

        <Tab eventKey="Inquiry" title="Inquiry" >
          <Table striped bordered hover style={{ margin: "10px" }}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile No.</th>
                <th>Subject</th>
                <th>Discription</th>
              </tr>
            </thead>
            <tbody>
              {
                inquiry.map((details) =>

                  <tr>
                    <td>{details.id}</td>
                    <td>{details.FullName}</td>
                    <td>{details.EmailId}</td>
                    <td>{details.MobileNumber}</td>
                    <td>{details.Subject}</td>
                    <td>{details.Discription}</td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </Tab>

        <Tab eventKey="Showbookings" title="Show Bookings" >
          <Table striped bordered hover style={{ margin: "10px" }}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Package Id</th>
                <th>User Id</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Comment</th>
                <th>Register Date</th>
              </tr>
            </thead>
            <tbody>
              {
                showbookings.map((details) =>

                  <tr>
                    <td>{details.id}</td>
                    <td>{details.package_id}</td>
                    <td>{details.user_id}</td>
                    <td>{details.from_date}</td>
                    <td>{details.to_date}</td>
                    <td>{details.comment}</td>
                    <td>{details.registerdate}</td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </>
  )
}
