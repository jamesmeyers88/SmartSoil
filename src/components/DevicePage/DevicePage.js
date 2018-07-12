import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';


const mapStateToProps = state => ({
  user: state.user,
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
    this.getDevices();
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  getDevices(){
    axios.get('/api/device')
      .then((response) => {
        this.setState({
          deviceList: response.data
        })
      })
  }

  submitDevice = (event) => {
    event.preventDefault();
    axios.post('/api/device', this.state.device)
        .then((response) => {
          console.log('in the water POST');
          this.setState({
            device: {
              device_id: '',
              auth_token: '',
              notes: '',
            }
          });
          // this.getWaterEvents();
        })
        .catch((error) => {
          console.log(`There's been an error`, error)
        });
    } // end submitWater
  
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
            <h2>Add another device</h2>
            <form onSubmit={this.submitDevice}>
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
                    {this.state.deviceList.map(device => {
                      return (
                        <TableRow key={device.device_id}>
                          <TableCell>{device.device_id}</TableCell>
                          <TableCell>{device.auth_token}</TableCell>
                          <TableCell>{device.notes}</TableCell>
                          <TableCell><Button><EditIcon /></Button></TableCell>
                          <TableCell><Button><DeleteIcon /></Button></TableCell>
                          {/* <Button><DeleteIcon /></Button> */}
                          {/* <TableCell><DeleteIcon /></TableCell> */}
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

