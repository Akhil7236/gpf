import React from 'react';
import './index.css';

const SectionTwo = () => {
  return (
    <div className="sectionTwo fullSideMarginPadding">
      <div className="services">
      <div className="servicesContainer">
              <div className="serviceHeading">
                <p className="commonHeadingCenter">Our Services</p>
              </div>
              <div className="service">
                <span className="ourService1">
                  <img src="./ENGAGEMENT/enggangement.avif" alt=""/>
                  <p className="serviceName">ENGAGEMENT</p>
                </span>
                <span className="ourService2">
                  <img src="./WEDDING/wedding.avif" alt=""/>
                  <p className="serviceName">WEDDING</p>
                </span>
                <span className="ourService3">
                  <img src="./PREWEDDING/prewedding.avif" alt=""/>
                  <p className="serviceName">PRE WEDDING</p>
                </span>
              </div>
            </div>
      </div>
    </div>
  );
}

export default SectionTwo;