import React from "react";
import { BiCut } from "react-icons/bi";
import { CgCross } from "react-icons/cg";
import { FaCut } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "./Navbar.css";

function SearchComp() {
  return (
    <div className="search-main-comp">
      <div>
        <form className='search-form' >
          <input type='text' ></input>
          <input type='submit' value='Search'></input>
        </form>
        <div className='cross-icon'>
        <ImCross fontSize={22} />
        </div>
      </div>
    </div>
  );
}

export default SearchComp;
