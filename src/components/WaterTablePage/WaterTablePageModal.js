import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Edit</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Modal from '@material-ui/core/Modal';
// import Button from '@material-ui/core/Button';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// // const styles = theme => ({
// //   paper: {
// //     position: 'absolute',
// //     width: theme.spacing.unit * 50,
// //     backgroundColor: theme.palette.background.paper,
// //     boxShadow: theme.shadows[5],
// //     padding: theme.spacing.unit * 4,
// //   },
// // });

// class SimpleModal extends React.Component {
//   state = {
//     open: false,
//   };

//   handleOpen = () => {
//     this.setState({ open: true });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     const { classes } = this.props;

//     return (
//       <div>
//         <Typography gutterBottom>Click to get the full Modal experience!</Typography>
//         <Button onClick={this.handleOpen}>Edit</Button>
//         <Modal
//           aria-labelledby="simple-modal-title"
//           aria-describedby="simple-modal-description"
//           open={this.state.open}
//           onClose={this.handleClose}
//         >
//           <div style={getModalStyle()} className={classes.paper}>
//             <Typography variant="title" id="modal-title">
//               Text in a modal
//             </Typography>
//             <Typography variant="subheading" id="simple-modal-description">
//               Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//             </Typography>
//             <SimpleModalWrapped />
//           </div>
//         </Modal>
//       </div>
//     );
//   }
// }

// SimpleModal.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// // We need an intermediary variable for handling the recursive nesting.
// const SimpleModalWrapped = withStyles(styles)(SimpleModal);

// export default SimpleModalWrapped;