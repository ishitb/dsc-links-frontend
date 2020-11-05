import React from 'react';
import Particles from 'react-particles-js';

import './Particles.css';

const ParticlesComponent = ({ component: Component, ...rest }) => {
    return (
        <>
            <Particles
                className="particles"
                params={{
                    // background: {
                    //     color: {
                    //         value: '#00f',
                    //     },
                    // },
                    particles: {
                        color: {
                            value: '#fff',
                        },

                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 80,
                        },
                        size: {
                            value: 3,
                        },
                        collisions: {
                            enable: true,
                        },
                        links: {
                            color: '#f7941d',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                    },
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push',
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse',
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 10,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    fpsLimit: 60,
                    detectRetina: true,
                }}
            />
            <Component />
        </>
    );
};

export default ParticlesComponent;
