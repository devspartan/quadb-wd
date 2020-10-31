import React, { Component } from "react";
import { BiSearch, BiSearchAlt2, HiHome } from "react-icons/all";
import "./Navbar.css";

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      active: false,
      activeCount: 1,
    };
  }

  navLinks = [
    {
      id: 1,
      url: "#",
      text: "latest news",
    },
    {
      id: 2,
      url: "#",
      text: "most shared",
    },

    {
      id: 3,
      url: "#",
      text: "most read",
    },
    {
      id: 4,
      url: "#",
      text: "most commented",
    },
    {
      id: 5,
      url: "#",
      text: "delhi elections",
    },
    {
      id: 6,
      url: "#",
      text: "bihar elections",
    },
  ];

  render() {
    return (
      <div className="navbar-main-container">
        <div className="navbar-content">
          <div className="navbar-links-container">
            <div>
              <HiHome className="home-icon" />
            </div>
            {this.navLinks.map((item) => {
              return (
                <a
                  href={item.url}
                  onClick={() => this.setState({ activeCount: item.id })}
                  id={this.state.activeCount == item.id ? "active-link" : null}
                >
                  {item.text}
                </a>
              );
            })}
          </div>
          <div className='home-icon'>
            <BiSearchAlt2 fontSize={22} />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;