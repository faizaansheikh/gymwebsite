import React from 'react';
import '../App.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Footer from './Footer';
function About() {
  return (
    <>

 <div className="aboutbg">
   <div className="container-fluid ">
   <div className="row">
        <div class="col-12 col-sm-12 col-md-1 empty"></div>
                <div class="col-12 col-sm-12 col-md-9 rgym">
                <h1 className='hgym'>BEST GYM MEMBERSHIP</h1>
                <p className='pabout'><AiOutlineArrowRight size={40} color="red"/>
                Gym and Fitness was founded in 2002 as a family owned and operated business specialising in supplying high-quality gym equipment at great prices Instead of being just another gym equipment retailer, our founders wanted to be the best in the industry and set their minds to doing so! Over the last two decades Gym and Fitness has grown into one of Australias largest online fitness equipment retailers, helping thousands of customers live longer, happier and healthier lives.</p>  

                <p className='pabout'><AiOutlineArrowRight size={40} color="red"/>
                For 20 years helping customers reach their fitness goals has been at the heart of what we do and why we do it! We live and breathe our six core values and four brand promises  — which speak of our commitment to our customers, staff, the industry and our business as a whole. our founders wanted to be the best in the industry and set their minds to doing so! Over the last two decades thousands of customers live longer, happier and healthier lives.</p>  

                <p className='pabout'><AiOutlineArrowRight size={40} color="red"/>
                We have some pretty amazing people working with us, who hustle everyday to give you the best possible experience! You can find them in areas such as sales, marketing and e-commerce, customer service, warehousing, finance, human resources and management.Gym and Fitness has grown into one of Australias largest online fitness equipment retailers, helping thousands of customers live longer, happier and healthier lives.</p>

                <p className='pabout'><AiOutlineArrowRight size={40} color="red"/>
                We have some pretty amazing people working with us, who hustle everyday to give you the best possible experience! You can find them in areas such as sales, marketing and e-commerce, customer service, warehousing, finance, human resources and management.Gym and Fitness has grown into one of Australias largest online fitness equipment retailers, helping thousands of customers live longer, happier and healthier lives.</p>   
                
                
                
                <button type="button" id="butt" class="btn btn-lg babout">FIND MORE ABOUT US</button>
                
                </div>
                <div class="col-12 col-sm-12 col-md-2 empty"></div>
        </div>
   </div>
 </div>
     
 <Footer/>
    </>


  );
}

export default About;
