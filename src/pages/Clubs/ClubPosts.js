import React from 'react';
import { Container, Col } from 'react-bootstrap';

import './ClubPosts.css';

const ClubPosts = ({ posts }) => {
    return (
        <Container fluid className="px-1 px-md-5" id="club-posts">
            <Container
                fluid
                className="p-0 h-100 d-flex flex-wrap align-items-between justify-content-around"
            >
                {posts.map((post, index) => (
                    <Col
                        xs={12}
                        // sm={4}
                        md={5}
                        key={index}
                        className="white-bg my-2 slide-up-effect club-post border-radius-15"
                    >
                        {post}
                    </Col>
                ))}
            </Container>
        </Container>
    );
};

export default ClubPosts;
