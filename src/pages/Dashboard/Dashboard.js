import React, { Fragment, useEffect } from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';
import { useStoreState } from 'easy-peasy';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const userData = useStoreState((store) => store.accountModel.user_data);

    useEffect(() => {}, []);

    return (
        <div>
            <div>this should be a protected route</div>
            <div>Welcome {userData.name}</div>

            <div>
                Click Here to make a new post :
                <Link to="/createpost">Go to Create Post</Link>
            </div>

            <div>Here are all the posts you have made :</div>
            {/*
        
        display all posts section
        
        */}
        </div>
    );
};

export default Dashboard;
