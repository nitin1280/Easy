import React, { useState } from 'react';
import './Interview.css';
import AllDetails from '../AllDetails/AllDetails';
const Interview = () => {
  const [formData, setFormData] = useState({
    email: '',
    location: '',
    interviewDate: '',
    interviewTime: '',
    timeZone: '',
    interviewMedium: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log('Form submitted:', formData);
    alert("Submitted Succsessfully✔")
  };
  return (
    <>
    <AllDetails/>
   <br/><br/>
    <div className="interview-form">
    <div className='d1'>
            <h1>Name of the Enquiry Form</h1>
            <p>one line description of the form</p>
            <br/>
            <span>provide the following information to process your application</span>
        </div>
      <h2>Interview Availability</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />

        <label>Interview Date:</label>
        <input type="date" name="interviewDate" value={formData.interviewDate} onChange={handleChange} required />

        <label>Interview Time:</label>
        <input type="time" name="interviewTime" value={formData.interviewTime} onChange={handleChange} required />

        <label>Time Zone:</label>
        <select name="timeZone" value={formData.timeZone} onChange={handleChange} required>
          <option value="GMT">GMT</option>
          {/* Add more time zones as needed */}
        </select>

        <label>Interview Medium:</label>
        <select name="interviewMedium" value={formData.interviewMedium} onChange={handleChange} required>
          <option value="In-person">In-person</option>
          <option value="Virtual">Virtual</option>
          {/* Add more interview mediums as needed */}
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Interview;