import React, { useEffect, useState } from "react";
import QuillEditor from "./QuillEditor";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useStoreActions } from "easy-peasy";

function CreatePage(props) {
  // const user = useSelector((state) => state.user);

  const createPost = useStoreActions(
    (actions) => actions.postModel.create_post
  );

  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [club, setClub] = useState("");

  const onEditorChange = (value) => {
    setContent(value);
    console.log(content);
  };

  const onFilesChange = (files) => {
    setFiles(files);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // setContent("");

    // if (user.userData && !user.userData.isAuth) {
    //   return alert("Please Log in first");
    // }

    const postData = {
      content: content,
      heading: "This BLA BLA BLABLA BLA",
      club: "Sample Club 1",
      // userID: user.userData._id,
    };

    console.log(postData);

    // createPost(postData);

    axios.post("/api/v1/posts", postData, {
      withCredentials: true
    }).then((response) => {
      if (response) {
        // message.success("Post Created!");
        // setTimeout(() => {
        //   props.history.push("/dashboard");
        // }, 2000);

      }else{
        console.log()
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2> Create a new post</h2>
      </div>

      <QuillEditor
        placeholder={"Start Posting Something"}
        onEditorChange={onEditorChange}
        onFilesChange={onFilesChange}
      />

      {/* <Form onSubmit={onSubmit}>
        <div style={{ textAlign: "center", margin: "2rem" }}>
          <Button size="lg" htmlType="submit" className="" onSubmit={onSubmit}>
            Submit
          </Button>
        </div>
      </Form> */}

      <button onClick={onSubmit}>Submit Demo Button</button>
    </div>
  );
}

export default CreatePage;
