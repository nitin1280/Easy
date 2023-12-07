import React, { useState } from 'react';
import './Statement.css';
import AllDetails from '../AllDetails/AllDetails';
import { Link } from 'react-router-dom';
const Statement = () => {
  const [responses, setResponses] = useState({
    questionA: '',
    questionB: '',
    questionC: '',
  });

  const handleChange = (question, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [question]: value,
    }));
  };

  return (
    <div>
      <AllDetails/>
      <br/><br/><br/>
      <div className='d1'>
            <h1>Name of the Enquiry Form</h1>
            <p>one line description of the form</p>
            <br/>
            <span>provide the following information to process your application</span>
        </div>
      <label>
        a. Tell me about a time you were asked to do something you had never done before.
        <textarea
          value={responses.questionA}
          onChange={(e) => handleChange('questionA', e.target.value)}
        />
      </label>

      <label>
        b. Tell me about the last time something significant didn’t go according to plan at work.
        <textarea
          value={responses.questionB}
          onChange={(e) => handleChange('questionB', e.target.value)}
        />
      </label>

      <label>
        c. What are the three things that are most important to you in a job?
        <textarea
          value={responses.questionC}
          onChange={(e) => handleChange('questionC', e.target.value)}
        />
      </label>
      <Link to={"/Interview"}>
      <button type="submit">Submit</button>
      </Link>
      {/* Add a submit button or form submission logic here */}
    </div>
  );
};

export default Statement;