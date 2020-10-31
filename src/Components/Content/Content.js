import React, { Component } from "react";
import "./Content.css";
import NewsComp from "./NewsComp";
import Title from "./Title";

export class Content extends Component {
  render() {
    return (
      <div className="content-main-container">
        <div className="content-route-text">News >> Latest News</div>
        <Title />
        <div className="content-news-container">
          <div className="content-left-div">
            <NewsComp />
            <NewsComp />
            <NewsComp />
            <NewsComp />
          </div>
          <div className="content-right-div">Hey mind your own business</div>
        </div>
      </div>
    );
  }
}

export default Content;
