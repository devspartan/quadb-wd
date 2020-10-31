import React, { useState } from "react";
import TopNav from "./TopNav";
import NavbarBanner from "./NavbarBanner";
import "./Navbar.css";

function Navhandle() {
  return (
    <div>
      <TopNav />
      <div className="navbar-handle">
        <NavbarBanner />
      </div>
    </div>
  );
}

export default Navhandle;
