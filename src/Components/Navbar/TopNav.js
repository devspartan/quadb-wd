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
  FaFacebookF,
} from "react-icons/all";

function TopNav() {
  return (
    <div className="topnav-main-container">
      <div className="topnav-left">
        <a>English</a>
        <a>Epaper</a>
        <a style={{borderRight: "none"}}>GadgetsNow</a>
      </div>
      <div className="topnav-right">
        <div>
          <FaCrown style={{ color: "rgb(252,199,57)", fontSize: "18px" }} />
          <span>Visit TOI dialy & earn TimesPoints!</span>
        </div>
        <div>sign in</div>

        <div className="topnav-right-icons" style={{margin: "auto 0"}}>
          <BiBell />
          <FaTwitter />
          <FaFacebookF />
          <BiWifi />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
