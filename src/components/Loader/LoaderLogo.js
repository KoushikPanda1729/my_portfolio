import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="logo-container">
        {/* Hexagon SVG */}
        <div className="hexagon-wrapper">
          <svg
            className="logo-svg"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="hexagon-path"
              d="M100 20 L170 60 L170 140 L100 180 L30 140 L30 60 Z"
              stroke={theme.text}
              strokeWidth="3"
              fill="none"
            />
            <path
              className="hexagon-path-inner"
              d="M100 40 L150 70 L150 130 L100 160 L50 130 L50 70 Z"
              stroke={theme.text}
              strokeWidth="2"
              fill="none"
              opacity="0.5"
            />
            <text
              className="logo-letters"
              x="100"
              y="115"
              fontSize="40"
              fontWeight="bold"
              fill={theme.text}
              textAnchor="middle"
              fontFamily="Google Sans Bold"
            >
              KP
            </text>
          </svg>
        </div>

        {/* Name */}
        <div className="logo-name-container">
          <h1 className="logo-name-text" style={{ color: theme.text }}>
            Koushik Panda
          </h1>
          <div className="logo-tagline" style={{ color: theme.text }}>
            Full Stack Developer
          </div>
        </div>
      </div>
    );
  }
}

export default LogoLoader;
