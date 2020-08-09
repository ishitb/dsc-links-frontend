import React, { useState } from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';

import './CustomAuth.css';

const CustomAuth = () => {
    const [signUpActive, setSignUpActive] = useState(false);

    return (
        <div
            id="auth"
            className="h-100 d-flex justify-content-center align-items-center"
        >
            <Container className="h-50 w-100 d-flex justify-content-center">
                <Container
                    id="login-form"
                    className={`dark-bg-2 h-100 d-flex flex-column justify-content-around align-items-center border-radius-15 ${
                        !signUpActive ? 'active' : ''
                    }`}
                >
                    <Row className="heading-text white-fg">WELCOME BACK</Row>
                    <Row className="w-100 justify-content-center">
                        <Form className="w-75">
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    className="dark-fg-2 white-bg"
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    className="dark-fg-2 white-bg"
                                />
                            </Form.Group>
                        </Form>
                    </Row>
                    <Row className="w-25">
                        <Button
                            className="anim-btn-1 dark-bg-2 w-100"
                            onClick={() => setSignUpActive(true)}
                        >
                            LOGIN
                        </Button>
                    </Row>
                </Container>

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
                        <Button className="anim-btn-1 white-bg w-100">
                            LOGIN
                        </Button>
                    </Row>
                </Container>
            </Container>
        </div>
    );
};

export default CustomAuth;
