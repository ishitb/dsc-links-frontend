import React, { lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import DSC_Logo from '../../assets/images/DSC-Logo.png';
import './Clubs.css';

const TopCard = lazy(() => import('./TopCards'));
const ClubPosts = lazy(() => import('./ClubPosts'));
const BottomCard = lazy(() => import('./BottomCards'));

const ClubPage = () => {
    let { clubId } = useParams();

    return (
        <Container fluid id="club" className="h-100 w-100 p-0">
            <TopCard
                name="Developer Student Club"
                logo={DSC_Logo}
                links={['website', 'instagram', 'youtube']}
                description="One Line Description"
            />
            <ClubPosts posts={[1, 2, 3, 4, 5, 6]} />
            <BottomCard
                leadPhoto={DSC_Logo}
                position={'President'}
                leadName={'Lead Name'}
            />
        </Container>
    );
};

export default ClubPage;
