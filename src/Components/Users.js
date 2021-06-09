import React from 'react'
import Child from './Child'
import { useState } from 'react'

function Users() {
    const [text, settext] = useState('Parentcomponent Text')
    const changeFunc = (text) => {
        settext(text)
    }

    return (
        <div className="container text-center">
            <h1>Parent Component</h1>
            <br />
            <h3>{text}</h3>
            <br />
            <Child change={changeFunc}/>
        </div>
    )
}

export default Users
