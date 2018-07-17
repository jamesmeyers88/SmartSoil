import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPageNav from './LandingPageNav';




class LandingPage extends Component {


  componentDidMount() {
    // get call for the soil data?
  }


  render() {
    return (

      <div>
        <LandingPageNav />
        <p>With this application, you'll be able to keep track of the moisture needs of your lawn and garden, compare the need to water with your local forcast, and track your watering events so you can help conserve water and still enjoy your yard to the fullest. </p>
        <img src='http://www.vegetablegardener.com/assets/uploads/posts/7810/yard_garden.jpg' alt="backyardGarden.jpg"/>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Jardin_potager_3.jpg/180px-Jardin_potager_3.jpg' alt="anotherBackyardGarden.jpg"/>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Katze_Emmy_im_Blumentopf_sitzend.jpg/180px-Katze_Emmy_im_Blumentopf_sitzend.jpg' alt="catLayingOnHouseplants.jpg"/>
        <img src='https://upload.wikimedia.org/wikipedia/commons/7/71/Denver_Lawn_Care.jpg' alt="perfectlyManicuredLawn.jpg"/>
      </div>
    );
  }
}

export default connect()(LandingPage);