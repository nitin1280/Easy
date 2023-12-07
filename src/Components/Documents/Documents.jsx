import React, { useState } from 'react';
import './Documents.css'; // Make sure to create a CSS file for styling
import AllDetails from '../AllDetails/AllDetails';
import { Link } from 'react-router-dom';

const App = () => {
  const [formData, setFormData] = useState({
    class10Marksheet: '',
    class12Marksheet: '',
    graduationMarksheet: '',
    postGraduationMarksheet: '',
    resume: '',
    recommendationLetter: '',
    salarySlips: '',
    others: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission, validation, etc.
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <AllDetails/>
    <div className="form-container">
    <div className='d1'>
            <h1>Name of the Enquiry Form</h1>
            <p>one line description of the form</p>
            <br/>
            <span>provide the following information to process your application</span>
        </div>
      <form onSubmit={handleSubmit}>
        <label>
          Class 10th Marksheet*:
        </label>
        <input
            type="file"
            name="class10Marksheet"
            value={formData.class10Marksheet}
            onChange={handleChange}
            required
          />
        <label>
          Class 12th Marksheet*:
        </label>
        <input
            type="file"
            name="class10Marksheet"
            value={formData.class10Marksheet}
            onChange={handleChange}
            required
          />
        <label>
          Graduation Marksheet*:
        </label>
        <input
            type="file"
            name="class10Marksheet"
            value={formData.class10Marksheet}
            onChange={handleChange}
            required
          />
        <label>
          Post Graduation Marksheet*:
        </label>
        <input
            type="file"
            name="class10Marksheet"
            value={formData.class10Marksheet}
            onChange={handleChange}
            required
          />
        <label>
          Offer Letter*:
        </label>
        <input
            type="file"
            name="class10Marksheet"
            value={formData.class10Marksheet}
            onChange={handleChange}
            required
          />
        <label>
          Salary Slips*:
        </label>
        <input
            type="file"
            name="class10Marksheet"
            value={formData.class10Marksheet}
            onChange={handleChange}
            required
          />
        <label>
          Bank Statement*:
        </label>
        <input
            type="file"
            name="class10Marksheet"
            value={formData.class10Marksheet}
            onChange={handleChange}
            required
          />
        <label>
          Increment Letter (if any)*:
        </label>
        <input
            type="file"
            name="class10Marksheet"
            value={formData.class10Marksheet}
            onChange={handleChange}
            required
          />
        <label>
          Others (if any)*:
        </label>
        <input
            type="file"
            name="class10Marksheet"
            value={formData.class10Marksheet}
            onChange={handleChange}
            required
          />
      </form>
    </div>
    <Link to={"/Statement"}>
    <button type="submit">Next</button>
    </Link>
   </>
  );
};

export default App;