import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import axios from 'axios';
import { triggerLogout } from '../../redux/actions/loginActions';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const mapStateToProps = state => ({
  user: state.user,
});

class WaterTablePage extends Component {

  constructor(){
    super();
    this.state = {
      waterEvents: []
    }
  }
  

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.getWaterEvents();
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  getWaterEvents = () => {
    axios.get('/api/water')
      .then((response) => {
        this.setState({
          waterEvents: response.data
        })
      })
  }

  // logout = () => {
  //   this.props.dispatch(triggerLogout());
  //   // this.props.history.push('home');
  // }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <div>
            <h3>Add a watering event</h3>
              <input type='text' placeholder='Date (xx/xx/xxxx)'/>
              <input type='text' placeholder='Amount (in oz)'/>
              {/* <select>
                  <option selected value="gal">gal</option>
                  <option value="liter">L</option>
              </select> */}
              <input type='submit' value='Submit' />
          </div>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Water Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.waterEvents.map(event => {
                    return (
                      <TableRow key={event.event_id}>
                        <TableCell>{event.date}</TableCell>
                        <TableCell numeric>{event.water_amount}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
            </Table>
          </Paper>
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
export default connect(mapStateToProps)(WaterTablePage);

