import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class SoftwareSkill extends React.Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {this.props.logos.map((logo) => {
              return (
                <li
                  key={logo.skillName}
                  className="software-skill-inline"
                  name={logo.skillName}
                >
                  <div className="skill-badge">
                    <div className="skill-icon-wrapper">
                      {logo.fontAwesomeClassname && (
                        <span
                          className="iconify skill-icon"
                          data-icon={logo.fontAwesomeClassname}
                          style={logo.style}
                          data-inline="false"
                        ></span>
                      )}
                      {!logo.fontAwesomeClassname && logo.imageSrc && (
                        <img
                          className="skill-image"
                          style={logo.style}
                          src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                          alt={logo.skillName}
                        />
                      )}
                    </div>
                    <p className="skill-name">{logo.skillName}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;
