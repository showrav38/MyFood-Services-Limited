import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkedAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="container row">
            <div></div>
          </div>

          <div>
            <div className="row text-center">
              <h1 className="text-center">MyFood Services Limited</h1>
            </div>

            <div className="row text-center">
              <div className="icons-container d-flex justify-content-center d-inline text-center ">
                <div className="icon">
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faYoutube} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="phone d-flex align-items-center justify-content-center mt-4 col-md-6 ">
              <div className="foter-phone-icon text-success">
                <FontAwesomeIcon icon={faPhoneVolume} />
              </div>
              <div>
                <h5>+880 1900 555 35 35</h5>
              </div>
            </div>

            <div className="col-md-6 map d-flex align-items-center justify-content-center">
              <div className="foter-phone-icon text-success text-center m-2">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </div>
              <div className="mt-3">
                <p>
                  130 gulshan, Dhaka, DH 10038,
                  <br /> 102 1st Avenue, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
