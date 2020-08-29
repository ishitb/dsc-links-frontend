import React, { useState, lazy } from 'react';
import { Container } from 'react-bootstrap';

import './CustomAuth.css';

const Login = lazy(() => import('./Login'));
const SignUp = lazy(() => import('./SignUp'));

const CustomAuth = () => {
    const [signUpActive, setSignUpActive] = useState(false);

    return (
        <div
            id="auth"
            className="h-100 d-flex justify-content-center align-items-center px-3"
        >
            <Container className="h-50 w-100 d-flex justify-content-center">
                <Login
                    signUpActive={signUpActive}
                    setSignUpActive={setSignUpActive}
                />
                <SignUp
                    signUpActive={signUpActive}
                    setSignUpActive={setSignUpActive}
                />
            </Container>
        </div>
    );
};

export default CustomAuth;
