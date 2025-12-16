import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees, competitiveSites } from "../../portfolio";
import { Fade } from "react-reveal";

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-accord">
        <div className="education-cards-div">
          {degrees.degrees.map((degree, index) => {
            return <DegreeCard key={index} degree={degree} theme={theme} />;
          })}
        </div>

        {/* LeetCode Section at Bottom */}
        <Fade bottom duration={1500} distance="20px">
          <div className="competitive-section">
            <h2 className="competitive-header" style={{ color: theme.text }}>
              Coding Profiles
            </h2>
            <div className="competitive-sites-wrapper">
              {competitiveSites.competitiveSites.map((site, index) => (
                <a
                  key={index}
                  href={site.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="competitive-site-card"
                  style={{
                    backgroundColor: theme.imageDark,
                    border: `2px solid ${site.style.color}20`,
                  }}
                >
                  <div
                    className="competitive-icon-wrapper"
                    style={{ backgroundColor: `${site.style.color}15` }}
                  >
                    <span
                      className="iconify"
                      data-icon={site.iconifyClassname}
                      style={{ color: site.style.color, fontSize: "48px" }}
                      data-inline="false"
                    ></span>
                  </div>
                  <h3
                    className="competitive-site-name"
                    style={{ color: theme.text }}
                  >
                    {site.siteName}
                  </h3>
                  <p
                    className="competitive-visit-text"
                    style={{ color: site.style.color }}
                  >
                    View Profile →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Educations;
