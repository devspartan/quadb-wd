import React from "react";

function FooterLinkCard() {
  const liksDT = [
    "The Economic Times",
    "Hindi Economic Times",
    "Navbharat Times",
    "Maharashtra Times",
    "Vijaya Karnataka",
    "Telugu Samayam",
    "Tamil Samayam",
    "Malayalam Samayam",
    "Ei Samay",
    "I am Gujarat",
    "Times Now",
    "Times Now Hindi",
    "TimesPoints",
    "Indiatimes",
    "Brand Capital",
    "Education Times",
    "Times Food",
    "Miss Kyra",
    "Mumbai Mirror",
    "Pune Mirror",
    "Ahmedabad Mirror",
    "Bangalore Mirror",
    "MX Player",
    "Hindi Podcast",
    "Bengali Podcast",
    "MX ShareKaro",
   
  ];

  return (
    <div className="footer-card-main-div">
      <div className="footer-card-heading">
        <div style={{ width: "10px" }}></div>
        <h2>OTHER TIMES GROUP NEWS SITES</h2>
        <div></div>
      </div>
      <div className="footer-links-wrapper">
        {liksDT.map((item) => {
          return <a>{item}</a>;
        })}
      </div>
    </div>
  );
}

export default FooterLinkCard;
