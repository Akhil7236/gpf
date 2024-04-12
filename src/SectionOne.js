import React from "react";
import './index.css';

const SectionOne = () => { 
    return (
        <div className="sectionOne fullSideMarginPadding">
            <div className="sectionOne_container">
                <div className="sectionOneContainerCol1">
                    <div className="sectionOneCol1">
                        <div className="sectionOneHeading">
                            <h3>
                                <p>Cinematic & Wedding</p> Photography
                            </h3>
                        </div>
                        <div class="sectionOneCaption">
                            <p>The picturesque venue, adorned with elegant flowers and sparkling lights, provided the perfect
                                backdrop for this extraordinary wedding shoot. Every frame captured the essence of their love, with
                                the bride's radiant smile illuminating the screen and the groom's eyes filled with adoration.</p>
                        </div>
                    </div>
                    <div className="sectionOneCol2">
                        <div className="sectionOneFrame">
                            <div className="frams">
                                <div className="emptyBox BoxImg"></div>
                                <div className="frameImg">
                                    <img src="HALDI/Frame.JPG" className="BoxImg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionOne;