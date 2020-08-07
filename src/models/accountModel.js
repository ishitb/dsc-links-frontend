import { thunk, action } from 'easy-peasy';

export default {
    user_loggen_in: false,
    token: null,
    user_data: {
        name: 'John Doe',
    },

    // THUNKS
    register_user: thunk(async (actions, { name, email, password }) => {
        // Register Function

        actions
            .setLoggedIn
            // token
            ();
        actions.store_user_data({
            name: name,
            emial: email,
        });
    }),

    // ACTIONS
    setLoggedIn: action((state, token) => {
        state.token = token;
        if (token) state.user_logged_in = true;
    }),

    store_user_data: action((state, user_data) => {
        state.user_data = user_data;
    }),
};
