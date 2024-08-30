import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Adddata() {

    const [PackageName, setPackageName] = useState("")
    const [PackageType, setPackageType] = useState("")
    const [PackageLocation, setPackageLocation] = useState("")
    const [PackagePrice, setPackagePrice] = useState("")
    const [PackageFetures, setPackageFetures] = useState("")
    const [PackageDetails, setPackageDetail] = useState("")
    const [PackageImage, setPackageImage] = useState(null)

    const navigate = useNavigate();

    async function adddata() {

        let formdata = new FormData()
        formdata.append("PackageName",PackageName);
        formdata.append("PackageType",PackageType);
        formdata.append("PackageLocation",PackageLocation);
        formdata.append("PackagePrice",PackagePrice);
        formdata.append("PackageFetures",PackageFetures);
        formdata.append("PackageDetails",PackageDetails);
        formdata.append("PackageImage",PackageImage);

        let result = await fetch("http://clickandcall.spectricssolutions.com/apilist/toursapi/admin_packages_add.php", {
            'method': 'POST',
            'body': formdata

        })
        result = await result.json()
        console.warn(result)

        if (result.message === "Add operation successful") {
            navigate('/destinations')
            alert(result.message)
        }
        else {
            alert(result.message);
        }
    }

    return (
        <>

            <div className='banner-add'>
                <h1>Add Packages</h1>
                <hr></hr>
            </div>

            <div className='add' id='myForm'>

                <input type='file' placeholder='Image' onChange={(e) => setPackageImage(e.target.files[0])} />
                <input type='text' placeholder='PackageName' onChange={(e) => setPackageName(e.target.value)} />
                <input type='text' placeholder='PackageType' onChange={(e) => setPackageType(e.target.value)} />
                <input type='text' placeholder='PackageLocation' onChange={(e) => setPackageLocation(e.target.value)} />
                <input type="number" min="0.00" max="1000000.00" step="0.01" placeholder='PackagePrice' onChange={(e) => setPackagePrice(e.target.value)} />
                <input type='text' placeholder='PackageFetures' onChange={(e) => setPackageFetures(e.target.value)} />
                <input type='text' placeholder='PackageDetails' onChange={(e) => setPackageDetail(e.target.value)} />

                <button type="submit" class="btn" onClick={adddata}>Submit</button>

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