import { thunk, action } from "easy-peasy";
import axios from "axios";

export default {
  // STORE
  all_posts: {},
  individual_post: {},
  posts_current_user: {},
  // create_post_data: {},
  update_post_data: {},

  // THUNKS
  get_all_posts: thunk(async (actions) => {
    try {
      const res = await axios.get("/api/v1/posts", {
        withCredentials: true,
      });
      await actions.getAllPosts(res.data);
    } catch (err) {
      console.error("Get all posts is not working ...");
    }
  }),
  get_posts_current_user: thunk(async (actions) => {
    try {
      const res = await axios.get("/api/v1/posts/me", {
        withCredentials: true,
      });
      await actions.getPostsCurrentUser(res.data);
    } catch (err) {
      console.error("Get all posts is not working ...");
    }
  }),
  get_single_post: thunk(async (actions, postId) => {
    try {
      const res = await axios.get("/api/v1/posts/" + postId, {
        withCredentials: true,
      });
      await actions.getIndividualPost(res.data);
    } catch (err) {
      console.error("Get single post is not working ...");
    }
  }),

  // ACTIONS
  getAllPosts: action(async (state, allPosts) => {
    state.all_posts = allPosts;
  }),
  getPostsCurrentUser: action(async (state, allPostsCurrentUser) => {
    state.posts_current_user = allPostsCurrentUser;
  }),
  getIndividualPost: action(async (state, singlePost) => {
    state.individual_post = singlePost;
  }),
  //   createPost: action(async (state) => {}),
};

/*

// create_post: thunk(async ({ content, heading, club }) => {
  //   try {
  //     // const res =

  //     //      console.log(postData);

  //     const res = await axios.post(
  //       "api/v1/posts",
  //       {
  //         heading: heading,
  //         club: club,
  //         content: content,
  //       },
  //       {
  //         withCredentials: true,
  //       }
  //     );

  //     console.log(res);
  //     //await actions.createPost()
  //   } catch (err) {
  //     console.error("Create Post is not working ...");
  //   }
  // }),


*/
