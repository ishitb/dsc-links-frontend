import React from 'react';
import './PostGrid.css';
import { Button, Container } from 'react-bootstrap';

export default function PostGrid() {
    return (
        <div className="container d-flex justify-content-center" id="post-grid">
            <div className="post p-3 px-5 border-radius-15 grey-bg my-5">
                <div className="item">
                    <h3 className="heading-text">TITLE</h3>
                    <h5 className="my-3 mx-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis excepturi perspiciatis porro accusantium, rem sint
                        eveniet nulla a numquam facilis vero
                        sapien".substring(1,150 + " ...")
                    </h5>
                    {/* just use .substring(1, 150) + " ..." to make it look like a real blogspot page */}
                    <Container
                        className="buttons d-flex justify-content-around"
                        fluid
                    >
                        <Button variant="info">Go to post &rarr;</Button>
                        <Button variant="danger">Delete &#10060;</Button>
                    </Container>
                </div>
            </div>
        </div>
    );
}
