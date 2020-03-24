import React from 'react';
// import Img from 'react-image';
import "./Footer.css"
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Privacypolicy from './Privacypolicy';
// import { NavLink } from 'react-router-dom';

const mystyle = {
  display: "inline-block",
  float: "right",
  width: "36px",
  height: "36px",
  fontSize: ".875rem",
  lineheight: "36px",
  backgroundcolor: "#fff",
  border: "1px solid #b3b3b3",
  color: "#b3b3b3",
  transition: "background-color 250ms,border 250ms",
  padding: "6px",
  borderRadius: "50%"

};

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div class="footer-area">
            <div class="container">
              <div class="row section_gap">
                <div class="col-md-3 ">
                  <p class="footer-nav-title caps-heading-12">
                    ABOUT</p>
                  <ul class="footer-nav">
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#" >Careers</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Work with us</a></li>
                  </ul>
                </div>
                <div class="col-md-3 text-left">
                  <div class="single-footer-widget tp_widgets">
                    <p class="footer-nav-title caps-heading-12">
                      HELP</p>
                    <ul class="footer-nav">
                      <li><a href="#">Payments</a></li>
                      <li><a href="#">Shipping</a></li>
                      <li><a href="#" >Cancellation and returns</a></li>
                      <li><a href="#">FAQ</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-3 text-left">
                  <div class="single-footer-widget tp_widgets">
                    <p class="footer-nav-title caps-heading-12">
                      POLICY</p>
                    <ul class="footer-nav">
                      <li><a href="#">Terms of use</a></li>
                      <li><a href="#">Privacy policy</a></li>
                      <li><a href="#">Security</a></li>
                      <li><a href="#">LeaderShip</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-3 text-left">
                  {/* <img class="img-fluid" src={"images/mandeeLogo.jpg"} alt="#" style={{ height: "100px", background: "#4c4c4e" }} /> */}
                  <p class="footer-nav-title caps-heading-12">
                    CONNECT WITH US</p>
                  <ul class="footer-nav social-connect-nav">
                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faFacebook} style={mystyle} /></a></li>
                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} style={mystyle} /></a></li>
                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faYoutube} style={mystyle} /></a></li>
                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={mystyle} /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;