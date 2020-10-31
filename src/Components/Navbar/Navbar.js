import React, { Component } from "react";
import { HiHome } from "react-icons/hi";
import "./Navbar.css";

export class Navbar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hover: false
        }
    }
    
  links = [
    "latest news",
    "most shared",
    "most read",
    "most commented",
    "delhi elections",
    "bihar elections",
  ];

  render() {
    return (
      <div className="navbar-main-container">
        <div className="links-container">
          <div>
            <HiHome className="home-icon" />
          </div>
          {this.links.map((item) => {
            return <a href="#">{item}</a>;
          })}
        </div>
      </div>
    );
  }
}

export default Navbar;
