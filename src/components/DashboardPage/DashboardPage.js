
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { WEATHER_ACTIONS } from '../../redux/actions/weatherActions';
import { SOIL_ACTIONS } from '../../redux/actions/soilActions';
import Graph from './LineGraph';

// import { triggerLogout } from '../../redux/actions/loginActions';
import WeatherComponent from '../WeatherComponent/WeatherComponent';
// import ReactChartkick, { AreaChart } from 'react-chartkick'
// import Chart from 'chart.js'
// ReactChartkick.addAdapter(Chart)

const mapStateToProps = state => ({
  user: state.user,
  temp: state.temp,
  soilData: state.soilData,
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
    // await new Promise(resolve => {setTimeout(resolve, 1000)})
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
              <p>
                You are successfully moist. You don't need to water.
              </p>
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
          <div>
            <h1 id="welcome">
              Welcome, { this.props.user.userName }!
            </h1>
            { soilMessage }
            <WeatherComponent />
            <Graph />
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

