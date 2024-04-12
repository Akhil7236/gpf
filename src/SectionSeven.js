import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{  faYoutube,
  faInstagram,
  faFacebook,
  faGooglePlus} from '@fortawesome/free-brands-svg-icons';
import {faPhone,faLocationDot,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './index.css';
const SectionSeven = () => {
  return (
    <div className="sectionSeven fullSideMarginPadding">
      <div className="footer">
      <div class="footerContainer">
              <div class="col_1Footer colFooter">
                <div class="col_1Footer_Heading colFooHed">
                  <h3 class="commonDetailSpace footerDetailSpace">WEDDING</h3>
                </div>
                <div class="col_1Footer_Caption">
                  <p class="commonDetailSpace footerDetailSpace">Welcome and open youself to your trust love this year
                    with us!</p>
                </div>
                <div class="col_1Footer_SocialHandle commonDetailSpace footerDetailSpace">
                <FontAwesomeIcon icon={faYoutube} className="social-icon fa-brands" />
                <FontAwesomeIcon icon={faInstagram} className="social-icon fa-brands" />
                <FontAwesomeIcon icon={faFacebook} className="social-icon fa-brands" />
                <FontAwesomeIcon icon={faGooglePlus} className="social-icon fa-brands" />
                </div>
              </div>
              <div class="col_2Footer colFooter">
                <div class="col_2Footer_Heading colFooHed">
                  <h3 class="commonDetailSpace footerDetailSpace">INFORMATION</h3>
                </div>
                <div class="col_2Footer_rows">
                  <ul>
                    <li class="commonDetailSpace footerDetailSpace">About Us</li>
                    <li class="commonDetailSpace footerDetailSpace">Portfolio</li>
                    <li class="commonDetailSpace footerDetailSpace">Contact Us</li>
                    <li class="commonDetailSpace footerDetailSpace">Our Services</li>
                    <li class="commonDetailSpace footerDetailSpace">About</li>
                  </ul>
                </div>
              </div>
              <div class="col_3Footer colFooter">
                <div class="col_3Footer_Heading colFooHed">
                  <h3 class="commonDetailSpace footerDetailSpace">CONTACT</h3>
                </div>
                <div class="col_3Footer_Caption">
                  <p class="commonDetailSpace footerDetailSpace">Would you have any enquiries.Pleas fell free to contact
                    us</p>
                </div>
                <div class="col_3Footer_SocialHandle commonDetailSpace footerDetailSpace">
                  <div>
                    <span class="footerSpan">
                    <FontAwesomeIcon icon={faEnvelope} className='footer-icon fa-solid'/>
                      </span>
                    <span class="footerSpanCont">
                      <a
                        href="mailto:https://akhileshkumarprajapati7706@gmail.com">akhileshkumarprajapati7706@gmail.com</a>
                    </span>
                  </div>
                  <div>
                    <span class="footerSpan"><FontAwesomeIcon icon={faPhone} className="footer-icon fa-solid" /></span>
                    <span class="footerSpanCont"><a href="tel:9506695760">+91 9506695760</a></span>
                  </div>
                  <div>
                    <span class="footerSpan"><FontAwesomeIcon icon={faLocationDot} className="footer-icon fa-solid" /></span>
                    <span class="footerSpanCont"><a href="">Location</a></span>
                  </div>

                </div>
              </div>
            </div>
      </div>
    </div>
  );
}

export default SectionSeven;
