import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      device_id: '',
      auth_token: '',
      user_id: '',
    };
  }

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.device_id === '' || this.state.auth_token === '' || this.state) {
      this.setState({
        message: 'Choose a username and password!',
      });
    } else {
      const body = {
        username: this.state.username,
        password: this.state.password,
      };

      // making the request to the server to post the new user's registration
      axios.post('/api/user/register/', body)
        .then((response) => {
          if (response.status === 201) {
            this.props.history.push('/home');
          } else {
            this.setState({
              message: 'Ooops! That didn\'t work. The username might already be taken. Try again!',
            });
          }
        })
        .catch(() => {
          this.setState({
            message: 'Ooops! Something went wrong! Is the server running?',
          });
        });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.state.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.state.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div>
        {this.renderAlert()}
        <form onSubmit={this.registerUser}>
          <h1>Register Device</h1>
          <div>
            <label htmlFor="deviceName">
              Username:
              <input
                type="text"
                name="Device Name"
                value={this.state.device}
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
              value="Register"
            />
            <Link to="/home">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterPage;
