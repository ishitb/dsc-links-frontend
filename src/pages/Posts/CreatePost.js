import React, { useState, useRef } from 'react';
import QuillEditor from './QuillEditor';
import { Button, FormControl } from 'react-bootstrap';
import axios from 'axios';
import './CreatePost.css';
// import { useStoreActions, useStoreState } from 'easy-peasy';

function CreatePage() {
    const titleRef = useRef();

    // const user = useSelector((state) => state.user);

    // const createPost = useStoreActions(
    //     (actions) => actions.postModel.create_post
    // );

    // const [heading, setHeading] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState([]);
    // const [club, setClub] = useState('');

    // const getUserData = useStoreActions(
    //     (actions) => actions.accountModel.get_user_data
    // );

    // const userData = useStoreState((store) => store.accountModel.user_data);

    // const getLoggedInUserData = async () => {
    //     console.log('is this happening');
    //     await getUserData();
    //     console.log(userData);
    // };

    const onEditorChange = (value) => {
        setContent(value);
        console.log(content);
    };

    const onFilesChange = (input_files) => {
        setFiles(input_files);
        console.log(files);
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        // setContent("");

        // if (user.userData && !user.userData.isAuth) {
        //   return alert("Please Log in first");
        // }

        const postData = {
            content: content,
            heading: 'sample heading test one',
            club: 'Sample Club 1',
            // userID: user.userData._id,
        };

        console.log(postData);

        // createPost(postData);

        axios
            .post('/api/v1/posts', postData, {
                withCredentials: true,
            })
            .then((response) => {
                if (response) {
                    // message.success("Post Created!");
                    // setTimeout(() => {
                    //   props.history.push("/dashboard");
                    // }, 2000);
                } else {
                    console.log();
                }
            });
    };

    const make_title_uppercase = () => {
        titleRef.current.value = titleRef.current.value.toUpperCase();
    };

    return (
        <div
            id="new-post"
            className="py-5 text-center d-flex flex-column align-items-center justify-content-around"
        >
            <h3 className="heading-text-2 grey-fg mb-5"> CREATE A NEW POST</h3>
            <FormControl
                placeholder="Title"
                id="title-input"
                className="w-50 heading-text accent-2-fg mb-n4"
                ref={titleRef}
                onChange={() => make_title_uppercase()}
            />
            <div className="Editor-block border-radius-15">
                <div className="editor">
                    <QuillEditor
                        placeholder={'Start Posting Something'}
                        onEditorChange={onEditorChange}
                        onFilesChange={onFilesChange}
                    />
                </div>
            </div>

            {/* <Form onSubmit={onSubmit}>
        <div style={{ textAlign: "center", margin: "2rem" }}>
          <Button size="lg" htmlType="submit" className="" onSubmit={onSubmit}>
            Submit
          </Button>
        </div>
      </Form> */}

            <Button
                id="new-post-button"
                className="anim-btn-1 dark-bg py-1"
                onClick={onSubmit}
                style={{
                    backgroundColor: 'transparent',
                    fontSize: '1.5rem',
                    width: '12rem',
                }}
            >
                Submit Post
            </Button>
        </div>
    );
}

export default CreatePage;
