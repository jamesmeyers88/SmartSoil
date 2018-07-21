import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { WATER_ACTIONS } from '../../redux/actions/waterActions';
// import axios from 'axios';
// import { triggerLogout } from '../../redux/actions/loginActions';
import SimpleModalWrapped from '../EditModals/WaterModal';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import '../../styles/WaterTablePage.css';
// import swal from 'sweetalert';


const mapStateToProps = state => ({
  user: state.user,
  events: state,
});

class WaterTablePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      // waterEvents: [],
      userEvent: {
        date: '',
        water_amount: '',
        username: '',
    }
  
  }}
  

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({ type: WATER_ACTIONS.FETCH_EVENTS });
    console.log(`this is your water data`, this.props.events)
    
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  submitWater = (event) => {
    event.preventDefault();
    console.log('this is the new input state', this.state.userEvent);
    this.props.dispatch({ type: WATER_ACTIONS.SEND_EVENT, payload: this.state.userEvent});

    this.setState({
      userEvent: {
        date: '',
        water_amount: '',
      }
    });
    } // end submitWater
  
    handleEvent = (key) => (event) => {
      // console.log(this.props.user.userName)
      this.setState({
          userEvent: {
              ...this.state.userEvent,
              [key]: event.target.value,
              username: this.props.user.userName
          }
      })
      console.log(this.state.userEvent);
    } // end handleEvent

    deleteEvent = (id) => {
      // event.preventDefault();
      console.log(id)
      this.props.dispatch({ type: WATER_ACTIONS.DELETE_EVENT, payload: id});
      console.log(this.state.userEvent);
    } // end deleteEvent

    

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <div>
            {/* <pre>{JSON.stringify(this.props.events.water)}</pre> */}
            <h3>Add a watering event</h3>
              <form onSubmit={this.submitWater} id="water_form">
                <input type='date' placeholder='Date (xx/xx/xxxx)' onChange={this.handleEvent('date')} value={this.state.userEvent.date} />
                <input type='text' placeholder='Amount (in oz)' onChange={this.handleEvent('water_amount')} value={this.state.userEvent.water_amount} />
                {/* <select>
                    <option selected value="gal">gal</option>
                    <option value="liter">L</option>
                </select> */}
                <input type='submit' value='Submit' />
              </form>
          </div>
            <Paper id="paper">
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
                  {this.props.events.water.events.map(event => {
                    return (
                      <TableRow key={event.event_id}>
                        <TableCell>{event.date}</TableCell>
                        <TableCell>{event.water_amount} oz</TableCell>
                        <TableCell><SimpleModalWrapped updateId={event.event_id}/></TableCell>
                        {/* <TableCell><Button onClick={() => this.updateEvent(Number(event.event_id))}><SimpleModalWrapped /></Button></TableCell> */}
                        <TableCell><Button onClick={() => this.deleteEvent(Number(event.event_id))}><DeleteIcon /></Button></TableCell>
                        {/* <TableCell><SimpleModalWrapped /></TableCell> */}
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

