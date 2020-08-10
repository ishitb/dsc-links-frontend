import React from 'react';
import 'react-bootstrap/Button';

import './Home.css';

const Carousel = React.lazy(() => import('./Carousel'));
const Grid = React.lazy(() => import('./Grid'));

const Home = () => {
    return (
        <div id="home">
            <Carousel />
            <div id="text">
                <h3 id="text-1">SOCIETIES</h3>
                <h3 id="text-2">RECENT POSTS</h3>
            </div>  
            <Grid/> 
        </div>
    );
};

export default Home;
