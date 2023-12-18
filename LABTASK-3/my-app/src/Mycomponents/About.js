import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {Header} from './Header'
import {Breads} from '../Mycomponents/Breads'; 
import {Cakes} from '../Mycomponents/Cakes'
import {Pastry} from './Pastry'
import {Cookies} from './Cookies'




export const About = () => {
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
   <hr/>
    <div id="about-us">  <h1 id='aaa'>About Anna's Bakery</h1>
      
        <div className="row">
        
          
        <div className="col-6 vertical-line">
 

    <img src="./images/logo1.png" alt="Description of the image" />
  </div>
          <div id='about-more' className="col-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum nam et laboriosam, voluptas pariatur excepturi
              placeat distinctio quas cupiditate magni, a nesciunt eius molestias tempore dolore ratione aperiam modi.
               a nesciunt eius molestias tempore dolore ratione aperiam modi.
            </p>
            <button onClick={navigateToContactUs}>CONTACT US</button>
          </div>
        </div>
      </div>
      <div id='about-test'>
      <h1 >Testimonial</h1>
  
      </div>
      
      <section className="home-testimonial">
      <div className="container">
        
        <div className="row d-flex justify-content-center testimonial-pos">
          <div className="col-md-12 pt-4 d-flex justify-content-center">
           
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <h1>Explore Our Customer Reviews</h1>
          </div>
        </div>
      </div>
      <section className="home-testimonial-bottom">
        <div className="container testimonial-inner">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 style-3">
              <div className="tour-item ">
                <div className="tour-desc bg-white">
                  <div className="tour-text color-grey-3 text-center">
                    &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..&rdquo;
                  </div>
                  <div className="d-flex justify-content-center pt-2 pb-2">
                    <img className="tm-people" src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg" alt="" />
                  </div>
                  <div className="link-name d-flex justify-content-center">Balbir Kaur</div>
                  <div className="link-position d-flex justify-content-center">Customer</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 style-3">
              <div className="tour-item ">
                <div className="tour-desc bg-white">
                  <div className="tour-text color-grey-3 text-center">
                    &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..&rdquo;
                  </div>
                  <div className="d-flex justify-content-center pt-2 pb-2">
                    <img className="tm-people" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                  </div>
                  <div className="link-name d-flex justify-content-center">Balbir Kaur</div>
                  <div className="link-position d-flex justify-content-center">Customer</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 style-3">
              <div className="tour-item ">
                <div className="tour-desc bg-white">
                  <div className="tour-text color-grey-3 text-center">
                    &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..&rdquo;
                  </div>
                  <div className="d-flex justify-content-center pt-2 pb-2">
                    <img className="tm-people" src="https://images.pexels.com/photos/4946604/pexels-photo-4946604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                  </div>
                  <div className="link-name d-flex justify-content-center">Balbir Kaur</div>
                  <div className="link-position d-flex justify-content-center">Customer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
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
                <li><Link href="/Breads">Breads</Link></li>
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
    
  )
}
