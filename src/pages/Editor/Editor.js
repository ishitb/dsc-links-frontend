import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import {Dropdown, DropdownButton} from "react-bootstrap"
import "./Editor.css";
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

function Editor() {
    const [text, setText] = useState('');
    return (
        <div className="Editor-block">

           <div id="dropdown-row">
           <Dropdown drop="right">
            <Dropdown.Toggle id="dropdown-basic" size="lg"  >Club Name</Dropdown.Toggle>
            <Dropdown.Menu>
                <DropdownItem>DSC</DropdownItem>
                <DropdownItem>TEDx</DropdownItem>
                <DropdownItem>ECELL</DropdownItem>
            </Dropdown.Menu>
            </Dropdown>
           </div>

        <h3>Hey Club, comment down your thoughts!</h3>
        
            <div className="editor">
                <CKEditor
                    editor={ClassicEditor}
                    data={text}
                    onInit={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        //feeding the data in the setText function
                        setText(data);
                        console.log(data);
                    }}
                />
                
            </div>
            <div>
                <h3>Your content looks like this!</h3>
                {parse(text)}
            </div>
        </div>
    );
}

export default Editor;
