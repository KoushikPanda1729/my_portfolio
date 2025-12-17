import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./ResumePage.css";
import { Fade } from "react-reveal";

class ResumePage extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="resume-page-main">
        <Header theme={theme} />
        <div className="resume-page-content">
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
                Back
              </button>

              {/* Page Title */}
              <h1 className="resume-page-title" style={{ color: theme.text }}>
                Resume Preview
              </h1>

              {/* Download Button */}
              <div className="resume-actions">
                <a
                  href="/my_resume.pdf"
                  download="Koushik_Panda_Resume.pdf"
                  className="resume-download-btn"
                >
                  <i className="fas fa-download"></i> Download PDF
                </a>
                <a
                  href="/my_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-open-btn"
                >
                  <i className="fas fa-external-link-alt"></i> Open in New Tab
                </a>
              </div>

              {/* PDF Viewer */}
              <div className="resume-viewer-container">
                <iframe
                  src="/my_resume.pdf"
                  title="Resume Preview"
                  className="resume-iframe"
                  style={{ border: `2px solid ${theme.text}20` }}
                />
              </div>

              {/* Mobile Message */}
              <div className="mobile-message" style={{ color: theme.secondaryText }}>
                <p>
                  <i className="fas fa-mobile-alt"></i> On mobile? Use the download button above to view the full resume.
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default ResumePage;
