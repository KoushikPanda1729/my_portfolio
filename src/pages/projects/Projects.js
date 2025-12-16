import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import BigProjectCard from "../../components/bigProjectCard/BigProjectCard";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader, bigProjects, mobileApps } from "../../portfolio.js";
import "./Projects.css";

class Projects extends Component {
  state = {
    showAll: false,
  };

  handleProjectClick = (projectId) => {
    this.props.history.push(`/project/${projectId}`);
  };

  toggleShowAll = () => {
    this.setState({ showAll: !this.state.showAll });
  };

  render() {
    const theme = this.props.theme;
    const { showAll } = this.state;

    // Default projects to show: Formula Shop, Evtaar, Frovo
    const defaultProjectIds = ["formula-ecommerce", "evtaar", "frovo"];

    // Desired order for all projects: Formula, Frovo, Evtaar, then others
    const allProjectsOrder = [
      "formula-ecommerce",
      "frovo",
      "evtaar",
      "bunnieducation",
      "young-guru-academy",
      "talk2partners",
    ];

    const projectsToShow = showAll
      ? bigProjects.projects.sort((a, b) => {
          const indexA = allProjectsOrder.indexOf(a.id);
          const indexB = allProjectsOrder.indexOf(b.id);
          // If project not in order list, put it at the end
          const orderA = indexA === -1 ? allProjectsOrder.length : indexA;
          const orderB = indexB === -1 ? allProjectsOrder.length : indexB;
          return orderA - orderB;
        })
      : bigProjects.projects
          .filter((project) => defaultProjectIds.includes(project.id))
          .sort((a, b) => {
            return (
              defaultProjectIds.indexOf(a.id) - defaultProjectIds.indexOf(b.id)
            );
          });

    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
              </div>
            </div>
          </Fade>
        </div>

        {/* Big Projects Grid */}
        {bigProjects.projects && bigProjects.projects.length > 0 && (
          <>
            <div className="big-projects-grid">
              {projectsToShow.map((project, index) => (
                <BigProjectCard
                  key={index}
                  project={project}
                  theme={theme}
                  onClick={this.handleProjectClick}
                />
              ))}
            </div>

            {/* View All / Show Less Button */}
            {bigProjects.projects.length > 3 && (
              <div className="view-all-container">
                <button
                  className="view-all-button"
                  onClick={this.toggleShowAll}
                  style={{ color: theme.text }}
                >
                  {showAll ? "Show Less" : "View All Projects"}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    style={{
                      marginLeft: "8px",
                      transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}

        {/* Mobile Apps Section */}
        {mobileApps.projects && mobileApps.projects.length > 0 && (
          <>
            <div className="basic-projects" style={{ marginTop: "80px" }}>
              <Fade bottom duration={2000} distance="40px">
                <div className="projects-heading-div">
                  <div className="projects-heading-text-div">
                    <h1
                      className="projects-heading-text"
                      style={{ color: theme.text }}
                    >
                      {mobileApps.title}
                    </h1>
                    <p
                      className="projects-heading-subtitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {mobileApps.subtitle}
                    </p>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="big-projects-grid">
              {mobileApps.projects.map((project, index) => (
                <BigProjectCard
                  key={index}
                  project={project}
                  theme={theme}
                  onClick={this.handleProjectClick}
                />
              ))}
            </div>
          </>
        )}

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
