import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Image  from './images/logo1.png';
import Header from './Header';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  
    const navigateToHome = () => {
      navigate('/Header');
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/submit', { name, email, message });
      console.log(response.data);
      alert('Form submitted successfully');

      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('Error submitting form');
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center subh1 h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Contact Us</p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                          <label className="form-label" htmlFor="form3Example1c">
                            Your Name
                          </label>

                          <input
                            type="email"
                            className="form-control mt-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <label className="form-label" htmlFor="form3Example3c">
                            Your Email
                          </label>

                          <textarea
                            className="form-control mt-2"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                          ></textarea>
                          <label className="form-label" htmlFor="form3Example4c">
                            Message
                          </label>
                        </div>
                      </div>

                      <button type="submit" className="subbtn">
                        Submit
                      </button>
                      <button className="subbtn" onClick={navigateToHome}>
                      Back to Home Page
                      </button>
                    </form>
                  </div>

                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    {/* You can customize the image or remove it if not needed */}
                    <img src={Image} className="img-fluid" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
