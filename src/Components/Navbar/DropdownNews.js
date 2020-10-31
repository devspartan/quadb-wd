import React, { useState } from "react";
import MiniNewsCard from "../MiniNews/MiniNewsCard";
import { DropDownData } from "./DropDownNewsData";

// ddn = drop-down-news
function DropdownNews() {
  const [activeTag, setActiveTag] = useState(0);
  console.log(DropDownData[activeTag]);
  return (
    <div className="ddn-container">
      <div className="ddn-left">
        {DropDownData.map((item) => {
          return (
            <a href="#" onMouseEnter={() => setActiveTag(item.id)}>
              {item.tag}
            </a>
          );
        })}
      </div>
      <div className="ddn-right">
        <MiniNewsCard
          img={DropDownData[activeTag] ? DropDownData[activeTag].img : null}
          headline={
            DropDownData[activeTag] ? DropDownData[activeTag].headlines : null
          }
          MiniNewsCardStyle={{ paddingTop: "0px" }}
        />
        <ul className='ddn-right-desc'>
          {DropDownData[activeTag]
            ? DropDownData[activeTag].description.map((item) => {
                return <li><a>{item}</a></li>;
              })
            : null}
        </ul>
      </div>
    </div>
  );
}

export default DropdownNews;
