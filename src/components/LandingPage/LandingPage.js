import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPageNav from './LandingPageNav';
import '../../styles/LandingPage.css'

class LandingPage extends Component {

  render() {
    return (
      <div>
        <LandingPageNav />
        <div className="container">
          <p className="item info cell">Keep track of the moisture needs of your houseplants and track your watering events. This will help you to conserve water and keep your plants alive.</p>
          <hr/>
          <div className="item plantSensor image-cropper"><img  src="images/plantAndSensor.JPG" alt="house plant with sensor"/></div>
          <div className="item sensor image-cropper"><img  src="images/sensor.jpg" alt="sensor"/></div>
          <div className="item particle image-cropper"><img  src="images/particleAndAll.jpg" alt="particle photon from sparkfun"/></div>
        </div>
      </div>
    );
  }
}

export default connect()(LandingPage);