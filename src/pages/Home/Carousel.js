import React from 'react';
import { default as BootstrapCarousel } from 'react-bootstrap/Carousel';

import './CarouselCustom.css';

const Carousel = () => {
    const topPosts = [1, 2, 3, 4, 5];

    return (
        <div id="carousel">
            <BootstrapCarousel>
                {topPosts.map((post, index) => (
                    <BootstrapCarousel.Item key={index}>
                        {post}
                    </BootstrapCarousel.Item>
                ))}
            </BootstrapCarousel>
        </div>
    );
};

export default Carousel;
