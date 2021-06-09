import Header from './Components/Header'
import Login from './Components/Login'
import Register from './Components/Register'
import Cart from './Components/Cart'
import Users from './Components/Users'
import './App.css';
import { useState } from 'react';

function App() {
  const [login, setlogin] = useState(true);
  const [register, showregister] = useState(false);
  const [cart, setcart] = useState(false);
  const [header, setheader] = useState(false);
  const [count, setcount] = useState(0);
  const [link, setlink] = useState(false);

  const cartCount = () => {
    setcount(count + 1)
  }

  const showRegister = () => {
    setlogin(false);
    showregister(true);
    setcart(false);
    setheader(false);
  }

  const LoginCheck = (logindetails) => {
    console.log('LoginCheck  *********');
    let details = localStorage.getItem('Details')
    let parseDetails = JSON.parse(details);
    if(parseDetails.email === logindetails.emailId && parseDetails.password === logindetails.password) {
      setlogin(false);
      showregister(false);
      setcart(true);
      setheader(true);
    } else {
      setcart(false);
      setheader(false);
      alert('wrong details');
    }
  }

  const signup = (values) => {
    console.log('signup  *********');
    localStorage.setItem('Details', JSON.stringify(values));
    setlogin(true)
  }

  const linkRoute = () => {
    setheader(true);
    setlink(true);
    setcart(false);
  }

  const homeRoute = () => {
    setheader(true);
    setlink(false);
    setcart(true);
  }

  return (
    <div>
      <Header cartcount={count} loggedIn={header} click={showRegister} linkRoute={linkRoute} homeRoute={homeRoute} />
      { login === true && <Login LoginCheck={LoginCheck} /> }
      { login === false && register === true && <Register signup={signup} /> }
      { login === false && cart === true && <Cart addCount={cartCount} /> }
      { login === false && cart === false && link === true && <Users  /> }
    </div>
  );
}

export default App;
