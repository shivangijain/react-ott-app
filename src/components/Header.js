import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { setSearchQuery } from "../actions/content";
import "./common.css";

const Header = (props) => {
  const [showSearhBox, setShowSearchBox] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    // for search min character should be 3
    if (e.target.value.length > 2) {
      setTimeout(() => {
        dispatch(setSearchQuery(e.target.value));
      }, 2000);
    }
  };

  const handleBack = () => {
    setShowSearchBox(false);
    dispatch(setSearchQuery(""));
  };
  return (
    <Navbar bg="dark" variant="dark" className="header_main">
      <Container>
        <Navbar.Brand href="#" onClick={handleBack}>
          <img src="slices/Back.png" alt="back" width="20" height="20" />
        </Navbar.Brand>
        <Navbar.Toggle />
        {showSearhBox ? (
          <Navbar.Text>
            <input autoFocus type="text" onChange={handleSearch} />
          </Navbar.Text>
        ) : (
          <Navbar.Text>{props.title}</Navbar.Text>
        )}
        <Navbar.Collapse id="justify-content-end " className="search_item">
          <Navbar.Text>
            <img
              src="slices/search.png"
              alt="search"
              onClick={() => setShowSearchBox(true)}
              width="20"
              height="20"
            />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
