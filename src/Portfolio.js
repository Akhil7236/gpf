import React from 'react';
import './Portfolio.css';


function Portfolio() {
  const imagePaths = [
    "/WEDDING/_DSC2684.jpg",
    "/WEDDING/_DSC2747.jpg",
    "/WEDDING/_DSC2684.jpg",
    "/WEDDING/_DSC2747.jpg",
    "/WEDDING/_DSC2684.jpg",
    "/WEDDING/_DSC2747.jpg",
    "/WEDDING/_DSC2684.jpg",
    "/WEDDING/_DSC2747.jpg",
    "/WEDDING/_DSC2684.jpg",
    "/WEDDING/_DSC2747.jpg",
    "/WEDDING/_DSC2684.jpg",
    "/WEDDING/_DSC2747.jpg",
    "/WEDDING/_DSC2684.jpg",
    "/WEDDING/_DSC2747.jpg",
    "/WEDDING/_DSC2684.jpg",
    "/WEDDING/_DSC2747.jpg",
    "/WEDDING/_DSC2684.jpg",
    "/WEDDING/_DSC2747.jpg",
    "/WEDDING/_DSC2684.jpg",
    "/WEDDING/_DSC2747.jpg",
    "/WEDDING/_DSC2684.jpg",
    "/WEDDING/_DSC2747.jpg",
    "/WEDDING/_DSC2684.jpg",
    "/WEDDING/_DSC2747.jpg",
    "/WEDDING/_DSC2684.jpg",
    "/WEDDING/_DSC2747.jpg",
    "/WEDDING/_DSC2684.jpg",
    "/WEDDING/_DSC2747.jpg",
  ];

  return (
    <div className="Portfolio">
      <div className="header">
        <GoogleFonts/>
        <h1>Our Amazing Image Gallery</h1>
        <p>Glossy Picture Factory</p>
      </div>
      {/* Photo Grid */}
      <div className="row">
        {imagePaths.map((path, index) => (
          <div className="column" key={index}>
            <img src={path} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
