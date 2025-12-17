import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import { Link } from "react-router-dom";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.designation && (
                <div className="greeting-designation-wrapper">
                  <a
                    href="https://www.evtaar.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-card-link"
                  >
                    <div className="linkedin-card">
                      <div className="linkedin-logo">
                        <img
                          src={require("../../assets/images/evtaar_logo.jpeg")}
                          alt="Evtaar Logo"
                        />
                      </div>
                      <div className="linkedin-content">
                        <h2
                          className="linkedin-title"
                          style={{ color: theme.text }}
                        >
                          Software Engineer @Evtaar
                        </h2>
                        <p
                          className="linkedin-company"
                          style={{ color: theme.text }}
                        >
                          Evtaar · Full-time
                        </p>
                        <p
                          className="linkedin-duration"
                          style={{ color: theme.secondaryText }}
                        >
                          Dec 2025 - Present · 1 mo
                        </p>
                        <p
                          className="linkedin-location"
                          style={{ color: theme.secondaryText }}
                        >
                          Dubai, United Arab Emirates · Remote
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Link
                  to="/resume"
                  className="preview-resume-btn"
                >
                  <i className="fas fa-eye"></i> Preview Resume
                  <div className="resume-hover-preview">
                    <span>👁️ View full resume page</span>
                  </div>
                </Link>
              </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="Developer Activity"
              src={require("../../assets/images/developerActivity.svg")}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
