import React from 'react';
import {useState} from 'react';

function Login(props) {
    const txtleft = {
        textAlign: "left"
    }
    const [logindetails, setlogindetails] = useState({
        emailId: '',
        password: ''
    })
    return (
        <div className="offset-4 col-4 mt-5 container">
            <div className="mb-3">
                <label style={txtleft} className="form-label w-100 text-left">Email address</label>
                <input type="email" className="form-control" onChange={(event) => setlogindetails({...logindetails, emailId: event.target.value})} placeholder={logindetails.emailId} />
            </div>
            <div className="mb-3">
                <label style={txtleft} className="form-label w-100 text-left">Password</label>
                <input type="password" className="form-control" onChange={(event) => setlogindetails({...logindetails, password: event.target.value})} placeholder={logindetails.password} />
            </div>
            <div className="mb-3">
                <button onClick={() => props.LoginCheck(logindetails)}  className="btn btn-primary btn-sm" type="submit">Login</button>
            </div>
        </div>
    )
}

export default Login
