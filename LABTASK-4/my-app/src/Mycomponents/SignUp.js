import React, { useState } from 'react';
import image from './images/logo1.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const SignUp = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/register', { name, email, password });
      console.log(response.data);
      navigate('/login') // Assuming the server sends back the registered user data
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  
    const navigateToLogin = () => {
      navigate('/Login');
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
                    <p className="text-center subh1 h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
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

                          <input
                            type="password"
                            className="form-control mt-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <label className="form-label" htmlFor="form3Example4c">
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-3">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                          required
                        />
                        <label className="form-check-label" htmlFor="form2Example3c">
                          I agree to all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="submit" className="regbtn">
                          Register
                        </button>
                      </div>
                    </form>
                    <p className="text-center text-muted term">
                      Already have an account?{' '}
                      <button className="btn btn-link text-body loginbtn" onClick={navigateToLogin}>Login here</button>
                    </p>
                  </div>

                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src={image} className="img-fluid" alt="Sample image" />
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

export default SignUp;
