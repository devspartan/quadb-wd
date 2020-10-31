import React, { useState } from "react";
import MiniDesc from "./MiniDesc";
import MiniHead from "./MiniHead";
import { MostPopularNewsData } from "./MostPopularNewsData";

function MostPopular() {
  const [activeCount, setActiveCount] = useState(1);

  const filterNews = [
    {
      id: 1,
      url: "#",
      text: "shared",
    },
    {
      id: 2,
      url: "#",
      text: "commented",
    },
    {
      id: 3,
      url: "#",
      text: "read",
    },
    {
      id: 4,
      url: "#",
      text: "trending",
    },
  ];

  return (
    <div className="most-popular-main-div">
      <MiniHead heading={"MOST POPULAR"} headStyle={{ borderBottom: "none" }} />

      <div className="most-popular-button">
        {filterNews.map((item) => {
          return (
            <a
              href={item.url}
              onClick={() => setActiveCount(item.id)}
              id={activeCount == item.id ? "most-popular-button-active" : null}
            >
              {item.text}
            </a>
          );
        })}
      </div>

      <div className='most-popular-news-cont'>
      {MostPopularNewsData[activeCount-1].map((item) => {
        return <MiniDesc description={item.text} />;
      })}
      </div>

      <div className="most-popular-see-all">
        <div></div>
        <a>see all most shared stories</a>
        <div></div>
      </div>
    </div>
  );
}

export default MostPopular;
