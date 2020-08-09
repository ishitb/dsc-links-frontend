import React, { Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { StoreProvider, createStore } from 'easy-peasy';

import model from './models/index';

import './App.css';

const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const Auth = React.lazy(() => import('./pages/Authentication/Auth'));
const Editor = React.lazy(() => import('./pages/Editor/Editor'));
const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));
const PrivateRoute = React.lazy(() =>
  import('./components/PrivateRoute/PrivateRoute')
);

const store = createStore(model); 

function App() {
  return (
    <BrowserRouter>
      <StoreProvider store={store}>
        <Suspense fallback={<div></div>}>
          <div id="app">
            <Navbar />
            <div id="main-page">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={Auth} />
                <Route exact path="/editor" component={Editor} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
          </div>
        </Suspense>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
