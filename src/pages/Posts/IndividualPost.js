import React, { useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Card } from 'react-bootstrap';
import parse from 'html-react-parser';

const IndividualPost = () => {
    let { postId } = useParams();

    const post = useStoreState((store) => store.postModel.individual_post);

    const get_single_post = useStoreActions(
        (actions) => actions.postModel.get_single_post
    );

    const getPostDetails = async () => {
        await get_single_post(postId);
    };

    useEffect(() => {
        getPostDetails(postId);
    }, []);

    return post.data ? (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{post.data.heading}</Card.Title>
                    <Card.Text>{post.data.content}</Card.Text>
                </Card.Body>
            </Card>
            <div className="bg-white">{parse(post.data.content)}</div>

            {/* {post.data.content} */}
        </div>
    ) : (
        <h4>Loading...</h4>
    );
};

export default IndividualPost;
