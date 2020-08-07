import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const Auth = React.lazy(() => import('./pages/Authentication/Auth'));
const Editor = React.lazy(() => import('./pages/Editor/Editor'));

function App() {
    return (
        <Suspense fallback={<div></div>}>
            <div id="app">
                <Navbar />
                <div id="main-page"></div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/register" component={Auth} />
                        <Route exact path="/editor" component={Editor} />
                    </Switch>
                </div>
            </div>
        </Suspense>
    );
}

export default App;
