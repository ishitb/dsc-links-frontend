import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import './TopCards.css';

const TopCards = ({ name, logo, links, description }) => {
    return (
        <Container
            id="top-card"
            className="white-bg h-25 d-flex flex-column justify-content-center align-items-start px-3 px-md-5 py-5"
            fluid
        >
            <Row className="m-0 align-items-center mb-md-3">
                <Col xs={3} className="h-100 d-flex p-0">
                    <img
                        className="w-75 align-self-center"
                        src={logo}
                        alt="Club Logo"
                    />
                </Col>
                <Col className="p-0">
                    <Row className="heading-text mb-1">{name}</Row>
                    <Row>
                        {links.map((link, index) => (
                            <Col xs={4} md={1} key={index} className="p-0">
                                {link}
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            <Row className="m-0 align-items-center">{description}</Row>
        </Container>
    );
};

export default TopCards;
