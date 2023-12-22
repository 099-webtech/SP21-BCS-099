import React, { useState } from 'react';
import image from './images/logo1.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/Login', { email, password });

      if (response.data.success) {
        navigate('/Header');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigateToSignUp = () => {
    navigate('/SignUp');
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
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 subh1">Login</p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label className="form-label" htmlFor="form3Example3c">
                            Your Email
                          </label>

                          <div className="password-container mt-2">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              className="form-control"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className="form-label" htmlFor="form3Example4c">
                              Password
                            </label>
                            <span
                              className={`password-toggle-icon ${showPassword ? 'show' : 'hide'}`}
                              onClick={togglePasswordVisibility}
                            >
                              {showPassword ? '👁️' : '👁️'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {error && (
                        <div className="alert alert-danger" role="alert">
                          {error}
                        </div>
                      )}

                      <div className="d-flex justify-content-center">
                        <button type="submit" className="regbtn">
                          Login
                        </button>
                      </div>
                    </form>
                    <p className="text-center text-muted term">
                      Don't have an account?{' '}
                      <button className="btn btn-link text-body loginbtn " onClick={navigateToSignUp}>
                        Register here
                      </button>
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

export default Login;
