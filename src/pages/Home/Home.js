import React from 'react';

import './Home.css';

const Carousel = React.lazy(() => import('./Carousel'));
const Grid = React.lazy(() => import('./Grid'));

const Home = () => {
    return (
            <div> 
            <div id="home">{/* <Carousel />*/ }</div>
            <div>
                <h3>SOCIETIES</h3>
                <h3>RECENT POSTS</h3>
            </div>
            <div id="home">{<Grid />}</div>
            </div>
        );
};

export default Home;
