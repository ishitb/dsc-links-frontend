import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));

function App() {
    return (
        <Suspense fallback={<div></div>}>
            <div id="app">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        </Suspense>
    );
}

export default App;
