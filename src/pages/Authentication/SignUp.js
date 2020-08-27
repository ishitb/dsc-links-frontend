import React, { lazy } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const Divider = lazy(() => import('../../components/Divider/Divider'));

const SignUp = ({ signUpActive, setSignUpActive }) => {
    return (
        <Container
            id="sign-up-form"
            className={`accent-1-bg h-100 d-flex flex-column justify-content-around align-items-center border-radius-15${
                signUpActive ? ' active' : ''
            }`}
        >
            <Row className="heading-text white-fg">WELCOME BACK</Row>
            <Row className="w-100 justify-content-center">
                <Form className="w-75">
                    <Form.Group controlId="formGroupName">
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            className="dark-fg-2 white-bg-2"
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            className="dark-fg-2 white-bg-2"
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            className="dark-fg-2 white-bg-2"
                        />
                    </Form.Group>
                </Form>
            </Row>
            <Row className="w-25">
                <Button className="anim-btn-1 white-bg w-100">SIGN UP</Button>
            </Row>
            <Row className="grey-fg w-100 d-flex justify-content-center">
                <Divider />
                Already have an Account?{' '}
                <span
                    className="ml-1 accent-2-fg"
                    onClick={() => setSignUpActive(false)}
                    style={{ cursor: 'pointer' }}
                >
                    Login!
                </span>
            </Row>
        </Container>
    );
};

export default SignUp;
