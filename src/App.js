import React from 'react';
import './index.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css';

const App = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./css/main.css" />
        <link rel="shortcut icon" href="img/logo/Garcia Tavern-logos.jpeg" />
        <title>Garcia's Tavern</title>
      </head>

      <body>
        {/* Animated Nav Bar */}
        <div className="navBar" id="nv">
          <nav>
            <i
              className="bi bi-justify"
              onClick={() => alert('hello')}
              id="hamMenu"
            ></i>
            <ul>
              <li><a href="?page=home">HOME</a></li>
              <li><a href="?page=menu">MENU</a></li>
              <li><a href="?page=ourstory">OUR STORY</a></li>
              <li><a href="?page=contactus">CONTACT US</a></li>
              <li className="socialIcon">
                <a href="call:111-111-111">
                  <i className="bi bi-telephone-forward"></i>
                </a>
              </li>
              <li className="socialIcon">
                <a href="https://instagram.com/example">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="socialIcon">
                <a href="mailto:example@example.com">
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Header Section */}
        <div className="header">
          <div className="IntroMsg">
            <img
              alt="Garcia Tavern where food meets passion"
              className="logo"
              src="https://i.ibb.co/WK9hkx8/Garcia-Tavern-logos-transparent.png"
              id="introLogo"
              width="200"
              height="200"
            />
          </div>
          <div className="IntroMsg">
            <h1>Stunning Food, Amazing Quality</h1>
            <br />
            <span>Let us host your next special occasion</span>
            <h2>
              <a href="call:111-111-111" style={{ textDecoration: 'none', color: 'white' }}>
                <i className="bi bi-telephone-forward-fill">
                  <span> Contact US today </span>
                </i>
              </a>
            </h2>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="menu">
          <div className="menuIntro">
            <img
              src="https://i.ibb.co/QCxY7FT/michael-discenza-Mxfcoxyc-H-Y-unsplash.jpg"
              alt="Menu Item 1"
            />
            <img
              src="https://i.ibb.co/cNrYC6S/izabela-rutkowski-Nme6-Tb-Wu-Vp-A-unsplash.jpg"
              alt="Menu Item 2"
            />
          </div>

          <section id="home-menu">
            <h2>DRINK MENU</h2>
            <h3>Spirits, Wine, and Beer</h3>
            <ul>
              <li>
                <span className="dish">Vodka 1oz</span>
                <span className="Price">$6</span>
                <span className="Description">VODKA and choice of juice or soda.</span>
              </li>
              {/* Add additional menu items here */}
            </ul>
          </section>
        </div>

        <div className="menu">
          <div className="menuIntro">
            <img
              id="caption_img"
              src="https://i.ibb.co/9g9yg5G/chad-montano-l-P5-MCM6n-Z5-A-unsplash.jpg"
              alt="Menu Item 3"
            />
            <img
              id="caption_img"
              src="https://i.ibb.co/q1HKkyL/ella-olsson-4d-Qia-WKi-L-Y-unsplash.jpg"
              alt="Menu Item 4"
            />
          </div>

          <section id="home-menu">
            <h2>FOOD MENU</h2>
            <h3>Entrees, Mains, and Handhelds</h3>
            <ul>
              <li>
                <span className="dish">Nachos</span>
                <span className="Price">$12</span>
                <span className="Description">Cheese, onions, tomatoes.</span>
              </li>
              {/* Add additional menu items here */}
            </ul>
          </section>
        </div>

        <div className="menu">
          <div className="menuIntro">
            <img
              src="https://i.ibb.co/GJ0Q03Q/camille-paralisan-rq-NIBr-DGnh4-unsplash.jpg"
              alt="Menu Item 5"
            />
            <img
              src="https://i.ibb.co/rsxRJMX/oscar-nord-5-CPn8-NE2-Tc-unsplash.jpg"
              alt="Menu Item 6"
            />
          </div>

          <section id="home-menu">
            <h2>DESSERT MENU</h2>
            <h3>Desserts and Sweets</h3>
            <ul>
              <li>
                <span className="dish">Chocolate Cake</span>
                <span className="Price">$7</span>
                <span className="Description">Loaded chocolate cake with fudge topping.</span>
              </li>
              {/* Add additional dessert items here */}
            </ul>
          </section>
        </div>
      </body>
    </>
  );
};

export default App;
