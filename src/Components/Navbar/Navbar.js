import React, { Component, useState } from "react";
import { BiSearch, BiSearchAlt2, HiHome } from "react-icons/all";
import "./Navbar.css";
import SearchComp from "./SearchComp";

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.searchRef = React.createRef(null);

    this.state = {
      hover: false,
      active: false,
      activeCount: 1,
      height: 0,
      opacity: 0,
      top: "0",
      bottom: "0",
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

  handleScroll = () => {
    let scroll = window.scrollY;

    if (scroll < 50) {
      this.setState({
        top: "unset",
        bottom: "0",
      });

      return;
    }

    this.setState({
      top: "0",
      bottom: "unset",
    });
  };

  componentDidMount() {
    console.log(this.searchRef.current.getBoundingClientRect().y);
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div className="navbar-main-container" ref={this.searchRef}>
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
          <div
            className="home-icon"
            style={{
              opacity: this.state.opacity === 1 ? 0 : 1,
            }}
            onClick={() => {
              this.setState({
                height: 120,
                opacity: 1,
              });
            }}
          >
            <BiSearchAlt2 fontSize={22} />
          </div>
        </div>
        <SearchComp
          bottom={this.state.bottom}
          top={this.state.top}
          height={this.state.height}
          opacity={this.state.opacity}
          onClose={() => {
            this.setState({
              height: 0,
              opacity: 0,
            });
          }}
        />
      </div>
    );
  }
}

export default Navbar;
