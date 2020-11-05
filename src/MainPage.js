import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';

const PrivateRoute = React.lazy(() =>
    import('./components/PrivateRoute/PrivateRoute')
);
const ParticlesComponent = React.lazy(() =>
    import('./components/ParticlesComponent/ParticlesComponent')
);
const CreatePost = React.lazy(() => import('./pages/Posts/CreatePost'));
const ClubPage = React.lazy(() => import('./pages/Clubs/ClubPage'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const Auth = React.lazy(() => import('./pages/Authentication/Auth'));
const CustomAuth = React.lazy(() =>
    import('./pages/Authentication/CustomAuth')
);
const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));
const AllPosts = React.lazy(() => import('./pages/Posts/AllPosts'));
const IndividualPost = React.lazy(() => import('./pages/Posts/IndividualPost'));

const MainPage = () => {
    const getUserData = useStoreActions(
        (actions) => actions.accountModel.get_user_data
    );

    const getLoggedInUserData = async () => {
        await getUserData();
    };

    useEffect(() => {
        getLoggedInUserData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="main-page">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/reg" component={Auth} />
                <Route
                    exact
                    path="/register"
                    render={(props) => (
                        <ParticlesComponent
                            props={props}
                            component={CustomAuth}
                        />
                    )}
                />
                <Route exact path="/posts" component={AllPosts} />
                <Route exact path="/posts/:postId" component={IndividualPost} />
                <Route exact path="/club/:clubId" component={ClubPage} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/createpost" component={CreatePost} />
            </Switch>
        </div>
    );
};

export default MainPage;
