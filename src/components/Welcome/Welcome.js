import React from 'react';
import '../Welcome/Welcome.css';
import { Link } from 'react-router-dom';
import banimg from '../Images/banner/about-img.png';
const Welcome = () => {
  return (
    <div>
      <section class="container">
        <div class="row">
          <div className="col-md-6" style={{ marginBottom: '20px', marginTop: '20px' }}>
            <img className="img-fluid" src={banimg} alt="" />
          </div>
          <div
            className="col-md-6 forlap"
          >
            <h3 style={{color:'rgb(247, 109, 11)',fontSize:'33px'}}>Welcome to our restaurant</h3>
            <p style={{lineHeight:'28px'}}>
              Interested in working with us? Occasionally we create sponsored posts for brands that
              are a good fit for I am a Food Blog. We’re also available for recipe development &
              photography. Interested in working with us? Occasionally we create sponsored posts for
              brands that are a good fit for I am a Food Blog. We’re also available for recipe
              development & photography.
            </p>
            <Link to="/about-us">
              <button className="mt-3 about-btn">Read More</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
