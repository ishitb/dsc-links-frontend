import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useStoreState, useStore } from 'easy-peasy';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const loggedIn = useStore((store) => store.accountModel.user_logged_in);
    return loggedIn ? (
        <Route {...rest} render={(props) => <Component {...props} />} />
    ) : (
        <Redirect to="/register" />
    );
};

export default PrivateRoute;
