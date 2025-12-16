import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade } from "react-reveal";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;

    return (
      <Fade bottom duration={1000} distance="20px">
        <a
          href={degree.website_link}
          target="_blank"
          rel="noopener noreferrer"
          className="degree-card-link"
          style={{ textDecoration: "none" }}
        >
          <div className="degree-card-modern">
            {/* Logo and Header */}
            <div className="degree-card-header">
              <div className="degree-logo-wrapper">
                {degree.logo_path && (
                  <img
                    className="degree-logo"
                    src={require(`../../assets/images/${degree.logo_path}`)}
                    alt={degree.alt_name}
                  />
                )}
              </div>

              <div className="degree-header-content">
                <h2
                  className="degree-program-title"
                  style={{ color: theme.text }}
                >
                  {degree.subtitle}
                  {degree.title && (
                    <span
                      className="degree-institution-name"
                      style={{ color: theme.secondaryText }}
                    >
                      {" "}
                      at {degree.title}
                    </span>
                  )}
                </h2>

                <div className="degree-meta">
                  <span
                    className="degree-meta-item"
                    style={{ color: theme.secondaryText }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      style={{ marginRight: "6px" }}
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg>
                    {degree.duration}
                  </span>
                  {degree.location && (
                    <span
                      className="degree-meta-item"
                      style={{ color: theme.secondaryText }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        style={{ marginRight: "6px" }}
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                      {degree.location}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Descriptions */}
            {degree.descriptions && degree.descriptions.length > 0 && (
              <div className="degree-description">
                {degree.descriptions.map((sentence, idx) => (
                  <p key={idx} style={{ color: "#000" }}>
                    {sentence.replace("⚡ ", "")}
                  </p>
                ))}
              </div>
            )}

            {/* Skills/Subjects */}
            {degree.skills && degree.skills.length > 0 && (
              <div className="degree-skills">
                {degree.skills.map((skill, idx) => (
                  <span key={idx}>
                    <span style={{ color: "#000" }}>{skill}</span>
                    {idx < degree.skills.length - 1 && (
                      <span
                        className="skill-separator"
                        style={{ color: "#000" }}
                      >
                        {" "}
                        •{" "}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            )}

            {/* Achievements */}
            {degree.achievements && degree.achievements.length > 0 && (
              <div className="degree-achievements">
                <ul style={{ color: "#000" }}>
                  {degree.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </a>
      </Fade>
    );
  }
}

export default DegreeCard;
