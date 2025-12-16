import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ComparisonSlider from "../../components/comparisonSlider/ComparisonSlider";
import "./ProjectDetail.css";
import { bigProjects, mobileApps } from "../../portfolio";
import { Fade } from "react-reveal";
import { Redirect } from "react-router-dom";

class ProjectDetail extends Component {
  render() {
    const theme = this.props.theme;
    const projectId = this.props.projectId;

    // Find the project by ID in both bigProjects and mobileApps
    let project = bigProjects.projects.find((p) => p.id === projectId);
    if (!project && mobileApps && mobileApps.projects) {
      project = mobileApps.projects.find((p) => p.id === projectId);
    }

    // If project not found, redirect to projects page
    if (!project) {
      return <Redirect to="/projects" />;
    }

    return (
      <div className="project-detail-main">
        <Header theme={theme} />
        <div className="project-detail-content">
          <Fade bottom duration={1000} distance="20px">
            <div>
              {/* Back Button */}
              <button
                className="back-button"
                onClick={() => window.history.back()}
                style={{ color: theme.text }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                Projects
              </button>

              {/* Project Header */}
              <div className="project-detail-header">
                <div className="project-avatar">
                  <img
                    src={require("../../assets/images/my_image.png")}
                    alt="Koushik Panda"
                  />
                </div>
                <div className="project-header-info">
                  <h1 className="project-name" style={{ color: theme.text }}>
                    {"Koushik Panda"}
                  </h1>
                  <div
                    className="project-header-meta"
                    style={{ color: theme.secondaryText }}
                  >
                    {project.duration} /{" "}
                    <span className="level-indicator">●</span> {project.level}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                {project.footerLink && project.footerLink.length > 0 && (
                  <a
                    href={project.footerLink[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-demo-button"
                  >
                    Live Demo
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
                {project.codebaseConfidential && (
                  <div className="confidential-badge">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginRight: "8px" }}
                    >
                      <path d="M8 1.5C8 1.5 2.5 3.5 2.5 8c0 4.5 5.5 6.5 5.5 6.5s5.5-2 5.5-6.5c0-4.5-5.5-6.5-5.5-6.5z" />
                      <rect x="6" y="7" width="4" height="3" rx="0.5" />
                      <path d="M6.5 7V5.5a1.5 1.5 0 0 1 3 0V7" />
                    </svg>
                    Codebase is confidential
                  </div>
                )}
              </div>

              {/* Case Study Title */}
              <h2 className="case-study-title" style={{ color: theme.text }}>
                Case Study: {project.projectName} –{" "}
                {project.projectDesc.split(".")[0]}
              </h2>

              {/* Project at a Glance */}
              <div className="detail-section">
                <h3 className="section-title" style={{ color: theme.text }}>
                  Project at a Glance
                </h3>
                <ul className="glance-list" style={{ color: theme.text }}>
                  <li>
                    <strong>Role:</strong> {project.role}
                  </li>
                  <li>
                    <strong>Duration:</strong> {project.projectDuration}
                  </li>
                  <li>
                    <strong>Stack:</strong> {project.stack}
                  </li>
                  <li>
                    <strong>Lines of Code:</strong> {project.linesOfCode}
                  </li>
                  <li>
                    <strong>Team:</strong> {project.team}
                  </li>
                </ul>
              </div>

              {/* My Role & Impact */}
              {project.roleImpact && project.roleImpact.length > 0 && (
                <div className="detail-section">
                  <h3 className="section-title" style={{ color: theme.text }}>
                    My Role & Impact
                  </h3>
                  <ul className="impact-list" style={{ color: theme.text }}>
                    {project.roleImpact.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Visual Comparison Slider */}
              {project.visualComparison && (
                <div className="detail-section">
                  <h3 className="section-title" style={{ color: theme.text }}>
                    Visual & Code Comparison
                  </h3>
                  <ComparisonSlider
                    beforeImage={project.visualComparison.before}
                    afterImage={project.visualComparison.after}
                    theme={theme}
                  />
                </div>
              )}

              {/* Second Visual Comparison Slider */}
              {project.visualComparison2 && (
                <div className="detail-section">
                  <h3 className="section-title" style={{ color: theme.text }}>
                    Responsive Design Comparison
                  </h3>
                  <ComparisonSlider
                    beforeImage={project.visualComparison2.before}
                    afterImage={project.visualComparison2.after}
                    theme={theme}
                  />
                </div>
              )}

              {/* Third Visual Comparison Slider */}
              {project.visualComparison3 && (
                <div className="detail-section">
                  <h3 className="section-title" style={{ color: theme.text }}>
                    Code & Commit Comparison
                  </h3>
                  <ComparisonSlider
                    beforeImage={project.visualComparison3.before}
                    afterImage={project.visualComparison3.after}
                    theme={theme}
                    objectFit="cover"
                  />
                </div>
              )}

              {/* Key Features */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div className="detail-section">
                  <h3 className="section-title" style={{ color: theme.text }}>
                    Key Features
                  </h3>
                  <ul className="features-list" style={{ color: theme.text }}>
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index}>
                        <strong>{feature.title}:</strong> {feature.description}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* App Screenshots */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="detail-section">
                  <h3 className="section-title" style={{ color: theme.text }}>
                    App Screenshots
                  </h3>
                  <div className="screenshots-grid">
                    {project.screenshots.map((screenshot, index) => (
                      <div key={index} className="screenshot-item">
                        <img
                          src={screenshot}
                          alt={`App screenshot ${index + 1}`}
                          className="screenshot-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Highlights */}
              {project.techHighlights && project.techHighlights.length > 0 && (
                <div className="detail-section">
                  <h3 className="section-title" style={{ color: theme.text }}>
                    Tech Highlights
                  </h3>
                  <ul className="tech-list" style={{ color: theme.text }}>
                    {project.techHighlights.map((tech, index) => (
                      <li key={index}>
                        <strong>{tech.tech}</strong> {tech.description}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges & Solutions */}
              {project.challenges && project.challenges.length > 0 && (
                <div className="detail-section">
                  <h3 className="section-title" style={{ color: theme.text }}>
                    Challenges & Solutions
                  </h3>
                  <ul className="challenges-list" style={{ color: theme.text }}>
                    {project.challenges.map((item, index) => (
                      <li key={index}>
                        <strong>{item.challenge}:</strong> {item.solution}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Results & Impact */}
              {project.results && project.results.length > 0 && (
                <div className="detail-section">
                  <h3 className="section-title" style={{ color: theme.text }}>
                    Results & Impact
                  </h3>
                  <ul className="results-list" style={{ color: theme.text }}>
                    {project.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* What I Learned */}
              {project.learnings && project.learnings.length > 0 && (
                <div className="detail-section">
                  <h3 className="section-title" style={{ color: theme.text }}>
                    What I Learned
                  </h3>
                  <ul className="learnings-list" style={{ color: theme.text }}>
                    {project.learnings.map((learning, index) => (
                      <li key={index}>{learning}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Links */}
              {project.footerLink && project.footerLink.length > 0 && (
                <div className="detail-section">
                  <h3 className="section-title" style={{ color: theme.text }}>
                    Links
                  </h3>
                  <ul className="links-list">
                    {project.footerLink.map((link, index) => (
                      <li key={index}>
                        <strong>{link.name}:</strong>{" "}
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#3b82f6" }}
                        >
                          {link.url}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Note */}
              {project.codebaseConfidential && (
                <div
                  className="note-section"
                  style={{ color: theme.secondaryText }}
                >
                  <strong>Note:</strong> The codebase for this project is
                  confidential and not publicly available.
                </div>
              )}
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default ProjectDetail;
