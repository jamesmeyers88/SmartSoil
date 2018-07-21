
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
  async componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({ type: WEATHER_ACTIONS.FETCH_TEMP });
    this.props.dispatch({ type: SOIL_ACTIONS.FETCH_SOIL });
    // this.props.dispatch({ type: WATER_ACTIONS.FETCH_EVENTS});
    // await new Promise(resolve => {setTimeout(resolve, 1000)})
    // console.log('this is the water events', this.props.water)
    // this.loopData();
  }// end componentDidMount
  
  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }// end componentDidUpdate
   
  render() {
      let content = null;
      let soilMessage = null;
      // let moisture = this.props.soilData.soilData[0].moisture
      // let moistness = this.props.soilData.soil
      // let moistNegative = -(this.props.soilData.soil)
      // let soilEvents = this.props.soilData.soilData
      
      // Show soilMessage
      if (this.props.user.userName && this.props.soilData.soilData[0]) {

        if (this.props.soilData.soilData[0].moisture < 4000){
          soilMessage = (
            <div>
              {/* <pre>{JSON.stringify(this.props.soilData.soilData)}</pre> */}
              <p>You are successfully moist.</p>
              {/* <pre>{JSON.stringify(this.props.water)}</pre> */}
              <p>You don't need to water.</p>
            </div>
          );//end moist message
        } else {
          soilMessage = (
            <div>
              <p>
                You should seriously think about watering.
              </p>
            </div>
          );//end dry message
        } //end 'soilMessage' logic

        // the content to be rendered on userName/soilData load
        content = (
          <div className="container">
            <div className="item-a">
              <h1 id="welcome">
                Welcome, { this.props.user.userName }!
              </h1>
            </div>
            <Paper className="item">
            { soilMessage }
            </Paper>
            <Paper className="item-c">
                <WeatherComponent className="weatherComponent"/>
            </Paper>
            <Paper className="item-d">
              <h3>Soil Moisture History</h3>
              <Graph />
            </Paper>
          </div>
        );
      }// end conditional render on auth/soilData load

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

