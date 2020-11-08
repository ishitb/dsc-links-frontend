import React, { useEffect } from 'react';
import 'react-bootstrap/Button';
import { useStoreActions, useStoreState } from 'easy-peasy';
import './Home.css';

const Carousel = React.lazy(() => import('./Carousel'));
const Grid = React.lazy(() => import('./Grid'));

const Home = () => {
  const getAllPosts = useStoreActions(
    (actions) => actions.postModel.get_all_posts
  );

  const getAllPostsFunc = async () => {
    await getAllPosts();
  };

  useEffect(() => {
    getAllPostsFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allPosts = useStoreState((store) => store.postModel.all_posts);

  console.log(allPosts);

  return (
    <div id="home" className="pb-2">
      <Carousel />
      <h3 className="heading-text grey-fg mt-3">SOCIETIES</h3>
      <Grid />
    </div>
  );
};

export default Home;
