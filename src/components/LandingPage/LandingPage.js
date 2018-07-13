import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';




class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    // get call for the soil data
  }

  
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.user.userName) {
  //     this.props.history.push('/user');
  //   }
  // }

  // handleInputChangeFor = propertyName => (event) => {
  //   this.setState({
  //     [propertyName]: event.target.value,
  //   });
  // }

  render() {
    return (

      <div>
        <Nav />
        {/* <form onSubmit={this.login}>
          <h1>Login</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <input
              type="submit"
              name="submit"
              value="Log In"
            />
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        </form> */}
      </div>
    );
  }
}

export default connect()(LandingPage);