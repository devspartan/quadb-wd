import React from "react";
import "./Content";

function NewsComp(props) {
  const { img, headline, description } = props.data;

  return (
    <div className="newscomp-main-container">
      <a>
        <img src={img}></img>
      </a>

      <span style={{ display: "block" }}>
        <a>{headline}</a>
      </span>
      <span id="desc">
        <p>{description}</p>
      </span>
    </div>
  );
}

export default NewsComp;
