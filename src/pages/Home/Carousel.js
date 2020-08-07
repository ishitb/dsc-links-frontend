import React, { useState, useRef } from 'react';

const Carousel = () => {
    const topPosts = [1, 2, 3, 4, 5];
    const [currPost, setCurrPost] = useState(0);
    const slider = useRef();

    const slideLeft = () => {
        let slide_w = slider.current.clientWidth;
        let currIndex = currPost > 0 ? currPost - 1 : 4;
        slider.current.scrollTo({
            behavior: 'smooth',
            left: slide_w * currIndex,
            top: 0,
        });
        setCurrPost(currIndex);
    };

    const slideRight = async () => {
        let slide_w = slider.current.clientWidth;
        let currIndex = currPost < 4 ? currPost + 1 : 0;
        slider.current.scrollTo({
            behavior: 'smooth',
            left: slide_w * currIndex,
            top: 0,
        });
        setCurrPost(currIndex);
    };

    return (
        <div
            id="carousel"
            // className="posts"
        >
            <div id="slider" ref={slider}>
                {topPosts.map((post, index) => (
                    <div
                        className="post"
                        key={index}
                        style={
                            {
                                // backgroundColor: `rgb(${post * 50}, ${post * 20}, ${
                                //     post * 25
                                // })`,
                            }
                        }
                    >
                        {post}
                    </div>
                ))}
            </div>
            <div className="go-left" onClick={slideLeft}>
                <i className="fas fa-play"></i>
            </div>
            <div className="go-right" onClick={slideRight}>
                <i className="fas fa-play"></i>
            </div>
        </div>
    );
};

export default Carousel;
