import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
// import UserPage from './components/UserPage/UserPage';
// import InfoPage from './components/InfoPage/InfoPage';
import LandingPage from './components/LandingPage/LandingPage'
import DashboardPage from './components/DashboardPage/DashboardPage';
import DevicePage from './components/DevicePage/DevicePage';
import WaterTablePage from './components/WaterTablePage/WaterTablePage';
import SignOutPage from './components/SignOutPage/SignOutPage';


import './styles/main.css';

const App = () => (
  <div>
    <Header title="SmartSoil" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LandingPage}
        />
         <Route
          path="/login"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/dashboard"
          component={DashboardPage}
        />
                <Route
          path="/device"
          component={DevicePage}
        />
                <Route
          path="/watertable"
          component={WaterTablePage}
        />
                <Route
          path="/signout"
          component={SignOutPage}
        />
        {/* add these as a stretch goal */}
        {/* <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/info"
          component={InfoPage}
        /> */}
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </Router>
  </div>
);

export default App;
