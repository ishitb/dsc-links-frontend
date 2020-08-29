import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Container } from 'react-bootstrap';

import './Grid.css';

import club_placeholder_1 from '../../assets/images/club-placeholder-1.png';
import club_placeholder_2 from '../../assets/images/club-placeholder-2.png';

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

        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        className="white-bg my-2 slide-up-effect club-col border-radius-15 col-md-5 col-12 d-flex align-items-center justify-content-around"
                    >
                        <img
                            src={
                                index === 0
                                    ? club_placeholder_1
                                    : club_placeholder_2
                            }
                            style={{
                                width: '30%',
                            }}
                            alt="club-placeholder"
                        />
                        <p className="heading-text club-name dark-fg">
                            {club.name}
                        </p>
                    </Link>
                ))
            ) : (
                <h4>Loading...</h4>
            )}
        </Container>
    );
};

export default Grid;
