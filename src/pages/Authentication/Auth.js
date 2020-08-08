import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';
import axios from 'axios';

import './Auth.css';

const Auth = () => {
  const registerAction = useStoreActions(
    (actions) => actions.accountModel.register_user
  );

  const formData = {
    email: 'sa831@snu.edu.in',
    password: '123456',
  };

  const login = async () => {
    try {
      console.log('is this working ? ');
      const res = await axios.post('/api/v1/auth/login', formData, {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
      console.log(res);
    } catch (err) {
      console.log('this is not working');
    }
  };

  const [rightPanelActive, setRightPanelActive] = useState(false);
  return (
    <div id="auth">
      <button onClick={login}>Checking if eberything works</button>
      <div
        className={
          rightPanelActive ? 'container right-panel-active' : 'container'
        }
        id="container"
      >
        <div className="form-container sign-up-container">
          <div className="form">
            <h1>Create New Account</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="button">Sign Up</div>
          </div>
        </div>
        <div className="form-container sign-in-container">
          <div className="form">
            <h1>Sign in</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            {/* <Link to="#">Forgot your password?</Link> */}
            <div className="button">Sign In</div>
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <div
                className="ghost button"
                id="signIn"
                onClick={() => setRightPanelActive(false)}
              >
                Sign In
              </div>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <div
                className="ghost button"
                id="signUp"
                onClick={() => setRightPanelActive(true)}
              >
                Sign Up
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
