import React, { useState } from "react";
import "./Navbar.css";
import {
  FaYoutube,
  BiWifi,
  FaTwitter,
  BiBell,
  FaCrown,
  FaFacebookF,
  MdArrowDropDown,
} from "react-icons/all";

function TopNav() {
  const [dropdownActive, setDropdownActive] = useState(false);

  return (
    <div className="topnav-main-container">
      <div className="topnav-content-cont">
        <div className="topnav-left">
          <div
            onMouseEnter={() => setDropdownActive(true)}
            onMouseLeave={() => setDropdownActive(false)}
            className="lang-drop-down"
          >
            <a
             href="#"  className="topnav-left-a"
              style={{ display: "flex", paddingTop: "0px", paddingBottom: "0px" }}
            >
              English{" "}
              <MdArrowDropDown
                className={`drop-down-icon ${
                  dropdownActive ? "drop-down-active" : null
                }`}
              />
            </a>
            <div className="topnav-languages-div">
              <a href="#" >हिन्दी</a>
              <a href="#" >मराठी</a>
              <a href="#" >বাংলা</a>
              <a href="#" >ગુજરાતી</a>
              <a href="#" >ಕನ್ನಡ</a>
              <a href="#"  style={{ paddingTop: "0px", paddingBottom: "0px" }}>தமிழ்</a>
              <a href="#"  style={{ paddingTop: "0px", paddingBottom: "0px" }}>తెలుగు</a>
              <a href="#" >മലയാളം</a>
            </div>
          </div>
          <a href="#" className="topnav-left-a">Epaper</a>
          <a href="#" className="topnav-left-a" style={{ borderRight: "none" }}>
            GadgetsNow
          </a>
        </div>

        <div className="topnav-right">
          <div>
            <FaCrown style={{ color: "rgb(252,199,57)", fontSize: "18px" }} />
            <span>
              <a href="#" >Visit TOI dialy & earn TimesPoints!</a>
            </span>
          </div>
          <div>
            <a href="#" >sign in</a>
          </div>

          <div className="topnav-right-icons" style={{ margin: "auto 0" }}>
            <BiBell />
            <FaTwitter />
            <FaFacebookF />
            <BiWifi />
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
