import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
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
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/device">
            Devices
          </Link>
        </li>
        <li>
          <Link to="/watertable">
            Water Table
          </Link>
        </li>
        <li>
          <Link to="/signout">
            Sign Out
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
);

export default Nav;
