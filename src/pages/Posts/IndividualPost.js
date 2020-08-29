import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

const IndividualPost = () => {
    let { postId } = useParams();

    const postDetails = useStoreState(
        (store) => store.postModel.individual_post
    );

    const get_single_post = useStoreActions(
        (actions) => actions.postModel.get_single_post
    );

    const getPostDetails = async () => {
        await get_single_post(postId);
    };

    useEffect(() => {
        getPostDetails();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return postDetails.data ? (
        <div>
            Post heading : {postDetails.data.heading}
            Content for the post is
            {postDetails.data.content}
        </div>
    ) : (
        <h4>Loading...</h4>
    );
};

export default IndividualPost;
