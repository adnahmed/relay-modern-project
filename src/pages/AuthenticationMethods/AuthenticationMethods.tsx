import React, { FC } from 'react';
import './AuthenticationMethods.scss';
import {Link} from "react-router-dom";

interface AuthenticationMethodsProps {}

const AuthenticationMethods: FC<AuthenticationMethodsProps> = () => (
  <div className="AuthenticationMethods">
      <Link to="signin">Login</Link>
      <p>Don't yet have an account?</p>
      <Link to="signup">
          <button type="button">Sign Up</button>
      </Link>
  </div>
);

export default AuthenticationMethods;
