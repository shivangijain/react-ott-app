import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Listing from "./components/Listing";
import "./App.css";
import PageNotFound from "./components/PageNotFound";
import { ROOT_URL } from "./constants";

const App = (props) => {
  useEffect(() => {
    // scroll to top when page reload
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <div className="container main_container">
      <Header title={props.title} />
      <Routes>
        <Route exact path={`/${ROOT_URL}`} element={<Listing/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { title: state.contentList.title };
};

export default connect(mapStateToProps, null)(App);
