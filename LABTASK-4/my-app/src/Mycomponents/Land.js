import React from 'react'
import SignUp from './SignUp'
import { useNavigate } from 'react-router-dom';

export const Land = () => {
  const navigate = useNavigate();
  
    const navigateToRegister = () => {
      navigate('/SignUp');
    };
  return (
    <div className="bgimg container">
      <div className="topleft">
        <p>Anna's Bakery</p>
      </div>
      <div className="middle">
        <h1>TO VIEW OUR WEBSITE</h1>
        <hr />
        <button onClick={navigateToRegister}>LOGIN/REGISTER FIRST</button>
      </div>
      <div className="bottomleft">
       
      </div>
    </div>
  )
}
