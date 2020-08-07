import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const Auth = React.lazy(() => import('./pages/Authentication/Auth'));

function App() {
    return (
        <Suspense fallback={<div></div>}>
            <div id="app">
                <Navbar />
                <div id="main-page">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/register" component={Auth} />
                    </Switch>
                </div>
            </div>
        </Suspense>
    );
}

export default App;
