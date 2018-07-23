import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
});

class Nav extends Component {

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {

    return (
  <div className="container navbar">
        <div className="navItem">
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            Dashboard
          </Link>
        </div>
        <div className="navItem">
          <Link to="/device" style={{ textDecoration: 'none' }}>
            Devices
          </Link>
        </div>
        <div className="navItem">
          <Link to="/watertable" style={{ textDecoration: 'none' }}>
            Water Table
          </Link>
        </div>
        <div className="navItem" >
          <Link onClick={this.logout} to="/home" style={{ textDecoration: 'none' }}>
            Sign Out
          </Link>
        </div>
        <div >
          <h1 className="navItem welcome" id="welcome">
            Welcome, { this.props.user.userName }!
          </h1>
        </div>
  </div>
    );
  }
}

export default connect(mapStateToProps)(Nav);