import React from "react";

function FooterLinkCard(props) {
  const { heading, linksArr } = props.data;

  return (
    <div className="footer-card-main-div">
      <div className="footer-card-heading">
        <div style={{ width: "10px" }}></div>
        <h2>{heading}</h2>
        <div></div>
      </div>
      <div className="footer-links-wrapper">
        {linksArr.map((item) => {
          return <a key={item.id}>{item.text}</a>;
        })}
      </div>
    </div>
  );
}

export default FooterLinkCard;
