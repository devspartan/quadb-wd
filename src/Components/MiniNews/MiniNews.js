import React from "react";
import MiniNewsCard from "./MiniNewsCard";
import MiniHead from "../MostPopular/MiniHead";

function MiniNews(props) {
    const {heading, dataArr} = props.data
  return (
    <div className='mini-news-main-container'>
      <a>
        <MiniHead heading={heading} />
      </a>
      {dataArr.map((item) => {
        return <MiniNewsCard img={item.img} headline={item.headline}  />;
      })}
    </div>
  );
}

export default MiniNews;
