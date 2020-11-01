import React, { Component } from "react";
import "./Content.css";
import NewsCard from "./NewsCard";
import Title from "./Title";
import MostPopular from "../MostPopular/MostPopular";
import MiniNews from "../MiniNews/MiniNews";
import {
  EntertainmentNews,
  BusinessNews,
  TVNews,
  SportsNews,
} from "./MiniNewsData";
import { MainHeadlines } from "./MainHeadlinesData";

export class Content extends Component {
  render() {
    return (
      <div className="content-main-container">
        <div className="content-route-text">{"News >> Latest News"}</div>
        <Title />
        <div className="content-news-container">
          <div className="content-left-div">
            {MainHeadlines.map((item) => {
              return <NewsCard key={item.id} data={item} />;
            })}
          </div>

          <div className="content-right-div">
            <MostPopular />
            <MiniNews data={EntertainmentNews} />
            <MiniNews data={BusinessNews} />
            <MiniNews data={TVNews} />
            <MiniNews data={SportsNews} />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
