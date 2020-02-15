import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const handleLogout = ()=>{
    localStorage.clear()
    window.location.href='/user/login'
  }
  function LoginComponents(){
    return(
      <ul className="nav container-fluid" style={{background:'rgb(5,122,252)'}}>
            <li className="nav-item">
          <Link to='/'><a className="nav-link active" style={{color:'white'}}  href="#">
            Home
          </a></Link>
        </li>
            <li className="nav-item">
            <Link to='/user/notes'><a className="nav-link" style={{color:'white'}}  href="#">
          Notes
        </a></Link>
      </li>
      <li className="nav-item">
      <Link to='#' ><a className="nav-link" onClick={handleLogout} style={{color:'white'}}  href="#">
          Logout
        </a></Link>
      </li>
        </ul>
    )
  }
     function LoggedOutComponents(){
       return(
        <ul className="nav container-fluid" style={{background:'rgb(5,122,252)'}}>
        <li className="nav-item">
        <Link to='/'><a className="nav-link active" style={{color:'white'}}  href="#">
            Home
          </a></Link>
        </li>
        <li className="nav-item">
        <Link to='/user/register'><a className="nav-link disabled" style={{color:'white'}} href="#">
                Register
              </a></Link>
            </li>
            <li className="nav-item">
            <Link to='/user/login'><a className="nav-link disabled" style={{color:'white'}}  href="#">
                Login
              </a></Link>
            </li>
            </ul>
       )
     }
     let login
    if(localStorage.getItem("authToken")){
        login = <LoginComponents/>
    }else{
      login = <LoggedOutComponents/>
    }
    
  return (
    <div>
      {login} 
      
    </div>
  );
}

