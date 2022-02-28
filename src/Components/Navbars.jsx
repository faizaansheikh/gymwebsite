import React from 'react';
import '../App.css'
import { Link} from 'react-router-dom';
// import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { GiRunningNinja } from 'react-icons/gi';
function Navbars() {
  return (
    <>
<div className='stick'>
<nav className="navbar navbar-expand-lg navbar-dark background">
  <div className="container">
    <a className="navbar-brand logo" href="#"><GiRunningNinja size={50} color="red"/>FREEDOM</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item list">
        <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item list">
        <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item list">
        <Link className="nav-link" to="/pics">Pics</Link>
        </li>
        <li className="nav-item list">
        <Link className="nav-link" to="/contact">Contact</Link>
        </li>
    
      </ul>
      <form className="d-flex">
       
        
      </form>
    </div>
  </div>
</nav>
</div>
     

    </>


  );
}

export default Navbars;
