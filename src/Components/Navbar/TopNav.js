import React from "react";
import "./Navbar.css";
import {
  FaYoutube,
  BiWifi,
  FaFacebook,
  FaTwitter,
  BiNotification,
  BiBell,
  FaCrown,
} from "react-icons/all";

function TopNav() {
  return (
    <div className="topnav-main-container">
      <div className="topnav-left">
        <span>English</span>
        <span>Epaper</span>
        <span>GadgetsNow</span>
      </div>
      <div className="topnav-right">
        <div>
          <FaCrown style={{ color: "rgb(252,199,57)", fontSize: "18px" }} />
          <span>Visit TOI dialy & earn TimesPoints!</span>
        </div>
        <div>sign in</div>

        <div className="topnav-right-icons">
          <BiBell />
          <FaTwitter />
          <FaFacebook />
          <BiWifi />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
