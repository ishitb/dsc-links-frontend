import { thunk, action } from "easy-peasy";
import axios from "axios";
import Cookies from "js-cookie";

export default {
  // STORE
  user_logged_in: false,
  token: null,
  user_data: {},

  // THUNKS
  login_user: thunk(async (actions, { email, password }) => {
    try {
      console.log("is this working ? ");
      const res = await axios.post(
        "/api/v1/auth/login",
        { email: email, password: password },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      await actions.setLoggedIn(res.data["token"]);
    } catch (err) {
      console.log("this is not working");
    }
  }),


  // ACTIONS
  setLoggedIn: action(async (state, token) => {
    Cookies.set("auth-token", token);
    state.token = token;
    state.user_logged_in = true;
    console.log(state.token);
  }),

  
};
