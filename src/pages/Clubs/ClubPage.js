import React, { lazy, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useStoreActions, useStoreState } from 'easy-peasy';

import DSC_Logo from '../../assets/images/DSC-Logo.png';
import './Clubs.css';

const TopCard = lazy(() => import('./TopCards'));
const ClubPosts = lazy(() => import('./ClubPosts'));
const BottomCard = lazy(() => import('./BottomCards'));

const ClubPage = () => {
    let { clubId } = useParams();
    const clubDetails = useStoreState((store) => store.clubModel.single_club);

    const get_single_club = useStoreActions(
        (actions) => actions.clubModel.get_single_club
    );

    const getClubDetails = async () => {
        await get_single_club(clubId);
    };

    useEffect(() => {
        getClubDetails();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return clubDetails.data ? (
        <Container fluid id="club" className="h-100 w-100 p-0">
            <TopCard
                name={clubDetails.data.name}
                logo={DSC_Logo}
                links={['website', 'instagram', 'youtube']}
                description={clubDetails.data.description}
            />
            <ClubPosts posts={[1, 2, 3, 4, 5, 6]} />
            <BottomCard
                leadPhoto={DSC_Logo}
                position={'President'}
                leadName={clubDetails.data.lead_name}
            />
        </Container>
    ) : (
        <h4>Loading...</h4>
    );
};

export default ClubPage;
