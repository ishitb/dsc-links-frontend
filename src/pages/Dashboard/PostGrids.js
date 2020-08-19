import React from "react"
import "./PostGrid.css";
import {Button} from "react-bootstrap";

export default function PostGrid(){
    return (
        <div className="container">

            <div className="post">
                <div className="item">
                    <h3>Title</h3>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi perspiciatis porro accusantium, rem sint eveniet nulla a numquam facilis vero sapien".substring(1,150 + " ...")</h5>
                {/* just use .substring(1, 150) + " ..." to make it look like a real blogspot page */}
                    <div className="buttons">
                    <Button variant='info'>Go to post &rarr;</Button>
                    <Button variant='danger'>Delete &#10060;</Button>
                    </div>
                </div>
                
            </div>

          
           
        </div>
    ); 
}
