
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { WEATHER_ACTIONS } from '../../redux/actions/weatherActions';
import { SOIL_ACTIONS } from '../../redux/actions/soilActions';
// import { WATER_ACTIONS } from '../../redux/actions/waterActions';
import Graph from './LineGraph';
import Paper from '@material-ui/core/Paper';

import '../../styles/DashboardPage.css'

// import { triggerLogout } from '../../redux/actions/loginActions';
import WeatherComponent from '../WeatherComponent/WeatherComponent';
// import ReactChartkick, { AreaChart } from 'react-chartkick'
// import Chart from 'chart.js'
// ReactChartkick.addAdapter(Chart)

const mapStateToProps = state => ({
  user: state.user,
  temp: state.temp,
  soilData: state.soilData,
  water: state.events,
});
class DashboardPage extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      deviceList: [],
      temp: '',
      username: '',
      graphObject: {},
    }
  }
  
  // Ansync componentDidMount to allow graph data to populate
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({ type: WEATHER_ACTIONS.FETCH_TEMP });
    this.props.dispatch({ type: SOIL_ACTIONS.FETCH_SOIL });
  }// end componentDidMount
  
  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }// end componentDidUpdate
   
  render() {
      let content = null;
      let soilMessage = null;

      // Show soilMessage
      if (this.props.user.userName && this.props.soilData.soilData[0]) {

        if (this.props.soilData.soilData[0].moisture < 3200){
          soilMessage = (
            <div className="moist">
              <p className="moist">You are successfully moist.</p>
              <img className="waterIcon"src="https://static.thenounproject.com/png/823280-200.png" alt="Do not water icon"/>
              <p className="moist">You don't need to water.</p>
            </div>
          );//end moist message
        } else {
          soilMessage = (
            <div>
              <p>You should seriously think about watering.</p>
              <img className="waterIcon" src="https://static.thenounproject.com/png/372939-200.png" alt="Halp! I need water" />
            </div>
          );//end dry message
        } //end 'soilMessage' logic

        // the content to be rendered on userName/soilData load
        content = (
          <div className="container">
            <Paper className="soil">
              { soilMessage }
            </Paper>
            <Paper className="weather">
                <WeatherComponent className="weatherComponent"/>
            </Paper>
            <Paper className="graph">
              <h3>Soil Moisture History</h3>
              <Graph />
            </Paper>
          </div>
        );
      }// end conditional render on auth/soilData load

    return (
      <div className="soilDiv">
        <Nav />
        { content }
        
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(DashboardPage);

