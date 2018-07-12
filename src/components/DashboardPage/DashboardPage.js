
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
});

class DashboardPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }


  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >
            Welcome, { this.props.user.userName }!
          </h1>
          <button
            onClick={this.logout}
          >
            Log Out
          </button>
          

        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(DashboardPage);

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import Nav from '../Nav/Nav';




// class DashboardPage extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: '',
//       password: '',
//     };
//   }

//   componentDidMount() {
//     // get call for the soil data
//   }

  
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.user.userName) {
//       this.props.history.push('/user');
//     }
//   }

//   handleInputChangeFor = propertyName => (event) => {
//     this.setState({
//       [propertyName]: event.target.value,
//     });
//   }

//   render() {
//     return (

//       <div>
//         <Nav />
//         {/* <form onSubmit={this.login}>
//           <h1>Login</h1>
//           <div>
//             <label htmlFor="username">
//               Username:
//               <input
//                 type="text"
//                 name="username"
//                 value={this.state.username}
//                 onChange={this.handleInputChangeFor('username')}
//               />
//             </label>
//           </div>
//           <div>
//             <label htmlFor="password">
//               Password:
//               <input
//                 type="password"
//                 name="password"
//                 value={this.state.password}
//                 onChange={this.handleInputChangeFor('password')}
//               />
//             </label>
//           </div>
//           <div>
//             <input
//               type="submit"
//               name="submit"
//               value="Log In"
//             />
//             <Link to="/register">Register</Link>
//             <Link to="/login">Login</Link>
//           </div>
//         </form> */}
//       </div>
//     );
//   }
// }

// export default connect()(DashboardPage);