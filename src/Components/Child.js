import React from 'react'

function Child(props) {
    return (
        <div className="container text-center">
            <h1>Child Component</h1>
            <input type="text" onChange={(event) => props.change(event.target.value)} />
        </div>
    )
}

export default Child
