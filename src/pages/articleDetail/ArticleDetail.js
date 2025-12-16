import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import "./ArticleDetail.css";
import { articlesData } from "../../portfolio.js";

class ArticleDetail extends Component {
  render() {
    const theme = this.props.theme;
    const articleId = this.props.match.params.id;
    const article = articlesData.articles.find((a) => a.id === articleId);

    if (!article) {
      return (
        <div className="article-detail-main">
          <Header theme={theme} />
          <div className="article-not-found">
            <h1>Article not found</h1>
            <Link to="/articles" className="back-link">
              Back to Articles
            </Link>
          </div>
          <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        </div>
      );
    }

    return (
      <div className="article-detail-main">
        <Header theme={theme} />
        <div className="article-detail-container">
          <Fade bottom duration={1000} distance="40px">
            <Link
              to="/articles"
              className="back-to-articles"
              style={{ color: "#0066ff" }}
            >
              <svg
                className="back-arrow"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Articles
            </Link>
          </Fade>

          <Fade bottom duration={1000} distance="40px">
            <div className="article-header">
              <div className="article-meta-info">
                <div className="meta-item">
                  <svg
                    className="icon"
                    width="18"
                    height="18"
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
                <div className="meta-item">
                  <svg
                    className="icon"
                    width="18"
                    height="18"
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
                <div className="meta-tags">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="meta-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h1
                className="article-detail-title"
                style={{ color: theme.text }}
              >
                {article.title}
              </h1>
              <p
                className="article-detail-subtitle"
                style={{ color: theme.secondaryText }}
              >
                {article.description}
              </p>
            </div>
          </Fade>

          <Fade bottom duration={1000} distance="40px">
            <div className="article-body" style={{ color: theme.text }}>
              {article.content &&
                article.content.map((section, index) => (
                  <div key={index} className="article-section">
                    {section.type === "paragraph" && (
                      <p
                        className="article-paragraph"
                        style={{ color: theme.secondaryText }}
                      >
                        {section.text}
                      </p>
                    )}
                    {section.type === "heading" && (
                      <h2
                        className="article-subheading"
                        style={{ color: theme.text }}
                      >
                        {section.text}
                      </h2>
                    )}
                    {section.type === "list" && (
                      <ul className="article-list">
                        {section.items.map((item, i) => (
                          <li key={i} style={{ color: theme.secondaryText }}>
                            {item.title && (
                              <strong style={{ color: theme.text }}>
                                {item.title}
                              </strong>
                            )}
                            {item.title && item.description && " - "}
                            {item.description && (
                              <span>{item.description}</span>
                            )}
                            {!item.title && !item.description && item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default ArticleDetail;
