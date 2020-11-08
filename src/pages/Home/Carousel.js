import React, { useCallback, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  const getAllPosts = useStoreActions(
    (actions) => actions.postModel.get_all_posts
  );

  const getAllPostsFunc = async () => {
    await getAllPosts();
  };

  useEffect(() => {
    getAllPostsFunc();
  }, []);

  const allPosts = useStoreState((store) => store.postModel.all_posts);

  return (
    <div className="my-4">
      {allPosts != null && allPosts.data != undefined ? (
        <Carousel>
          {allPosts.data.map((d) => (
            <Carousel.Item key={d._id} interval={3000}>
              <img
                style={{
                  height: '500px',
                  width: '95vw',
                  objectFit: 'cover',
                }}
                className="d-block w-100"
                src={
                  d.photo !== 'none.jpg'
                    ? d.photo
                    : 'https://source.unsplash.com/random/800x500'
                }
                alt={d.heading}
                title={d.heading}
              />
              <Carousel.Caption>
                <h3>{d.heading}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <div style={{ color: 'white' }}>Loading ...</div>
      )}
    </div>
  );
};

export default CarouselComponent;
