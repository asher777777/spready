import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div>Header</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/SignIn">Sign In</Link>
          </li>
          <li>
            <Link to="/SignUp">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;