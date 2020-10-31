import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import "./Navbar.css";

function SearchComp({ height, opacity, onClose, searchRef, bottom, top }) {
  return (
    <div
      ref={searchRef}
      className="search-main-comp"
      style={{
        height: `${height}px`,
        zIndex: `${height !== 0 ? 20 : 0}`,
        bottom: bottom,
        top: top,
      }}
    >
      <div style={{ opacity: opacity }}>
        <form className="search-form">
          <input type="text"></input>
          <input type="submit" value="Search"></input>
        </form>
        <div className="cross-icon" onClick={onClose}>
          <ImCross fontSize={22} />
        </div>
      </div>
    </div>
  );
}

export default SearchComp;
