import { thunk, action } from "easy-peasy";
import axios from "axios";

export default {
  // STORE
  all_posts: {},
  posts_current_user: {},
  create_post_data: {},
  update_post_data: {},

  // THUNKS
  get_all_posts: thunk(async (actions) => {
    try {
      console.log("Is get all posts working .... ");
      const res = await axios.get("/api/v1/posts", {
        withCredentials: true,
      });
      console.log(res);
      console.log(res.data);
      await actions.getAllPosts(res.data);
    } catch (err) {
      console.log("Get all posts is not working ...");
    }
  }),
  get_posts_current_user: thunk(async (actions) => {
    try {
      console.log("Is get all posts working .... ");
      const res = await axios.get("/api/v1/posts/me", {
        withCredentials: true,
      });
      console.log(res);
      console.log(res.data);
      await actions.getPostsCurrentUser(res.data);
    } catch (err) {
      console.log("Get all posts is not working ...");
    }
  }),

  // ACTIONS
  getAllPosts: action(async (state, allPosts) => {
    state.all_posts = allPosts;
  }),
  getPostsCurrentUser: action(async (state, allPostsCurrentUser) => {
    state.posts_current_user = allPostsCurrentUser;
  }),
};
