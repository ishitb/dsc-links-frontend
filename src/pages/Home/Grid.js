import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Container, Col } from 'react-bootstrap';

import './Grid.css';

const Grid = () => {
    const getAllClubs = useStoreActions(
        (actions) => actions.clubModel.get_all_clubs
    );

    const allClubs = useStoreState((store) => store.clubModel.all_clubs);

    const retrieveClubsList = async () => {
        await getAllClubs();
    };

    useEffect(() => {
        retrieveClubsList();
    }, []);

    return (
        <Container
            fluid
            id="all-clubs"
            className="p-0 h-100 d-flex flex-wrap align-items-between justify-content-around px-3"
        >
            {allClubs.data ? (
                allClubs.data.map((club, index) => (
                    <Link
                        key={index}
                        to={`/club/${club._id}`}
                        className="white-bg my-2 slide-up-effect club-col border-radius-15 col-md-5 col-12"
                    >
                        {index}
                    </Link>
                ))
            ) : (
                <h4>Loading...</h4>
            )}
        </Container>
    );
};

export default Grid;
