import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
    const [PackageId, setPackageId] = useState("");
    const [PackageName, setPackageName] = useState("");
    const [PackageType, setPackageType] = useState("");
    const [PackageLocation, setPackageLocation] = useState("");
    const [PackagePrice, setPackagePrice] = useState(0);
    const [PackageFetures, setPackageFetures] = useState("");
    const [PackageDetails, setPackageDetail] = useState("");
    const [PackageImage, setPackageImage] = useState(null);
    const [managedata, setManagedata] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    async function getdata() {
        let data = { PackageId: id };

        let result = await fetch("http://clickandcall.spectricssolutions.com/apilist/toursapi/admin_packages_edit.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });
        result = await result.json();
        console.warn(result);
        setManagedata(result.details);
    }

    useEffect(() => {
        getdata();
    }, []); 

    async function updatedata() {
        let formData = new FormData();
        formData.append('PackageId', PackageId);
        formData.append('PackageName', PackageName);
        formData.append('PackageType', PackageType);
        formData.append('PackageLocation', PackageLocation);
        formData.append('PackagePrice', PackagePrice);
        formData.append('PackageFetures', PackageFetures);
        formData.append('PackageDetails', PackageDetails);
        if (PackageImage) {
            formData.append('PackageImage', PackageImage);
        }

        let result = await fetch("http://clickandcall.spectricssolutions.com/apilist/toursapi/admin_packages_update.php", {
            method: 'POST',
            body: formData 
        });
        result = await result.json();
        console.warn(result);
        if (result.message === "Update operation successful") {
            navigate('/manage');
            alert(result.message);
        }
    }

    return (
        <>
            {managedata.map((details, index) => ( 
                <div key={index}>
                    <input type='text' placeholder='Id' defaultValue={details.PackageId} onChange={(e) => setPackageId(e.target.value)} />
                    <input type='file' placeholder='Image' onChange={(e) => setPackageImage(e.target.files[0])} />
                    <input type='text' placeholder='PackageName' defaultValue={details.PackageName} onChange={(e) => setPackageName(e.target.value)} />
                    <input type='text' placeholder='PackageType' defaultValue={details.PackageType} onChange={(e) => setPackageType(e.target.value)} />
                    <input type='text' placeholder='PackageLocation' defaultValue={details.PackageLocation} onChange={(e) => setPackageLocation(e.target.value)} />
                    <input type="number" min="0.00" max="100000.00" step="0.01" placeholder='PackagePrice' defaultValue={details.PackagePrice} onChange={(e) => setPackagePrice(e.target.value)} />
                    <input type='text' placeholder='PackageFetures' defaultValue={details.PackageFetures} onChange={(e) => setPackageFetures(e.target.value)} />
                    <input type='text' placeholder='PackageDetails' defaultValue={details.PackageDetails} onChange={(e) => setPackageDetail(e.target.value)} />
                    <button type="submit" className="btn" onClick={updatedata}>Submit</button>
                </div>
            ))}
        </>
    );
}
