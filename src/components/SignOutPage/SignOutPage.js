import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SignOutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.userName) {
      this.props.history.push('/user');
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (

      <div>
        {/* I should probably make a dedicated signOutNav component */}
        {/* <Nav /> */}
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
        <li>
          <Link to="/home">
            Home
          </Link>
        </li>
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
        <div>
          <p>Check back soon!</p>
        </div>
      </div>
    );
  }
}

export default connect()(SignOutPage);