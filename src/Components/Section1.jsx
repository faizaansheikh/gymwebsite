import React from 'react';
import '../App.css';
import Footer from './Footer';
// import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
// import { GiRunningNinja } from 'react-icons/gi';
// import wall1 from "./images/wall.jpg"
function Section1() {
  return (
  <>
  <div>
    <div className="container-fluid fin">
        <div className="row">
        <div class="col-12 col-sm-12 col-md-1 empty"></div>
                <div class="col-12 col-sm-12 col-md-9 work">

                    <br/>
                    <h1 class="head">STEP UP YOUR<br /> <span className="fit">FITTNESS CHALLENGE </span> <br />
                    WITH US.</h1>
                  
                    <br/>
                    <button type="button" id="butt" class="btn btn-danger btn-lg">GET STARTED</button>
                
                </div>
                <div class="col-12 col-sm-12 col-md-2 empty"></div>
        </div>
    
   
    

    </div>
    
    <div className="grey">
    <div className="boxes">
    <div className="box1">
        <div className="main">
        <h3 className='bhead'>MODERN EQUIPMENT</h3>
        <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facere sequi, ipsam, unde omnis molestiae sint nisi esse, amet in totam! Provident cumque maiores libero incidunt porro dolorem commodi dolor?</p>
        </div>
    </div>
    <div className="box2">
    <div className="main">
        <h3 className='bhead'>PROFESSIONAL TRAINER</h3>
        <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facere sequi, ipsam, unde omnis molestiae sint nisi esse, amet in totam! Provident cumque maiores libero incidunt porro dolorem commodi dolor?</p>
        </div>
    </div>
    <div className="box3">
    <div className="main">
        <h3 className='bhead'>HEALTHY DIET PLAN</h3>
        <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facere sequi, ipsam, unde omnis molestiae sint nisi esse, amet in totam! Provident cumque maiores libero incidunt porro dolorem commodi dolor?</p>
        </div>
    </div>
    </div>
    </div>
  </div>
  <Footer/>
  </>   
  
   


  );
}

export default Section1;
