import React from 'react';
import productImage from './images/3966.jpg';
import {Link,useNavigate} from 'react-router-dom'
import {Header} from './Header'
import {Cakes} from '../Mycomponents/Cakes'
import {Pastry} from '../Mycomponents/Pastry'
import { About } from './About';
import {Cookies} from './Cookies'


export const Breads = () => {
    const navigate = useNavigate();
  
    const navigateToContactUs = () => {
      navigate('/ContactUs');
    };

  return (
    <>
    <div className="container-fluid">
      <p style={{ color: 'rgba(24, 6, 3, 0.801)' }}>2023</p>
      </div>

      <div id="logo">
        <div className="row">
          <div className="col-3">
            <h1>Anna's</h1>
          </div>
          <div className="col-9">
            <img src="./images/logo1.png" alt="" />
          </div>
        </div>
      </div>
      
      <div className='Top-Menu'>
      <ul className="Menu">
        <li className="Menu-item">
          <Link className="Menu-link" to="/Header">
            HOME
          </Link>
        </li>
        <li className="Menu-item">
          <Link className="Menu-link" to="/About">
            ABOUT
          </Link>
        </li>
        <li className="Menu-item">
          <Link className="Menu-link" to="/Breads">
            BREADS
          </Link>
        </li>
        
       
        
        <li className="Menu-item">
          <Link className="Menu-link" to="/Cakes">
            CAKES
          </Link>
        </li>
        <li className="Menu-item">
          <Link className="Menu-link" to="/Pastry">
            PASTRIES
          </Link>
        </li>
        <li className="Menu-item">
          <Link className="Menu-link" to="/Cookies">
            COOKIES
          </Link>
        </li>
        <li className="Menu-item">
        <button className="Menu-link" id="contactus" onClick={navigateToContactUs}>
          CONTACT US
        </button>
        </li>
      </ul>
    </div>
    <div className="container d-flex justify-content-center mt-50 mb-50">
      <div className="row">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="col-md-4 mt-2">
            <div className="card">
              <div className="card-body">
                <div className="card-img-actions">
                  <img
                    src={productImage}
                    className="card-img img-fluid"
                    width="96"
                    height="350"
                    alt=""
                  />
                </div>
              </div>

              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2 " data-abc="true">
                   CRISPY BREAD WITH FRESH INGREDIENTS
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                   Bread & Butter
                  </a>
                </div>

                <h3 className="mb-0 font-weight-semibold">$25.99</h3>

              

                <div className="text-muted mb-3">34 reviews</div>

              
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Birthdays Cake</a></li>
                <li><a href="#">Wedding Cakes</a></li>
                <li><a href="#">Birthday Cupcakes</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><Link to="/About">About</Link></li>
                <li><a href="#">Breads</a></li>
                <li><a href="#">cakes</a></li>
                <li><a href="#">Pastries</a></li>
                <li><a href="#">Cookies</a></li>
                <li><a href="#">Blogs</a></li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h2>Anna's Bakery</h2>
              <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
            </div>
           
          </div>
          <p className="copyright">Anna's Bakery copyright© 2023</p>
        </div>
      </footer>
    </div>
    </>
  );
};

