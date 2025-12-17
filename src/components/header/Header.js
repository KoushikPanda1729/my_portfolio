import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    return (
      <>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-backdrop" htmlFor="menu-btn"></label>
        <Fade top duration={1000} distance="20px">
          <SeoHeader />
        </Fade>
        <div className="header-container">
          <div className="header-wrapper">
            <header className="header">
              <NavLink to={link} tag={Link} className="logo">
                <span style={{ color: theme.text }}> &lt;</span>
                <span className="logo-name" style={{ color: theme.text }}>
                  {greeting.logo_name}
                </span>
                <span style={{ color: theme.text }}>/&gt;</span>
              </NavLink>
              <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon"></span>
              </label>
            </header>
          </div>
          <div className="menu-wrapper">
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li className="menu-close">
                <label htmlFor="menu-btn" style={{ cursor: 'pointer', fontSize: '30px', padding: '20px', display: 'block', textAlign: 'right', color: theme.text }}>
                  &times;
                </label>
              </li>
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/opensource"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Open Source
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/articles"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Article
                </NavLink>
              </li>
          </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
