import React, { Component } from "react";
import "./BigProjectCard.css";
import { Fade } from "react-reveal";

class BigProjectCard extends Component {
  render() {
    const { project, theme, onClick } = this.props;

    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="big-project-card">
          {/* Project Image */}
          {project.image && (
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.projectName}
                className="project-image"
              />
              {project.workInProgress && (
                <div className="wip-badge">🚧 Work in Progress</div>
              )}
              {project.footerLink && project.footerLink.length > 0 && (
                <a
                  href={project.footerLink[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-button-overlay"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    style={{ marginLeft: "6px" }}
                  >
                    <line x1="4" y1="12" x2="12" y2="4" />
                    <polyline points="7,4 12,4 12,9" />
                  </svg>
                </a>
              )}
            </div>
          )}

          <div className="big-project-card-content">
            {/* Project Meta */}
            <div className="project-meta-row">
              <div className="project-date-wrapper">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  style={{ marginRight: "6px" }}
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                <span className="project-date">{project.duration}</span>
              </div>
              <span className="project-level-badge">{project.level}</span>
            </div>

            {/* Project Title */}
            <h2 className="project-title">{project.projectName}</h2>

            {/* Project Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="project-tag"
                    style={{
                      backgroundColor:
                        tag === "FRONTEND"
                          ? "#dbeafe"
                          : tag === "BACKEND"
                          ? "#d1fae5"
                          : tag === "DEVOPS"
                          ? "#fef3c7"
                          : "#ede9fe",
                      color:
                        tag === "FRONTEND"
                          ? "#1e40af"
                          : tag === "BACKEND"
                          ? "#065f46"
                          : tag === "DEVOPS"
                          ? "#92400e"
                          : "#5b21b6",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Project Description */}
            <p className="project-description">{project.projectDesc}</p>

            {/* Codebase Confidential Badge */}
            {project.codebaseConfidential && (
              <div className="codebase-badge">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "6px" }}
                >
                  <path d="M8 1.5C8 1.5 2.5 3.5 2.5 8c0 4.5 5.5 6.5 5.5 6.5s5.5-2 5.5-6.5c0-4.5-5.5-6.5-5.5-6.5z" />
                  <rect x="6" y="7" width="4" height="3" rx="0.5" />
                  <path d="M6.5 7V5.5a1.5 1.5 0 0 1 3 0V7" />
                </svg>
                Codebase is confidential
              </div>
            )}

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* View Detail Link */}
            <div
              className="view-detail-link"
              onClick={() => onClick(project.id)}
            >
              <span style={{ color: "#3b82f6" }}>View full detail</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{ marginLeft: "6px" }}
              >
                <line x1="4" y1="12" x2="12" y2="4" />
                <polyline points="7,4 12,4 12,9" />
              </svg>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default BigProjectCard;
