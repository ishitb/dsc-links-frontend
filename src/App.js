import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider, createStore } from 'easy-peasy';

import model from './models/index';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

const MainPage = React.lazy(() => import('./MainPage'));

const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const store = createStore(model);

function App() {
    return (
        <BrowserRouter>
            <StoreProvider store={store}>
                <Suspense fallback={<div></div>}>
                    <div id="app">
                        <Navbar />
                        <MainPage />
                    </div>
                </Suspense>
            </StoreProvider>
        </BrowserRouter>
    );
}

export default App;
