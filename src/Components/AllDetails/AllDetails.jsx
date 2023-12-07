import React, { useState } from 'react';
import './AllDetails.css'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


const AllDetails = () => {

  return (
    <>
    <Navbar/>
    <h1>Preview</h1>
    <p>You will be able to customize the fields in the later</p>
    <div className='all'>
     
    <div style={{ display: 'flex' }} className="hello">
      {/* Left Column */}
      <div style={{ flex: 1, padding: '20px' }}className='hello5'>
        <h2>✔New Form</h2>
        {/* Render input fields for Basic Details section */}
        {/* Use handleInputChange to update state on input change */}
      </div>
      <br/><br/>
      <span>Explore the following Templates:</span>
      <br/><br/>
      <Link to={"/DB"}>
      <div style={{ flex: 1, padding: '20px' }}className='hello2'>
        <h2 style={{textDecoration:"none"}}>Details Collection✔</h2>
        {/* Render input fields for Basic Details section */}
        {/* Use handleInputChange to update state on input change */}
      </div>
      </Link>
      <br/><br/>
      <Link to={"/Document"}>
      <div style={{ flex: 1, padding: '20px',textDecoration:"none" }} className='hello2'>
       
        <h2>Document Collection✔</h2>

        {/* Render input fields for Document Collection section */}
        {/* Use handleInputChange to update state on input change */}
      </div>
      </Link>
      <br/><br/>

      <Link to={"/Statement"}>
      <div style={{ flex: 1, padding: '20px' }}className='hello2'>
        <h2>Statement Of Purpose✔</h2>
        {/* Render input fields for Statement Of Purpose section */}
        {/* Use handleInputChange to update state on input change */}
      </div>
      </Link>
      <br/><br/>
      <Link to={"/Interview"}>
      <div style={{ flex: 1, padding: '20px' }}className='hello2'>
        <h2>Interview Availability✔</h2>
        {/* Render input fields for Interview Availability section */}
        {/* Use handleInputChange to update state on input change */}
      </div>
      </Link>
    </div>
    </div>
    </>
  );
};

export default AllDetails;