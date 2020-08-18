import { thunk, action } from 'easy-peasy';
import axios from 'axios';

export default {
    // STORE
    all_clubs: {},
    single_club: {},

    // THUNKS
    get_all_clubs: thunk(async (actions) => {
        try {
            const res = await axios.get('/api/v1/clubs', {
                withCredentials: true,
            });
            await actions.getAllClubs(res.data);
        } catch (err) {
            console.log('Get all clubs is not working ...');
        }
    }),

    get_single_club: thunk(async (actions, clubId) => {
        try {
            const res = await axios.get('/api/v1/clubs/' + clubId, {
                withCredentials: true,
            });
            await actions.getSingleClub(res.data);
        } catch (err) {
            console.log('Get single club is not working');
        }
    }),

    // ACTIONS
    getAllClubs: action(async (state, allClubs) => {
        state.all_clubs = allClubs;
    }),

    getSingleClub: action(async (state, singleClub) => {
        state.single_club = singleClub;
    }),
};
