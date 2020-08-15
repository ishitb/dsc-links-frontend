//TODO: Create the Article Editor

import React, {Component} from "react";
import cookies from "react-cookies";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"
import "./style.scss"

import toolbarOptions from "./Toolbar"
import ImageBlot from "./Blots/Image"

const Quill = ReactQuill.Quill;
Quill.register(ImageBlot, true);

let icons = Quill.import("ui/icons");
icons["Image"] = '<svg x="0px" y="0px"	 viewBox="0 0 313 313" style="enable-background:new 0 0 313 313;" xml:space="preserve"><g>	<path d="M283,3H30C13.458,3,0,16.458,0,33v247c0,16.542,13.458,30,30,30h253c16.542,0,30-13.458,30-30V33		C313,16.458,299.542,3,283,3z M283,33l0.01,131.228l-50.683-47.598c-3.544-3.327-8.083-5.159-12.78-5.159		c-5.715,0-11.063,2.681-14.673,7.354l-59.663,77.256c-1.934,2.504-5.036,3.999-8.299,3.999c-2.223,0-4.324-0.676-6.076-1.956		l-38.773-28.316c-3.862-2.821-8.865-4.374-14.085-4.374c-5.945,0-11.504,1.938-15.65,5.456L30,198.31V33H283z"/>	<path d="M115,122c17.093,0,31-13.907,31-31s-13.907-31-31-31S84,73.907,84,91S97.907,122,115,122z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';

class ArticleEditor extends Component
{

    constructor(props)
    {
        super(props);

        this.rQ = React.createRef();
        this.imgUp = React.createRef();

        this.uploadFile = this.uploadFile.bind(this);
        this.buttonBind = this.buttonBind.bind(this);
    }

    state = {
        imageUploading: false
    }

    Quill = null;

    getContents = () => this.Quill && this.Quill.getContents();

    async uploadFile()
    {
        this.setState({
            imageUploading : true
        });

        try {
            let formData = new FormData();
            formData.append("creatorindex", this.props.creatorindex);
            formData.append("image", this.imgUp.current.files[0]);
            let res = await fetch(
                (process.env.REACT_APP_API_URL || "http://localhost:5000/") + "article/image",
                {
                    method : "POST",
                    body : formData,
                    headers : new Headers({
                        "Accept" : "application\json",
						"x-auth-token":		cookies.load("userCookie")
                    })
                }
            )

            let resp = await res.json();

            this.setState({
                imageUploading : false
            });

            return resp;
        }
        catch(e)
        {
            console.log(e);
            this.setState({
                imageUploading : false
            });

            return e.response;
        }
    }

    componentDidMount()
    {
        this.Quill = this.rQ.current.getEditor();

        setTimeout( this.buttonBind, 100);
    }

    render = () => (
        <div>
            <input type="file" ref={this.imgUp} style={{
                position: "absolute",
                opacity: 0,
                pointerEvents: "none"
            }}/>
            <ReactQuill 
                ref={this.rQ}
                theme={this.props.theme}
                placeholder={this.props.placeholder}
                defaultValue={this.props.defaultValue}
                modules={{toolbar : toolbarOptions}}
            />
        </div>
    )

    buttonBind() {
        let toolbar = this.Quill && this.Quill.getModule("toolbar");

        toolbar.addHandler("Image", () => this.imgUp.current.click());

        this.imgUp.current.addEventListener("change", async (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (this.state.imageUploading)
                return;
            let resp = await this.uploadFile();
            if (typeof(resp.errors) === "undefined") {
                let range = this.Quill.getSelection(true);
                this.Quill.insertText(range.index, '\n', Quill.sources.USER);
                this.Quill.insertEmbed(
                    range.index + 1, 
                    "Image", 
                    {
                        url: (process.env.REACT_APP_API_URL || "http://localhost:5000/") + "assets/images/article/" + resp.url,
                        fileName: resp.url
                    }, 
                    Quill.sources.USER
                );
                this.Quill.setSelection(range.index + 2, Quill.sources.SILENT);
            }
            else
            {
                alert(resp.errors[0].msg)
            }
        });
    }
}
export default ArticleEditor;