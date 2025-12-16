import React, { Component } from "react";

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="500"
        viewBox="0 0 500 500"
      >
        {/* Center circle */}
        <circle
          cx="250"
          cy="250"
          r="60"
          fill={theme.imageHighlight}
          opacity="0.15"
        />

        {/* Center icon - Code symbol */}
        <text
          x="250"
          y="270"
          fill={theme.text}
          fontSize="50"
          fontWeight="bold"
          textAnchor="middle"
        >
          {"</>"}
        </text>

        {/* 8 tech logos arranged in a circle (Flutter removed) */}

        {/* 1. HTML5 - Top */}
        <g transform="translate(250, 100)">
          <circle cx="0" cy="0" r="40" fill="#E34F26" opacity="0.15" />
          <path
            d="M -12,-12 L 12,-12 L 10,12 L 0,15 L -10,12 Z"
            fill="#E34F26"
          />
          <text
            x="0"
            y="3"
            fill="#FFFFFF"
            fontSize="14"
            fontWeight="bold"
            textAnchor="middle"
          >
            5
          </text>
        </g>

        {/* 2. CSS3 - Top Right */}
        <g transform="translate(356, 144)">
          <circle cx="0" cy="0" r="40" fill="#1572B6" opacity="0.15" />
          <path
            d="M -12,-12 L 12,-12 L 10,12 L 0,15 L -10,12 Z"
            fill="#1572B6"
          />
          <text
            x="0"
            y="3"
            fill="#FFFFFF"
            fontSize="14"
            fontWeight="bold"
            textAnchor="middle"
          >
            3
          </text>
        </g>

        {/* 3. Sass - Right */}
        <g transform="translate(400, 250)">
          <circle cx="0" cy="0" r="40" fill="#CC6699" opacity="0.15" />
          <circle cx="0" cy="0" r="15" fill="#CC6699" />
          <text
            x="0"
            y="5"
            fill="#FFFFFF"
            fontSize="11"
            fontWeight="bold"
            textAnchor="middle"
          >
            Sass
          </text>
        </g>

        {/* 4. JavaScript - Bottom Right */}
        <g transform="translate(356, 356)">
          <circle cx="0" cy="0" r="40" fill="#F7DF1E" opacity="0.15" />
          <rect x="-15" y="-15" width="30" height="30" rx="3" fill="#F7DF1E" />
          <text
            x="0"
            y="6"
            fill="#000000"
            fontSize="16"
            fontWeight="bold"
            textAnchor="middle"
          >
            JS
          </text>
        </g>

        {/* 5. ReactJS - Bottom */}
        <g transform="translate(250, 400)">
          <circle cx="0" cy="0" r="40" fill="#61DAFB" opacity="0.15" />
          <ellipse
            cx="0"
            cy="0"
            rx="25"
            ry="10"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="3"
          />
          <ellipse
            cx="0"
            cy="0"
            rx="25"
            ry="10"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="3"
            transform="rotate(60)"
          />
          <ellipse
            cx="0"
            cy="0"
            rx="25"
            ry="10"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="3"
            transform="rotate(120)"
          />
          <circle cx="0" cy="0" r="5" fill="#61DAFB" />
        </g>

        {/* 6. Next.js - Bottom Left */}
        <g transform="translate(144, 356)">
          <circle cx="0" cy="0" r="40" fill="#000000" opacity="0.15" />
          <circle cx="0" cy="0" r="15" fill="#000000" />
          <text
            x="0"
            y="5"
            fill="#FFFFFF"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
          >
            N
          </text>
        </g>

        {/* 7. NodeJS - Left */}
        <g transform="translate(100, 250)">
          <circle cx="0" cy="0" r="40" fill="#339933" opacity="0.15" />
          <path
            d="M 0,-20 L 17,-10 L 17,10 L 0,20 L -17,10 L -17,-10 Z"
            fill="#339933"
          />
        </g>

        {/* 8. Redux - Top Left */}
        <g transform="translate(144, 144)">
          <circle cx="0" cy="0" r="40" fill="#764ABC" opacity="0.15" />
          <circle cx="0" cy="0" r="15" fill="#764ABC" />
          <circle cx="0" cy="-8" r="3" fill="#FFFFFF" />
          <circle cx="-7" cy="4" r="3" fill="#FFFFFF" />
          <circle cx="7" cy="4" r="3" fill="#FFFFFF" />
        </g>

        {/* Connecting lines from center to each tech */}
        <line
          x1="250"
          y1="190"
          x2="250"
          y2="140"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          opacity="0.3"
        />
        <line
          x1="295"
          y1="205"
          x2="330"
          y2="170"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          opacity="0.3"
        />
        <line
          x1="310"
          y1="250"
          x2="360"
          y2="250"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          opacity="0.3"
        />
        <line
          x1="295"
          y1="295"
          x2="330"
          y2="330"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          opacity="0.3"
        />
        <line
          x1="250"
          y1="310"
          x2="250"
          y2="360"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          opacity="0.3"
        />
        <line
          x1="205"
          y1="295"
          x2="170"
          y2="330"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          opacity="0.3"
        />
        <line
          x1="190"
          y1="250"
          x2="140"
          y2="250"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          opacity="0.3"
        />
        <line
          x1="205"
          y1="205"
          x2="170"
          y2="170"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          opacity="0.3"
        />

        {/* Small decorative dots */}
        <circle
          cx="250"
          cy="70"
          r="4"
          fill={theme.imageHighlight}
          opacity="0.4"
        />
        <circle
          cx="250"
          cy="430"
          r="4"
          fill={theme.imageHighlight}
          opacity="0.4"
        />
        <circle
          cx="70"
          cy="250"
          r="4"
          fill={theme.imageHighlight}
          opacity="0.4"
        />
        <circle
          cx="430"
          cy="250"
          r="4"
          fill={theme.imageHighlight}
          opacity="0.4"
        />
      </svg>
    );
  }
}
