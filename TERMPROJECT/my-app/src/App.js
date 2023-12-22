import './App.css';
import Header from '../src/Mycomponents/Header';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from '../src/Mycomponents/About';
import ContactUs from '../src/Mycomponents/contactus'; 
import {Breads} from '../src/Mycomponents/Breads'; 
import Cakes from './Mycomponents/Cakes'
import {Pastry} from './Mycomponents/Pastry'
import {Cookies} from './Mycomponents/Cookies'
import API from './Mycomponents/API';
import SignUp from './Mycomponents/SignUp';
import Login from './Mycomponents/Login';
import { Land } from './Mycomponents/Land';
const authMiddleware = require('./Mycomponents/authmiddleware');



function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Land />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Breads" element={<Breads />} />
        <Route path="/Cakes" element={<Cakes/>} />
        <Route path="/Pastry" element={<Pastry/>} />
        <Route path="/Cookies" element={<Cookies/>} />
        <Route path="/API" element={<API/>} />
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Land' element={<Land/>}/>
        
        
      </Routes>
    </>
  );
}


export default App;
