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
  MdArrowDropUp,
} from "react-icons/all";

function TopNav() {
  const [dropdownActive, setDropdownActive] = useState(false);

  return (
    <div className="topnav-main-container">
      <div className="topnav-left">
        <div onMouseEnter={() => setDropdownActive(true)} onMouseLeave={() => setDropdownActive(false)} className='lang-drop-down'>
          <a className="topnav-left-a" style={{display: "flex"}}>
            English <MdArrowDropDown className={`drop-down-icon ${dropdownActive ? "drop-down-active" : null}`}/>
          </a>
          <div className="topnav-languages-div">
            <a>हिन्दी</a>
            <a>मराठी</a>
            <a>বাংলা</a>
            <a>ગુજરાતી</a>
            <a>ಕನ್ನಡ</a>
            <a style={{paddingTop: "0px", paddingBottom: "0px"}}>தமிழ்</a>
            <a style={{paddingTop: "0px", paddingBottom: "0px"}}>తెలుగు</a>
            <a>മലയാളം</a>
          </div>
        </div>
        <a className="topnav-left-a">Epaper</a>
        <a className="topnav-left-a" style={{ borderRight: "none" }}>GadgetsNow</a>
      </div>

      <div className="topnav-right">
        <div>
          <FaCrown style={{ color: "rgb(252,199,57)", fontSize: "18px" }} />
          <span>
            <a>Visit TOI dialy & earn TimesPoints!</a>
          </span>
        </div>
        <div>
          <a>sign in</a>
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
  );
}

export default TopNav;
