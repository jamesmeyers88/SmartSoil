
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { WEATHER_ACTIONS } from '../../redux/actions/weatherActions';
import { SOIL_ACTIONS } from '../../redux/actions/soilActions'

import { triggerLogout } from '../../redux/actions/loginActions';
import WeatherComponent from '../WeatherComponent/WeatherComponent';

// import SimpleModalWrapped from '../EditModals/WaterModal';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
// import Button from '@material-ui/core/Button';


const mapStateToProps = state => ({
  user: state.user,
  temp: state.temp,
  moisture: state.soil,
});
class DashboardPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      deviceList: [],
      temp: '',
      username: '',
    }
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({ type: WEATHER_ACTIONS.FETCH_TEMP });
    this.props.dispatch({ type: SOIL_ACTIONS.FETCH_SOIL });
    
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  // logout = () => {
  //   this.props.dispatch(triggerLogout());
  //   this.props.history.push('home');
  // }
  

  render() {
    let content = null;
    let moistness = this.props.moisture.soil
    let moistNegative = -(this.props.moisture.soil)
    let soilMessage = null;

    if (this.props.moisture.soil < 4000){
      soilMessage = (
        <div>
          <p>
            You are successfully moist.
          </p>
        </div>
      )
    } else {
      soilMessage = (
        <div>
        <p>
          You should seriously think about watering.
        </p>
      </div>
      )
      
    }

    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >
            Welcome, { this.props.user.userName }!
          </h1>
          <pre>{JSON.stringify(this.props.temp)}</pre>
          <p></p>
          {/* <p id="moist">Negative value for graphing: {moistNegative}</p> */}
          {/* <p id="moist">Regular soil value {moistness}</p> */}
          { soilMessage }
          <WeatherComponent />
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


{/* <Paper id="paper">
<Table id="table">
  <TableHead>
    <TableRow>
      <TableCell>Date</TableCell>
      <TableCell>Water Amount</TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {this.props.soil.soil.map(soil => {
      return (
        <TableRow key={soil.event_id}>
          <TableCell>{soil.date}</TableCell>
          <TableCell>{soil.moisture} oz</TableCell>
          <TableCell><SimpleModalWrapped updateId={event.event_id}/></TableCell>
          <TableCell><Button onClick={() => this.updateEvent(Number(event.event_id))}><SimpleModalWrapped /></Button></TableCell>
          <TableCell><Button onClick={() => this.deleteEvent(Number(event.event_id))}><DeleteIcon /></Button></TableCell>
          <TableCell><SimpleModalWrapped /></TableCell>
        </TableRow>
      
    )}
  )}
  </TableBody>
</Table>
</Paper> */}
