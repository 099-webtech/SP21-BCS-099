import React from 'react';
import {Link,useNavigate} from 'react-router-dom'
import {About} from '../Mycomponents/About'
import ContactUs from '../Mycomponents/contactus'; 
import {Breads} from '../Mycomponents/Breads'; 
import {Cakes} from '../Mycomponents/Cakes'
import {Pastry} from './Pastry'
import {Cookies} from './Cookies'
import {API} from './API'








  export default function Header(props) {
    const navigate = useNavigate();
  
   
    const navigateToCookies = () => {
      navigate('/Cookies');
    };
    const navigateToContactUs = () => {
      navigate('/ContactUs');
    };
    const navigateToAbout = () => {
      navigate('/About');
    };
    const navigateToCakes = () => {
      navigate('/Cakes');
    };
    const navigateToPastry = () => {
      navigate('/Pastry');
    };
    const navigateToBreads = () => {
      navigate('/Breads');
    };
    
    const navigateToAPI = () => {
      navigate('/API');
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
          <Link className="Menu-link" to="/Breads" >
            BREADS
          </Link>
        </li>
        <li className="Menu-item">
          <Link className="Menu-link" to="/Cakes" >
            CAKES
          </Link>
        </li>
        <li className="Menu-item">
          <Link className="Menu-link" to="/Pastry" >
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
    <section id="Hero">
    <div id="card">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ipsam harum laborum aut iste nulla.
      </p>
      <h1>Bread, Cakes, Pastry and Much More!</h1>
      <button onClick={navigateToContactUs}>SHOP NOW</button>
    </div>
  </section>
  <div>
      {/* PRODUCTS SECTION */}
      <div className="container PRODUCTS" id="sale">
        <h1>ANNA's BAKERY</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum culpa eligendi a <br />
          obcaecati modi <span style={{ color: 'brown', fontWeight: 'bold' }}>libero mollitia </span>excepturi illo veniam labore.
        </p>
        <div className="row">
          <div className="col">
            <div className="products">
              <img src="./images/pastry.png" className="card-img-top zoom-in-out-box" id="Img1" alt="Pastry" />
              <div className="card-body">
                <p className="card-text">PASTRY</p>
                <button  className="btn " id='load-data' onClick={navigateToPastry}>VIEW PRODUCTS</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="products">
              <img src="./images/bread.png" className="card-img-top zoom-in-out-box" id="Img2" alt="Bread" />
              <div className="card-body">
                <p className="card-text">BREADS</p>
                <button className="btn" onClick={navigateToBreads}>VIEW PRODUCTS</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="products">
              <img src="./images/cake.png" className="card-img-top zoom-in-out-box" id="Img3" alt="Cake" />
              <div className="card-body">
                <p className="card-text">CAKES</p>
                
                  <button className="btn" onClick={navigateToCakes}>VIEW PRODUCTS</button>
              
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SPECIALITY CAKES SECTION */}
      <div id="land">
        <div className="card2">
          <h1>Speciality Cakes</h1>
          <button id="load-data" onClick={navigateToAPI}>VIEW PRODUCTS</button>
          {/* Create a container for the API data */}
       
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <div id="about-us">  <h1>About Anna's Bakery</h1>
      
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
            <button onClick={navigateToAbout}>READ MORE</button>
          </div>
        </div>
      </div>

      {/* BLOG SECTION */}
      <div id="blog">
        <h1>Latest Blog Posts By Anna's Bakery</h1>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src="./images/blog1.jpg" id="blog1" alt="Blog 1" />
              <h2>SEASON'S GREETINGS FROM ANNA'S BAKERY</h2>
              <p>
                <b>AUTHOR:</b>
                <span style={{ color: 'brown' }}>
                  <b>ANNA BAKERY</b>
                </span>
              </p>
              <p>Happy Holidays from Anna's Bakery, Wishing you a joyus and safe Holiday season and Happy New Year 2023!</p>
              <a href="#">CLICK HERE TO READ FULL ARTICLE</a>
            </div>
            <div className="col-6">
              <img src="./images/blog2.jpg" id="blog2" alt="Blog 2" />
              <h2>SEASON'S GREETINGS FROM ANNA'S BAKERY</h2>
              <p>
                <b>AUTHOR:</b>
                <span style={{ color: 'brown' }}>
                  <b>ANNA BAKERY</b>
                </span>
              </p>
              <p>Happy Holidays from Anna's Bakery, Wishing you a joyus and safe Holiday season and Happy New Year 2023!</p>
              <a href="#" style={{ marginRight: '50px' }}>
                CLICK HERE TO READ FULL ARTICLE
              </a>
            </div>
          </div>
          <button onClick={navigateToAbout}>MORE ABOUT US</button>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div id="contact">
        <div className="container">
          <div className="col">
            <h1>CONTACT ANNA'S BAKERY</h1>
            <p>Your Bread, Cakes and Pastries in Your Town</p>
            {/* Add a button to trigger the modal */}
            <button type="button" id="contactbutton" onClick={navigateToContactUs}>
              GET IN TOUCH
            </button>
            <h2>BUSINESS HOURS:</h2>
            <p>Tue To Fri: 8AM to 5PM | Sat: 7AM to 4PM | Sun & Mon: Close</p>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li><a href="#" onClick={navigateToCakes} >Birthdays Cake</a></li>
                <li><a href="#" onClick={navigateToCakes}>Wedding Cakes</a></li>
                <li><a href="#" onClick={navigateToCakes}>Birthday Cupcakes</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <Link><a href="#" >Home</a></Link>
                <li><Link to="/About">About</Link></li>
                <li><a href="#" onClick={navigateToBreads}>Breads</a></li>
                <li><a href="#" onClick={navigateToCakes}>cakes</a></li>
                <li><a href="#" onClick={navigateToPastry}>Pastries</a></li>
                <li><a href="#" onClick={navigateToCookies}>Cookies</a></li>
               
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
