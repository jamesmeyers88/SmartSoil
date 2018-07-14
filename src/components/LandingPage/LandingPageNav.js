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
    <div>
      <ul>
        {/* <li>
          <Link to="/user">
            User Home
          </Link>
        </li> */}
        {/* <li>
          <Link to="/info">
            Info Page
          </Link>
        </li> */}

        {/* <li>
          <Link to="/watertable">
            Water Table
          </Link>
        </li>
        <li >
          <Link onClick={this.logout} to="/signout">
            Sign Out
          </Link>
        </li> */}
        <li>
          <Link to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            Register
          </Link>
        </li>
      </ul>
    </div>
  </div>
    );
  }
}

export default connect(mapStateToProps)(LandingPageNav);