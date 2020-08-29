import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Link } from 'react-router-dom';
import PostGrid from './PostGrids';

// import Card from "./CardUI";

import './Dashboard.css';

const Dashboard = () => {
    const getUserData = useStoreActions(
        (actions) => actions.accountModel.get_user_data
    );

    const userData = useStoreState((store) => store.accountModel.user_data);

    const getLoggedInUserData = async () => {
        console.log('is this happening');
        await getUserData();
        console.log(userData);
    };

    useEffect(() => {
        getLoggedInUserData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="dashboard" className="p-2 p-md-5">
            {/* <div>this should be a protected route</div>
            <button onClick={getLoggedInUserData}>
                Get Logged in User Data
            </button> */}
            <div>
                <h3 className="white-fg">WELCOME BACK, VISUALLY SNU</h3>
            </div>

            <div className="my-3">
                <Link
                    id="create-post-button"
                    className="anim-btn-1 dark-bg py-1"
                    to="/createpost"
                    style={{
                        backgroundColor: 'transparent',
                        fontSize: '1.5rem',
                        width: '12rem',
                    }}
                >
                    New Post
                </Link>
            </div>

            <div className="heading-text grey-fg">
                Here are all the posts you have made :
            </div>
            {/* adding this card section 
     <Card></Card>
      */}
            <PostGrid />
        </div>
    );
};

export default Dashboard;
