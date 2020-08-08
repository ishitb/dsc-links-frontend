// import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const [isAuthenticated, setAuthenticated] = useState(false);

//   useEffect(async () => {
//     if (Cookies.get('auth-token') === 'none' || Cookies.get() == null) {
//       await setAuthenticated(false);
//     } else {
//       await setAuthenticated(true);
//     }
//     console.log(Cookies.get('auth-token'));
//     console.log(isAuthenticated);
//   }, []);

//   // if (isAuthenticated) {
//   //   console.log('it detects a valid token in the cookies');
//   // } else {
//   //   console.log('there is no valid token in the cookies');
//   // }

//   return isAuthenticated ? (
//     <Route {...rest} render={(props) => <Component {...props} />} />
//   ) : (
//     <Redirect to="/register" />
//   );
// };

// export default PrivateRoute;

import React, { Component } from 'react';

export default class PrivateRoute extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isAuthenticated: false,
  };

  componentWillMount = async () => {
    if (Cookies.get('auth-token') === 'none' || Cookies.get('auth-token') === null) {
      this.setState({
        isAuthenticated: false,
      });
    } else {
      this.setState({
        isAuthenticated: true,
      });
    }
  };

  render() {
    // console.log(this.props);
    // return <div></div>;
    return this.state.isAuthenticated ? (
      <Route {...this.props} render={(props) => <Component {...props} />} />
    ) : (
      <Redirect to="/register" />
    );
  }
}

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
