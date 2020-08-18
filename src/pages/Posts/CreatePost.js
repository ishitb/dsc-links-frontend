import React, { useEffect, useState } from "react";
import QuillEditor from "./QuillEditor";
import {  Button, Form } from "react-bootstrap";
import axios from "axios";
import {Dropdown, DropdownButton} from "react-bootstrap";
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import "./CreatePost.css";
import { useStoreActions, useStoreState } from "easy-peasy";




function CreatePage(props) {
  // const user = useSelector((state) => state.user);
  const [heading, setHeading] = useState(""); 
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [club, setClub] = useState("");

  const getUserData = useStoreActions(
    (actions) => actions.accountModel.get_user_data
  );
  
  const userData = useStoreState((store) => store.accountModel.user_data);
  
  const getLoggedInUserData = async () => {
    console.log("is this happening");
    await getUserData();
    console.log(userData);
  };

  const onEditorChange = (value) => {
    setContent(value);
    console.log(content);
  };

  const onFilesChange = (files) => {
    setFiles(files);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setContent("");

    // if (user.userData && !user.userData.isAuth) {
    //   return alert("Please Log in first");
    // }

    const variables = {
      content: content,
      heading: "This is sample Heading",
      club: "Sample Club 1"
      // userID: user.userData._id,
    };

    axios.post("/api/v1/posts", variables).then((response) => {
      if (response) {
        // message.success("Post Created!");

        // setTimeout(() => {
        //   props.history.push("/dashboard");
        // }, 2000);
      }
    });
  };

  return (
    
      <div style={{ textAlign: "center" }}>
      <div className="Editor-block">
      <div id="dropdown-row">
           <Dropdown drop="right">
            <Dropdown.Toggle id="dropdown-basic" size="lg" onClick={getLoggedInUserData} >Club Name</Dropdown.Toggle>
            <Dropdown.Menu>
                <DropdownItem>DSC</DropdownItem>
                <DropdownItem>TEDx</DropdownItem>
                <DropdownItem>ECELL</DropdownItem>
            </Dropdown.Menu>
            </Dropdown>
           </div>
        <h3> Create a new post</h3>
        
        <div className="editor">
        <QuillEditor 
        placeholder={"Start Posting Something"}
        onEditorChange={onEditorChange}
        onFilesChange={onFilesChange}
      />
        </div>
      </div>


      <Form onSubmit={onSubmit}>
        {/* <div style={{ textAlign: "center", margin: "2rem" }}> */}
          <Button size="lg" htmlType="submit" className="" onSubmit={onSubmit}>
            Submit
          </Button>
        {/* </div> */}
      </Form>
      </div>
     
  );
}

export default CreatePage;
