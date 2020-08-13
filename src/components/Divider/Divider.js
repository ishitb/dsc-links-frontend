import React from 'react';
import Container from 'react-bootstrap/Container';

const Divider = () => {
    return (
        <Container
            className="divider mb-1 mb-lg-3"
            style={{ height: '0.5rem' }}
            fluid
        >
            <Container className="h-25 grey-bg w-100" fluid />
        </Container>
    );
};

export default Divider;
