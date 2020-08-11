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
      console.log(res.data.token);
      // console.log(state.user_logged_in);
      await actions.setLoggedIn(res.data.token);
      // console.log(state.user_logged_in);
    } catch (err) {
      console.log("this is not working");
    }
  }),
  register_user: thunk(async (actions, { name, email, password }) => {
    try {
      console.log("is this working ? ");
      const res = await axios.post(
        "/api/v1/auth/register",
        { email: email, password: password, name: name },
        {
          withCredentials: true,
        }
      );

      actions.setLoggedIn(res.data["token"]);
    } catch (err) {
      console.log("this is not working");
    }
  }),
  logout_user: thunk(async (actions) => {
    try {
      console.log("is this working");
      await axios.get("/api/v1/auth/logout", {
        withCredentials: true,
      });
      actions.setLogout();
    } catch (err) {
      console.log("this is not working");
    }
  }),
  get_user_data: thunk(async (actions) => {
    try {
      // console.log("is this working ? ");
      const res = await axios.get("/api/v1/auth/me", {
        withCredentials: true,
      });
      console.log("data from the server of the user in question")
      console.log(res.data["data"]);
      actions.getUserData(res.data.data);
    } catch (err) {
      console.log("Getting logged in user data is not working");
    }
  }),

  // ACTIONS
  setLoggedIn: action(async (state, token) => {
    Cookies.set("auth-token", token);
    state.token = token;
    state.user_logged_in = true;
    console.log(state.token);
  }),

  setLogout: action(async (state) => {
    Cookies.remove("auth-token");
    state.token = null;
    state.user_logged_in = false;
  }),
  getUserData: action(async (state, data) => {
    state.user_data = data;
  }),

  // store_user_data: action((state, user_data) => {
  //   state.user_data = user_data;
  // }),
};
