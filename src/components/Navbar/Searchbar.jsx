import React, {useState} from "react";
import { MDBCol, MDBFormInline, MDBBtn, MDBIcon } from "mdbreact";
import "./Searchbar.css";

// const [search, setSearch]= useState("");

const SearchPage = () => {
  return (
    <MDBCol md="4">
      <MDBFormInline className="md-form mr-auto mb-4"> 
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"  />
        {/* <MDBBtn tag="a" floating gradient="peach" type="submit" >
        <MDBIcon icon="search" type="submit" />
      </MDBBtn> */}
      
        <MDBBtn outline color="white" rounded size="sm" type="submit" className="mr-auto">
        <MDBIcon icon="search" className="md" /> 
        </MDBBtn>
        
      </MDBFormInline>
    </MDBCol>
  );
}

export default SearchPage;