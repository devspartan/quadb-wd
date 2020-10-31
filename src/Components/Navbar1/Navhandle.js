import React, {useState} from "react";
import TopNav from "./TopNav";
import NavbarBanner from "./NavbarBanner";
import Navbar from "./Navbar";
import SearchComp from "./SearchComp";
import './Navbar.css'


function Navhandle() {
  const [active, setActive] = useState(false);
  return (
    <div>
      <TopNav />
      <div className='navbar-handle'>
        <NavbarBanner />
        <Navbar />
        <SearchComp />
      </div>
    </div>
  );
}

export default Navhandle;
