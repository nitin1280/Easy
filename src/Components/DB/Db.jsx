import React, { useState } from 'react';
import "./Db.css"
import AllDetails from '../AllDetails/AllDetails';
import { Link } from 'react-router-dom';

const Details = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
   if(!name.trim() || !email.trim()){
    alert("Name and Email are required fields");
    return;
   }
  };

  return (
    <>
   <AllDetails/>
    <div className='details'>
    
    <div className="form-container">
        <div className='d1'>
            <h1>Name of the Enquiry Form</h1>
            <p>one line description of the form</p>
            <br/>
            <span>provide the following information to process your application</span>
        </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name*
        </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>
          Email*
        </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>
          Mobile Number
          
        </label>
        <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        <label>
          Date Of Birth
         
        </label>
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      </form>
      
    </div>
    <footer>
        <Link to={"/Document"}>
    <button type="submit">Next</button>
    </Link>
    </footer>
    </div>
     </>
  );
};

export default Details;