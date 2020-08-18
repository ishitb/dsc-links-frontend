import React, { Fragment, useEffect } from "react";
import { Container, Form, Row, Button, Col } from "react-bootstrap";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";
import PostGrid from "./PostGrids";

import Card from "./CardUI";


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
      <h3>Welcome, {userData.name}!</h3>
      </div>

      <div>
        <h4>
        Want to post something? 
        <Link to="/createpost">
        <Button variant="dark">Go to Create Post &rarr;</Button>
       </Link>
        </h4>
      </div>

      <div>Here are all the posts you have made :</div>
     {/* adding this card section 
     <Card></Card>
      */}
     <PostGrid></PostGrid>
    </div>
  );
};

export default Dashboard;
