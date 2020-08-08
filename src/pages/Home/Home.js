import React from 'react';

import './Home.css';

const Carousel = React.lazy(() => import('./Carousel'));

const Home = () => {
    return (
        <div id="home">
            <Carousel />
        </div>
    );
};

export default Home;
