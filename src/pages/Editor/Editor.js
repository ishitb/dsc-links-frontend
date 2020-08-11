import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import "./Editor.css";

function Editor() {
    const [text, setText] = useState('');
    return (
        <div className="Editor-block">
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
