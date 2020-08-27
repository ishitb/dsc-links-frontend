import React, { useState } from 'react';
import { default as BootstrapCarousel } from 'react-bootstrap/Carousel';

import './CarouselCustom.css';

import orange_bg from '../../assets/images/orange-bg.png';

const Carousel = () => {
    const topPosts = [1, 2, 3, 4, 5];

    const [index, setIndex] = useState(0);

    return (
        <div id="carousel">
            <BootstrapCarousel
            // activeIndex={index}
            // onSlide={(index) => setIndex(index)}
            >
                {topPosts.map((post, index) => (
                    <BootstrapCarousel.Item
                        key={index}
                        className="d-flex justify-content-center align-content-center"
                    >
                        {/* <img
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                zIndex: '0',
                            }}
                            src={orange_bg}
                            alt="placeholder"
                        /> */}
                        {/* <p
                            className="heading-text dark-fg"
                            style={{ zIndex: '5' }}
                        >
                            {post}
                        </p> */}
                    </BootstrapCarousel.Item>
                ))}
            </BootstrapCarousel>
        </div>
    );
};

export default Carousel;
