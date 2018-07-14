import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { DEVICE_ACTIONS } from '../../redux/actions/deviceActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import SimpleModalWrapped from '../EditModals/DeviceModal';
// import axios from 'axios';

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
import '../DevicePage/DevicePage.css';


const mapStateToProps = state => ({
  user: state.user,
  devices: state,
});

class DevicePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      deviceList: [],
      device: {
        device_id: '',
        auth_token: '',
        notes: '',
        username: '',
    }
  
  }}
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({ type: DEVICE_ACTIONS.FETCH_DEVICES });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  submitDevice = (event) => {
    event.preventDefault();
    console.log('this is the new input state', this.state.device);
    this.props.dispatch({ type: DEVICE_ACTIONS.SEND_DEVICE, payload: this.state.device});

    this.setState({
      device: {
        device_id: '',
        auth_token: '',
        notes: '',
        username: '',
      }
    });
    } // end submitDevice
  
    handleEvent = (key) => (event) => {
      console.log(this.props.user.userName)
      this.setState({
          device: {
              ...this.state.device,
              [key]: event.target.value,
              username: this.props.user.userName
          }
      })
      console.log(this.state.device);
    } // end handleEvent

    deleteDevice = (id) => {
      // event.preventDefault();
      console.log(id)
      this.props.dispatch({ type: DEVICE_ACTIONS.DELETE_DEVICE, payload: id});
      console.log(this.state.userEvent);
    } // end deleteEvent

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <div>
          <pre>{JSON.stringify(this.props.devices.device.device)}</pre>
            <h2>Add another device</h2>
            <form onSubmit={this.submitDevice} id="device_form">
              <input type='text' placeholder="Device ID" onChange={this.handleEvent('device_id')} value={this.state.device.device_id}/>
              <input type='text' placeholder="Authorization Token"onChange={this.handleEvent('auth_token')} value={this.state.device.auth_token} />
              <input type='text' placeholder="Notes/Description" onChange={this.handleEvent('notes')} value={this.state.device.notes}/>
              <input type='submit' value="Submit" />
            </form>
          </div>
          <div>
            <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Device ID</TableCell>
                      <TableCell>Authorization Token</TableCell>
                      <TableCell>Notes/Description</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.devices.device.device.map(device => {
                      return (
                        <TableRow key={device.device_id}>
                          <TableCell>{device.device_id}</TableCell>
                          <TableCell>{device.auth_token}</TableCell>
                          <TableCell>{device.notes}</TableCell>
                          <TableCell><SimpleModalWrapped updateId={device.device_id}/></TableCell>
                          <TableCell><Button onClick={() => this.deleteDevice(device.device_id)}><DeleteIcon /></Button></TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
              </Table>
            </Paper>
          </div>
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
export default connect(mapStateToProps)(DevicePage);

