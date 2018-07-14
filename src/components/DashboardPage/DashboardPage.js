
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { WEATHER_ACTIONS } from '../../redux/actions/weatherActions';

import { triggerLogout } from '../../redux/actions/loginActions';
import WeatherComponent from '../WeatherComponent/WeatherComponent';


const mapStateToProps = state => ({
  user: state.user,
  americaTemp: state.americaTemp,

});

class DashboardPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({ type: WEATHER_ACTIONS.FETCH_TEMP });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    this.props.history.push('home');
  }


  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >
            Welcome, { this.props.user.userName }!
          </h1>
          <button
            onClick={this.logout}
          >
            Log Out
          </button>
          <WeatherComponent />
          <img src="https://www.indiabix.com/_files/images/data-interpretation/line-charts/15-3-1-1.png" alt="graph" />
        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(DashboardPage);

