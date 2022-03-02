import React from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';


const Banner = () => {
    return (
        <div>
      <div className="banner-container">
        <div className="">
          <div className="row d-flex banner align-items-center justify-content-center">
            <div className="container">
              <div className="col-md-12 text-center">
                {/* Banner Header */}
                <h1 className="title">
                  MyFood Services Limited<br />
                  Where Best Food has the most Priority.
                </h1>

                {/* Banner Description */}
                <p className="text-white text-center mt-3">
                  One of the best food delivery company in Bangladesh,the most experienced chef with
                  <br />
                  there vast of knowlendge and experinece.
                </p>

                {/* Banner Button */}
                <Link to="/about-us">
                  <button className="mt-3 about-btn">About Us</button>
                </Link>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    );
};

export default Banner;