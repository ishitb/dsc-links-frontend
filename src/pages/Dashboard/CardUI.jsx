import React from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";
// import DSC from "../../assets/images/DSC-Logo";


const Card=props=>{
return(
<div className="card text-center">
    <div className="overflow">
    <img src="../../assets/images/DSC-Logo" alt="DSC" />
    </div>
    <div className="card-body text-dark">
        <h4 className="card-title">
           Lorem ipsum dolor sit amet consectetur ratione commodi aliquid quasi. {props.title}
        </h4>
        <p className="card-text text-secondary">
            {props.content}
        </p>
        <a href="#" className="btn btn-outline">Go to post</a>
    </div>
</div>
);
}

export default Card;