import React from 'react';
import 'react-bootstrap/Button';

import './Home.css';

const Carousel = React.lazy(() => import('./Carousel'));
const Grid = React.lazy(() => import('./Grid'));

const Home = () => {
    return (
        <div id="home">
            <Carousel />
        </div>
    );
};

export default Home;
