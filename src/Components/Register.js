import React from 'react';
import {useState} from 'react';

function Register(props) {
    const txtleft = {
        textAlign: "left"
    }
    const [formvalues, setformvalues] = useState({
        name: '',
        age: '',
        email: '',
        password: ''
    })
    return (
        <div className="offset-4 col-4 mt-5 container">
            <div className="mb-3">
                <label style={txtleft} className="form-label w-100 text-left">Name</label>
                <input type="text" className="form-control" onChange={(event) => setformvalues({...formvalues, name: event.target.value})} placeholder={formvalues.name} />
            </div>
            <div className="mb-3">
                <label style={txtleft} className="form-label w-100 text-left">Age</label>
                <input type="number" className="form-control" onChange={(event) => setformvalues({...formvalues, age: event.target.value})} placeholder={formvalues.age} />
            </div>
            <div className="mb-3">
                <label style={txtleft} className="form-label w-100 text-left">Email address</label>
                <input type="email" className="form-control" onChange={(event) => setformvalues({...formvalues, email: event.target.value})} placeholder={formvalues.email} />
            </div>
            <div className="mb-3">
                <label style={txtleft} className="form-label w-100 text-left">Password</label>
                <input type="password" className="form-control" onChange={(event) => setformvalues({...formvalues, password: event.target.value})} placeholder={formvalues.password} />
            </div>
            <div className="mb-3">
                <button onClick={() => props.signup(formvalues)} className="btn btn-primary btn-sm" type="submit">Sign up</button>
            </div>
        </div>
    )
}

export default Register
