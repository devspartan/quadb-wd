import React, { Component } from "react";
import "./Content.css";
import NewsCard from "./NewsCard";
import Title from "./Title";
import MostPopular from "../MostPopular/MostPopular";
import MiniNews from "../MiniNews/MiniNews";
import { entertainment } from "./MiniNewsData";
export class Content extends Component {
  render() {
    console.log(entertainment);
    return (
      <div className="content-main-container">
        <div className="content-route-text">{"News >> Latest News"}</div>
        <Title />
        <div className="content-news-container">
          <div className="content-left-div">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
          <div className="content-right-div">
            <MostPopular />
            <MiniNews data={entertainment} />
            <MiniNews data={entertainment} />
            <MiniNews data={entertainment} />
            <MiniNews data={entertainment} />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
