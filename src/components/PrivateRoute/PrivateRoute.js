import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  if (Cookies.get('token') === 'none' || Cookies.get() == null) {
    setAuthenticated(false);
  } else {
    setAuthenticated(true);
  }
  if (isAuthenticated) {
    console.log('it detects a valid token in the cookies');
  } else {
    console.log('there is no valid token in the cookies');
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/register" />
      }
    />
  );
};

export default PrivateRoute;

/*

const [isAuthenticated, setAuthenticated] = useState(false);
  if (Cookies.get('token') === 'none' || Cookies.get() == null) {
    setAuthenticated(false);
  } else {
    setAuthenticated(true);
  }
  if(isAuthenticated){
      console.log("it detects a valid token in the cookies");
  }else{
      console.log("there is no valid token in the cookies");
  }



*/
