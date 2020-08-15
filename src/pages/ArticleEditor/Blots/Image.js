import ReactQuill from "react-quill"

const Quill = ReactQuill.Quill;
const Embed = Quill.import("blots/block/embed");

class ImageBlot extends Embed{
    static create(image) {
        console.log("Image : " + image.toString());
        let node = super.create();
        node.setAttribute('src', image.url);
        let fileName = image.url.substr(image.url.lastIndexOf("/") + 1);
        node.setAttribute('alt', image.fileName);
        return node;
    }

    static value(node)
    {
        return {
            url : node.getAttribute("src"),
            fileName : node.getAttribute("alt")
        }
    }
}

ImageBlot.blotName = "Image";
ImageBlot.tagName = "img";

export default ImageBlot