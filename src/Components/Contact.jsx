import React from 'react';
import '../App.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
// import picone from './images/pic1.jpg'
import Footer from './Footer';
function Contact() {
  return (
    <>
<div className="container-fluid cbg">
    <div className="row cro">
    <div className="col-12 col-sm-12 col-md-2"></div>
    <div className="col-12 col-sm-12 col-md-8 cbox">
    <h1 className='ch1'>REGISTER HERE</h1>
    <form class="row g-3 fom">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Username</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" required/>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Phone Number</label>
    <input type="Number" class="form-control" id="validationDefault05" required/>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Your message</label>
  <textarea class="form-control msg" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
      
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
    </div>
    <div className="col-12 col-sm-12 col-md-2"></div>
    </div>

</div>

<Footer/>
     
    </>



  );
}

export default Contact;
