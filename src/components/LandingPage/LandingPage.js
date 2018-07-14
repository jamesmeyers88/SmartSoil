import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPageNav from './LandingPageNav';




class LandingPage extends Component {


  componentDidMount() {
    // get call for the soil data
  }

  
 

  // handleInputChangeFor = propertyName => (event) => {
  //   this.setState({
  //     [propertyName]: event.target.value,
  //   });
  // }

  render() {
    return (

      <div>
        <LandingPageNav />
        {/* <form onSubmit={this.login}>
          <h1>Login</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <input
              type="submit"
              name="submit"
              value="Log In"
            />

          </div>
        </form> */}
        <p>With this application, you'll be able to keep track of the moisture needs of your lawn and garden, compare the need to water with your local forcast, and track your watering events so you can help conserve water and still enjoy your yard to the fullest. </p>
        <img src='http://www.vegetablegardener.com/assets/uploads/posts/7810/yard_garden.jpg' />
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Jardin_potager_3.jpg/180px-Jardin_potager_3.jpg'/>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Katze_Emmy_im_Blumentopf_sitzend.jpg/180px-Katze_Emmy_im_Blumentopf_sitzend.jpg'/>
        <img src='https://upload.wikimedia.org/wikipedia/commons/7/71/Denver_Lawn_Care.jpg'/>
      </div>
    );
  }
}

export default connect()(LandingPage);