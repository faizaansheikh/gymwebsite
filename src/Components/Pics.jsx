import React from 'react';
import '../App.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
// import picone from './images/pic1.jpg'
import Footer from './Footer';
function Pics() {
  return (
    <>
<div className='pbg'>

<h1 className='outlet'>OUR GYM OUTLET</h1>
<div className="box">
<div className="dream">
<img src="./Images/pic11.jpg" alt=""/>
<img src="./Images/pic2.jpg" alt=""/>
<img src="./Images/pic3.jpg" alt=""/>
<img src="./Images/pic10.jpg" alt=""/>
</div>

<div className="dream">
<img src="./Images/pic1.jpg" alt=""/>
<img src="./Images/pic5.jpg" alt=""/>
<img src="./Images/pic6.jpg" alt=""/>
</div>

<div className="dream">
<img src="./Images/pic7.jpg" alt=""/>
<img src="./Images/pic8.jpg" alt=""/>
<img src="./Images/pic9.jpg" alt=""/>
</div>
</div>
</div> 

<Footer/>
     
    </>



  );
}

export default Pics;
