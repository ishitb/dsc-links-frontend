import React, { useEffect } from "react";
import "react-bootstrap/Button";
import { useStoreState, useStoreActions } from "easy-peasy";
import "./Home.css";

const Carousel = React.lazy(() => import("./Carousel"));
const Grid = React.lazy(() => import("./Grid"));

const Home = () => {
  const getAllPosts = useStoreActions(
    (actions) => actions.postModel.get_all_posts
  );

  const allPostsData = useStoreState((store) => store.postModel.all_posts);

  const getAllPostsFunc = async () => {
    console.log("is this happening");
    await getAllPosts();
    console.log(allPostsData);
  };


  useEffect(() => {
    getAllPostsFunc();
  }, []);

  return (
    <div id="home">
      <Carousel />
      <div id="text">
        <h3 id="text-1">SOCIETIES</h3>
        <h3 id="text-2">RECENT POSTS</h3>
      </div>
      <Grid />
    </div>
  );
};

export default Home;
