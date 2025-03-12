import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const App: React.FC = () => {
  const [value, setvalue] = useState({
    name: '',
    number: '',
    Address: '',
    state: '',
    city: '',
    message: '',
  });

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value: inputValue } = e.target;
    setvalue((prevValue) => ({
      ...prevValue,
      [name]: inputValue,
    }));
  };

  const submit = async () => {
    if (
      value.name === '' ||
      value.number === '' ||
      value.Address === '' ||
      value.state === '' ||
      value.city === '' ||
      value.message === ''
    ) {
      alert(' Error ! All fields are required!');
    } else {
      try {
        
        await axios.post(`https://contact-form-4-cm3a.onrender.com/api/v1/post`, value);
        console.log('Data saved successfully');
        alert('Data saved successfully');
        setvalue({
          name: '',
          number: '',
          Address: '',
          state: '',
          city: '',
          message: '',
        });
      } catch (error) {
        console.error('Error saving data:', error);
        alert('Error saving data. Please try again.');
      }
    }
  };

  return (
    <div className='main d-flex justify-content-center align-items-center'>
      <div className='card-contact px-3 py-2'>
        <h1>Contact Form</h1>
        <hr />
        <div className='cont-form d-flex flex-column justify-content-between'>
          <div>
            <h5>Enter your name</h5>
            <input
              type='text'
              placeholder='Enter your name '
              name='name'
              value={value.name}
              onChange={change}
            />
          </div>
          <div>
            <h5>Enter your Phone no</h5>
            <input
              type='number'
              placeholder='Enter your Phone no '
              name='number'
              value={value.number}
              onChange={change}
            />
          </div>
          <div>
            <h5>Address</h5>
            <textarea
              placeholder='Enter your Address'
              name='Address'
              value={value.Address}
              onChange={change}
            ></textarea>
          </div>

          <div className='imp-data '>
            <div>
              <h5>State</h5>
              <input
                id='imp'
                type='text'
                placeholder='Enter your state '
                name='state'
                value={value.state}
                onChange={change}
              />
            </div>
            <div>
              <h5>City</h5>
              <input
                id='imp'
                type='text'
                placeholder='Enter your city '
                name='city'
                value={value.city}
                onChange={change}
              />
            </div>
          </div>

          <div>
            <h5>Message</h5>
            <textarea
              placeholder='Type your message here'
              name='message'
              value={value.message}
              onChange={change}
            ></textarea>
          </div>
          <div>
            <button type='button' className='btn btn-primary' onClick={submit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;