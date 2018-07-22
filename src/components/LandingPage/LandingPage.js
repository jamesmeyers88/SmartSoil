import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPageNav from './LandingPageNav';
import '../../styles/LandingPage.css'




class LandingPage extends Component {


  componentDidMount() {
    // get call for the soil data?
  }


  render() {
    return (

      <div>
        <LandingPageNav />
        <div className="container">
          <p className="item info cell">With this application, you'll be able to keep track of the moisture needs of your lawn and garden, compare the need to water with your local forcast, and track your watering events so you can help conserve water and still enjoy your yard to the fullest.</p>
          {/* <img className="item-b" src='http://www.vegetablegardener.com/assets/uploads/posts/7810/yard_garden.jpg' alt="backyardGarden.jpg"/> */}
          {/* <div className="image-cropper"><img className="item backyard" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Jardin_potager_3.jpg/180px-Jardin_potager_3.jpg' alt="anotherBackyardGarden.jpg"/></div> */}
          <div className="item plantSensor image-cropper"><img  src="images/plantAndSensor.JPG" alt="house plant with sensor"/></div>
          <div className="item sensor image-cropper"><img  src="images/sensor.jpg" alt="sensor"/></div>
          <div className="item particle image-cropper"><img  src="images/particleAndAll.jpg" alt="particle photon from sparkfun"/></div>
          {/* <div className="image-cropper"><img className="item-e" src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Katze_Emmy_im_Blumentopf_sitzend.jpg/180px-Katze_Emmy_im_Blumentopf_sitzend.jpg' alt="catLayingOnHouseplants.jpg"/></div> */}
          {/* <img className="item-d" src='https://upload.wikimedia.org/wikipedia/commons/7/71/Denver_Lawn_Care.jpg' alt="perfectlyManicuredLawn.jpg"/> */}
        </div>
      </div>
    );
  }
}

export default connect()(LandingPage);