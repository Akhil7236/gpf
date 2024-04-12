import React from 'react';
import './index.css';

const SectionFour = () => {
  return (
    <div className="sectionFour fullSideMarginPadding">
      <div className="gallery">
      <div className="galleryHeading">
              <p className="commonHeadingCenter">Our Amazing Work</p>
            </div>
            <div class="gallCollection">
              <div className="gall image1"><img src="./MEHNDI/legMehdi.JPG" alt=""/></div>
              <div className="image2"><img src="./ENGAGEMENT/coupleVertical.jpg" alt=""/></div>
              <div className="gall image3"><img src="./PREWEDDING/couple.jpg" alt=""/></div>
              <div className="gall image4"><img src="./ENGAGEMENT/hand.jpg" alt=""/></div>
              <div className="gall image5"><img src="./WEDDING/shaadi.jpg" alt=""/></div>
              <div className="gall image6"><img src="./ENGAGEMENT/mirror.jpg" alt=""/></div>
            </div>
      </div>
    </div>
  );
}

export default SectionFour;
