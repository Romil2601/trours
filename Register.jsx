import { useState } from 'react'

export default function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    async function signup() {

        let data = { username, password, email }

        let result = await fetch("http://clickandcall.spectricssolutions.com/apilist/toursapi/admin_register.php", {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            'body': JSON.stringify(data)

        })
        result = await result.json()
        alert(result.message)
    }

    return (

        <div className='register-page'>
            <div className="register">
                <div className='register-input'>
                    <input
                        type="text"
                        id="name"
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className='register-input'>
                    <input
                        type="text"
                        id="pasword"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className='register-input'>
                    <input
                        type="text"
                        id="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='register-input'>
                    <button type="submit" onClick={signup}>SignUp</button>
                </div>
            </div>
        </div>
    )
}