import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './BottomCards.css';

const BottomCards = ({ leadPhoto, position, leadName }) => {
    return (
        <Container
            id="bottom-card"
            className="d-flex justify-content-center align-items-center"
            fluid
        >
            <Row className="m-0 w-100 align-items-center justify-content-center">
                <Col xs={4} className=" p-0 mr-2">
                    <img
                        className="lead-image align-self-center white-bg"
                        // src={leadPhoto}
                        alt="Club Logo"
                    />
                </Col>
                <Col xs={4} className="p-0 w-50">
                    <Row className="heading-text ">{position}</Row>
                    <Row>{leadName}</Row>
                </Col>
            </Row>
        </Container>
    );
};

export default BottomCards;
