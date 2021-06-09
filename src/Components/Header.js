import React from 'react';

function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand" href="#">React</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            props.loggedIn === true && <>
                                    <li className="nav-item px-3 py-1" onClick={props.homeRoute}>
                                        Home
                                    </li>
                                    <li className="nav-item px-3 py-1" onClick={props.linkRoute}>
                                        Users
                                    </li>
                                    </>
                        }
                    </ul>
                    {
                        props.loggedIn === false && <><button className="btn btn-outline-success" type="submit" onClick={props.click}>Register</button> </>
                    }
                    {
                        props.loggedIn === true && <> <button type="button" className="btn btn-success">
                        cart <span className="badge bg-secondary">{props.cartcount}</span>
                      </button> </>
                    }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
