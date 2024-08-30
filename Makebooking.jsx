import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Makebooking() {

    const [from_date, setFromdate] = useState("");
    const [to_date, setTodate] = useState("");
    const [comment, setComment] = useState("");

    const { id } = useParams()
    
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    
    async function Addbooking() {
        
        let user_id = user.user.id
        let package_id = id
        
        let data = { package_id, user_id, from_date, to_date, comment }
        
        let result = await fetch("http://clickandcall.spectricssolutions.com/apilist/toursapi/user_package_booking_add.php", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
            
        })
        result = await result.json();
        console.log("message", result);
        
        
        if (result.message === "Booking successful") {
            
            console.warn(result)
            navigate('/destinations')
            window.location.href = 'https://buy.stripe.com/test_3cseVQ8UL91odQ4dQQ'
        }
        else {
            alert(result.message);
        }
    }

        return (
            
            <div className='makebooking'>
                <div>
                    <h2>From Date</h2>
                    <input type='date' onChange={(e) => setFromdate(e.target.value)}></input>
                </div>

                <div>
                    <h2>To Date</h2>
                    <input type='date' onChange={(e) => setTodate(e.target.value)}></input>
                </div>

                <div>
                    <h2>Comment</h2>
                    <input type='comment' onChange={(e) => setComment(e.target.value)}></input>
                </div>

                <div>
                    <button onClick={Addbooking}>Add Package</button>
                </div>
            </div>
        )
    }