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
  <div className=" container navbar">
          <Link to="/login" style={{ textDecoration: 'none', marginLeft: '450px' }} className="navItem">
            Login
          </Link>
          <Link className="navItem" style={{ textDecoration: 'none' }} to="/register">
            Register
          </Link>
  </div>
    );
  }
}

export default connect(mapStateToProps)(LandingPageNav);