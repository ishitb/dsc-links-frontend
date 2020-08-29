import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

const AllPosts = () => {
    const getAllPosts = useStoreActions(
        (actions) => actions.postModel.get_all_posts
    );

    const allPosts = useStoreState((store) => store.postModel.all_posts);

    const getAllPostsFunc = async () => {
        await getAllPosts();
    };

    useEffect(() => {
        getAllPostsFunc();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container fluid id="" className="">
            {allPosts.data ? (
                allPosts.data.map((post, index) => (
                    <Link key={index} to={`/posts/${post._id}`} className="">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{post.heading}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                ))
            ) : (
                <h4>Loading...</h4>
            )}
        </Container>
    );
};

export default AllPosts;
