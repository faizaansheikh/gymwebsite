import React from 'react';
import '../App.css';
import { GiRunningNinja } from 'react-icons/gi';
import { BsFacebook } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { BsGoogle} from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { RiInstagramLine } from 'react-icons/ri';
import { DiApple } from 'react-icons/di';

function Footer() {
  return (
    <>
  <div className="fback">
     <div className='bortop'> </div>
        <div className="container-fluid">
        <div className="row">
        <div className="col-12 col-sm-12 col-md-3 fdetail">
        <div className="mar">
        <h1><GiRunningNinja size={50} color="red"/>Freedom</h1>
        <p>          
        “Wherever you go, no matter what the weather, always bring your own sunshine.” “If you want light to come into your life, you need to stand where it is shining.” “Success is the sum of small efforts repeated day in and day out.” “Happiness is the only thing that multiplies when you share it.”
        </p>
        
        <span className="icon"><BsFacebook size={20} color="white"/></span>
        <span className="icon"> <SiGmail size={20} color="white"/></span>
        <span className="icon"> <BsGoogle size={20} color="white"/></span>
        <span className="icon"> <BsTwitter size={20} color="white"/></span>
        <span className="icon"> <RiInstagramLine size={23} color="white"/></span>
        <span className="icon"> <DiApple size={24} color="white"/></span>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 fdetail">
            <div className="mar">
            <h3>RECENT COMMENTS</h3>
            <p>No pain, no gain.
             <li> Winners train. Losers complain.</li> 
             <li>Eat big. Lift big. Get big.</li> 
             <li>Believe in yourself and you will be unstoppable.</li>  
             <li>Excuses don't burn calories!</li> 
             <li> Whenever my body shouts STOP, my mind screams NEVER!</li>
             <li>I'm not stopping until I'm proud of myself.</li> 
             <li>Slow progress is still progress.</li> 
               </p>

            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 fdetail">
        <div className="mar">
        <h3>CATEGORIES</h3>
        <li>Aerobic. Aerobic exercise is the kind that makes you breathe harder and builds your fitness up. ...</li> 
        <li>Strength building. ...</li> 
        <li>Balance Training. ...</li>  
        <li>Endurance. ...</li> 
        <li>Flexibility. ...</li>  
        <li>Moderate intensity exercise. ...
        Vigorous exercise.</li>  
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 fdetail">
        <div className="mar">
        <h3>TWEETS WIDGET</h3>
        <p>          
        "Benefits of gyms are numerous as it helps to increase the cardiovascular  fitness, stronger muscles, better mood, better brain function, stronger bones,  more flexibility, increased longevity, decreased weight, decreased risk of many  cancers and improved appearance.<br/>
        A gym is a large room, usually containing special equipment, where people go to do physical exercise and get fit. The gym has exercise bikes and running machines. ... The large gym offers a variety of exercise equipment and weights going up to 100 pounds."
        </p>
        </div>
        </div>
            </div>
         </div>
         <div className='borbot'> </div>
         <div className="flas">
             2022 <span className='blu'>peak</span> react website by <span className='blu'>faizaan sheikh</span>
         </div>
         <div className="flastwo">
        <span className='itwo'><BsFacebook size={20} color="white"/> </span> 
        <span className='itwo'><SiGmail size={20} color="white"/> </span> 
        <span className="itwo"> <BsGoogle size={20} color="white"/></span>  
        <span className="itwo"><BsTwitter size={20} color="white"/></span> 
        <span className="itwo"><RiInstagramLine size={23} color="white"/></span> 
        <span className="itwo"><DiApple size={24} color="white"/></span> 
         </div>
  </div>
     

    </>


  );
}

export default Footer;
