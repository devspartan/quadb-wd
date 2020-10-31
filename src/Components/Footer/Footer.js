import React from "react";
import "./Footer.css";
import FooterLinkCard from "./FooterLinkCard";
import {
  OtherTimes,
  TopTrends,
  TrendingTopics,
  Services,
  LivingAndEntertainment,
  PopularCategories,
  HotOnTheWeb,
} from "./FooterLinksData";

function Footer() {
  return (
    <div className="footer-main-container">
      <div className="footer-wrapper">
        <div>
          <FooterLinkCard data={OtherTimes} />
          <FooterLinkCard data={LivingAndEntertainment} />
          <FooterLinkCard data={TopTrends} />
        </div>
        <div>
          <FooterLinkCard data={Services} />
          <FooterLinkCard data={PopularCategories} />
          <FooterLinkCard data={HotOnTheWeb} />
          <FooterLinkCard data={TrendingTopics} />
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          Copyright © 2020 Bennett, Coleman & Co. Ltd. All rights reserved. For
          reprint rights: 
        </p>
        <a> Times Syndication Service</a>
      </div>
    </div>
  );
}

export default Footer;
