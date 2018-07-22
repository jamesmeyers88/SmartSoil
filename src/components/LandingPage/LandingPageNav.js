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
          <Link to="/login" className="navItem">
            Login
          </Link>
          <Link className="navItem" to="/register">
            Register
          </Link>
  </div>
    );
  }
}

export default connect(mapStateToProps)(LandingPageNav);