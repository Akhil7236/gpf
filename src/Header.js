import React, { useState, useEffect } from 'react';
import './index.css';

const Header = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    'FrontDisplay/slide2.jpg',
    'FrontDisplay/slide3.jpg',
    'FrontDisplay/slide4.jpg',
    'FrontDisplay/slide1.jpg',
    'FrontDisplay/slide5.jpg',
    'FrontDisplay/slide6.jpg',
    'FrontDisplay/slide7.jpg',
    'FrontDisplay/slide8.jpg',
  ];

  useEffect(() => {
    const slideShows = () => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const intervalId = setInterval(slideShows, 4000);
    return () => clearInterval(intervalId);
  }, [slides.length]);

  const portfolioFunction =()=>{window.open("Portfolio.js")};
  
  const callHumbarger = () => {
    const navLists = document.getElementById('NavLists');
    if (navLists.style.display === 'inline-grid') {
      navLists.style.display = 'none';
    } else {
      navLists.style.display = 'inline-grid';
    }
  };

  return (
    <div className="header">
      <div className="banner">
        <div className="bannerContainer">
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide}
              alt=""
              style={{ display: i === index ? 'block' : 'none' }}
              className='B_Slides'
            />
          ))}
        </div>
        <div className="navbar">
          <div className="nav fullSideMarginPadding">
            <div className="companyName">
              <div className="companyNameAndLog">
                <img src="logo/Logo.png" alt="" />
                <div className="CompNameAndCap">
                  <b>Glossy Picture Factory</b>
                  <p>Perfetion is our Policy</p>
                </div>
              </div>
            </div>
            <div className="headerNav">
              <ul id="NavLists" className="NavLstToggle">
                <li className="listHover">HOME</li>
                <li className="listHover"onClick={portfolioFunction}>PORTFOLIO</li>
                <li className="listHover">ALBUM</li>
                <li className="listHover">SERVICE</li>
                <li className="listHover">CONTACT</li>
                <li className="listHover">ABOUT</li>
              </ul>
            </div>
            <div className="humbarger" onClick={callHumbarger}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;