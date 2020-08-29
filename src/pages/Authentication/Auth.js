import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';

import './Auth.css';

const Auth = () => {
    const registerAction = useStoreActions(
        (actions) => actions.accountModel.register_user
    );

    const loginAction = useStoreActions(
        (actions) => actions.accountModel.login_user
    );

    const logoutAction = useStoreActions(
        (actions) => actions.accountModel.logout_user
    );

    // const loggedIn = useStoreState((store) => store.accountModel.user_logged_in);

    const login = async () => {
        loginAction({ email: 'sa831@snu.edu.in', password: '123456' });
    };

    const logout = async () => {
        logoutAction();
    };

    const register = async () => {
        registerAction({
            name: 'Testing man 2 2 2 2 ',
            email: 'test2222222@mail.com',
            password: '1234567890',
        });
    };

    const [rightPanelActive, setRightPanelActive] = useState(false);
    return (
        <div id="auth">
            <button onClick={login}>Login Check Demo Button</button>
            <button onClick={register}>Register Check Demo Button</button>
            <button onClick={logout}>Logout check Button Demo</button>
            <Link to="/dashboard"> Go to Dashboard</Link>
            <div
                className={
                    rightPanelActive
                        ? 'container right-panel-active'
                        : 'container'
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
                                To keep connected with us please login with your
                                personal info
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
                            <p>
                                Enter your personal details and start journey
                                with us
                            </p>
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
