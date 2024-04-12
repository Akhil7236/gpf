
import React, { useEffect } from 'react';
import GoogleFonts from './GoogleFonts';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import SectionSeven from './SectionSeven';
import SectionSix from './SectionSix';
import SectionEight from './SectionEight';


// Import other sections as needed

const MainSection = () => {
  return (
    <div className="main">
      <SectionOne />
      <SectionTwo />
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <SectionEight/>
    </div>
  );
}

export default MainSection;
