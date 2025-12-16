import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;

    return (
      <Fade bottom duration={1000} distance="20px">
        <a
          href={experience["company_url"]}
          target="_blank"
          rel="noopener noreferrer"
          className="experience-card-link"
          style={{ textDecoration: "none" }}
        >
          <div className="experience-card-modern">
            {/* Logo and Header */}
            <div className="experience-card-header">
              <div className="experience-logo-wrapper">
                <img
                  className="experience-logo"
                  src={require(`../../assets/images/${experience["logo_path"]}`)}
                  alt={experience["company"]}
                />
              </div>

              <div className="experience-header-content">
                <h2
                  className="experience-job-title"
                  style={{ color: theme.text }}
                >
                  {experience["title"]}
                  {experience["company"] && (
                    <span
                      className="experience-company-name"
                      style={{ color: theme.secondaryText }}
                    >
                      {" "}
                      at {experience["company"]}
                    </span>
                  )}
                </h2>

                <div className="experience-meta">
                  <span
                    className="experience-meta-item"
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
                    {experience["duration"]}
                  </span>
                  <span
                    className="experience-meta-item"
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
                    {experience["location"]}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="experience-description">
              <p style={{ color: "#000" }}>{experience["description"]}</p>
            </div>

            {/* Tech Stack */}
            {experience["techStack"] && experience["techStack"].length > 0 && (
              <div className="experience-tech-stack">
                {experience["techStack"].map((tech, idx) => (
                  <span key={idx}>
                    <span style={{ color: "#000" }}>{tech}</span>
                    {idx < experience["techStack"].length - 1 && (
                      <span
                        className="tech-separator"
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
            {experience["achievements"] &&
              experience["achievements"].length > 0 && (
                <div className="experience-achievements">
                  <ul style={{ color: "#000" }}>
                    {experience["achievements"].map((achievement, idx) => (
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

export default ExperienceCard;
