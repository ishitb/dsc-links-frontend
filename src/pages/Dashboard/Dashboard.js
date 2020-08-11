import React, { Fragment, useEffect } from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import { useStoreActions, useStoreState } from "easy-peasy";

const Dashboard = () => {
  const getUserData = useStoreActions(
    (actions) => actions.accountModel.get_user_data
  );

  const userData = useStoreState((store) => store.accountModel.user_data);

  const getLoggedInUserData = async () => {
    console.log("is this happening");
    await getUserData();
    console.log(userData);
  };

  useEffect(() => {
    getLoggedInUserData();
  }, []);

  return (
    <div>
      <div>this should be a protected route</div>
      <button onClick={getLoggedInUserData}>Get Logged in User Data</button>
      <div>
        Welcome {userData.name}
      </div>
      <div>
        Here are all the posts you have made : 
      </div>
      
    </div>
  );
};

export default Dashboard;
