import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="articles-main">
        <Header theme={theme} />
        <div className="articles-container">
          <Fade bottom duration={1000} distance="40px">
            <h1 className="articles-heading" style={{ color: theme.text }}>
              {contactPageData.title}
            </h1>
          </Fade>

          <div className="articles-list">
            {contactPageData.articles.map((article, index) => (
              <Fade bottom duration={1000} distance="40px" key={index}>
                <div className="article-card">
                  <div className="article-meta">
                    <div className="article-date">
                      <svg
                        className="icon"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span style={{ color: theme.secondaryText }}>
                        {article.date}
                      </span>
                    </div>
                    <div className="article-read-time">
                      <svg
                        className="icon"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span style={{ color: theme.secondaryText }}>
                        {article.readTime}
                      </span>
                    </div>
                    <div className="article-tags">
                      {article.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="article-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="article-content">
                    <h2 className="article-title" style={{ color: theme.text }}>
                      {article.title}
                    </h2>
                    <p
                      className="article-description"
                      style={{ color: theme.secondaryText }}
                    >
                      {article.description}
                    </p>
                    <Link
                      to={`/articles/${article.id}`}
                      className="article-link"
                    >
                      Read article
                      <svg
                        className="arrow-icon"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
