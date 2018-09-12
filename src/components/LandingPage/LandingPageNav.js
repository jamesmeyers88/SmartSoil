import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
});

class LandingPageNav extends Component {

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {

    return (
  <div className="navbar">
  
    <center>
          <Link to="/login" style={{ textDecoration: 'none' }} className="navItem">
            Login
          </Link>
          <space> </space>
          <Link className="navItem" style={{ textDecoration: 'none' }} to="/register">
            Register
          </Link>

    </center>
  </div>
    );
  }
}

export default connect(mapStateToProps)(LandingPageNav);