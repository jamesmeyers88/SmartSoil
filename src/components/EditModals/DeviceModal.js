
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
// import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { DEVICE_ACTIONS } from '../../redux/actions/deviceActions'
import '../../styles/WaterModal.css';
import { connect } from 'react-redux';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

const mapStateToProps = state => ({
  user: state.user,
  devices: state,
});
class SimpleModal extends React.Component {
  state = {
    open: false,
    device: {
      device_id: '',
      auth_token: '',
      notes: '',
      username: '',
    }
  };

  handleOpen = (id) => {
    this.setState({ open: true });
  }; // end handleOpen

  handleClose = () => {
    this.setState({ open: false });
  }; // end handleClose

  updateDevice = (id) => {
    let toUpdate = {
      device_id: id,
      device: this.state.device
    }
    this.props.dispatch({ type: DEVICE_ACTIONS.UPDATE_DEVICE, payload: toUpdate});
    this.handleClose;
  } // end updateEvent

  handleEvent = (key) => (event) => {
    this.setState({
        device: {
            ...this.state.device,
            [key]: event.target.value,
            username: this.props.user.userName
        }
    })
    console.log(this.state.device);
  } // end handleEvent

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div onClick={() => this.handleOpen(this.props.updateId)}><EditIcon/></div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
          {/* <pre>{JSON.stringify(this.props.updateId)}</pre> */}
            <Typography variant="title" id="modal-title">
              Edit your water event:
            </Typography>

            <form id="update_form" onSubmit={()=>this.updateDevice(this.props.updateId)}>
              <input type='text' placeholder="Device ID" onChange={this.handleEvent('device_id')} 
              value={this.state.device.device_id}/>
              <input type='text' placeholder="Authorization Token"onChange={this.handleEvent('auth_token')} 
              value={this.state.device.auth_token} />
              <input type='text' placeholder="Notes/Description" onChange={this.handleEvent('notes')} 
              value={this.state.device.notes}/>
              <input type='submit' value="Submit" />
            </form>
            <SimpleModalWrapped />
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default connect(mapStateToProps)(SimpleModalWrapped);