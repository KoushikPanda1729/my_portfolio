import React, { Component } from "react";

export default class AppDevImg extends Component {
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

        {/* Center icon - Mobile Phone */}
        <g transform="translate(250, 250)">
          {/* Phone body */}
          <rect
            x="-20"
            y="-35"
            width="40"
            height="70"
            rx="5"
            fill="none"
            stroke={theme.text}
            strokeWidth="3"
          />
          {/* Screen */}
          <rect
            x="-16"
            y="-28"
            width="32"
            height="50"
            rx="2"
            fill={theme.text}
            opacity="0.2"
          />
          {/* Notch */}
          <rect
            x="-8"
            y="-28"
            width="16"
            height="3"
            rx="1.5"
            fill={theme.text}
            opacity="0.5"
          />
          {/* Home button */}
          <circle
            cx="0"
            cy="30"
            r="3"
            fill="none"
            stroke={theme.text}
            strokeWidth="2"
          />
        </g>

        {/* 6 tech logos arranged in a circle */}

        {/* 1. Flutter - Top */}
        <g transform="translate(250, 100)">
          <circle cx="0" cy="0" r="40" fill="#02569B" opacity="0.15" />
          <path d="M -15,-18 L 15,-18 L 15,0 L 0,15 L -15,0 Z" fill="#02569B" />
          <path d="M 0,0 L 15,0 L 0,15 Z" fill="#47C5FB" opacity="0.7" />
        </g>

        {/* 2. React Native - Top Right */}
        <g transform="translate(356, 169)">
          <circle cx="0" cy="0" r="40" fill="#61DAFB" opacity="0.15" />
          <ellipse
            cx="0"
            cy="0"
            rx="22"
            ry="9"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="2.5"
          />
          <ellipse
            cx="0"
            cy="0"
            rx="22"
            ry="9"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="2.5"
            transform="rotate(60)"
          />
          <ellipse
            cx="0"
            cy="0"
            rx="22"
            ry="9"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="2.5"
            transform="rotate(120)"
          />
          <circle cx="0" cy="0" r="4" fill="#61DAFB" />
        </g>

        {/* 3. Kotlin - Bottom Right */}
        <g transform="translate(356, 331)">
          <circle cx="0" cy="0" r="40" fill="#7F52FF" opacity="0.15" />
          <path
            d="M -18,-18 L 18,-18 L -18,18 L 18,18 L -18,-18"
            fill="#7F52FF"
          />
        </g>

        {/* 4. Swift - Bottom */}
        <g transform="translate(250, 400)">
          <circle cx="0" cy="0" r="40" fill="#FA7343" opacity="0.15" />
          <path
            d="M -12,-10 Q -6,-15 0,-10 Q 6,-5 9,3 Q 12,10 9,15 Q 6,18 0,15 Q -9,10 -12,0 Q -15,-5 -12,-10"
            fill="#FA7343"
          />
          <path
            d="M -6,0 Q 0,6 6,9"
            stroke="#FFFFFF"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* 5. Android - Bottom Left */}
        <g transform="translate(144, 331)">
          <circle cx="0" cy="0" r="40" fill="#3DDC84" opacity="0.15" />
          <path
            d="M -15,-6 L -15,9 L 15,9 L 15,-6 Q 15,-12 9,-15 Q 0,-18 -9,-15 Q -15,-12 -15,-6"
            fill="#3DDC84"
          />
          <circle cx="-6" cy="-2" r="1.8" fill="#FFFFFF" />
          <circle cx="6" cy="-2" r="1.8" fill="#FFFFFF" />
          <line
            x1="-9"
            y1="-18"
            x2="-12"
            y2="-22"
            stroke="#3DDC84"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="9"
            y1="-18"
            x2="12"
            y2="-22"
            stroke="#3DDC84"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect x="-18" y="9" width="4" height="9" rx="2" fill="#3DDC84" />
          <rect x="14" y="9" width="4" height="9" rx="2" fill="#3DDC84" />
        </g>

        {/* 6. iOS (Apple) - Top Left */}
        <g transform="translate(144, 169)">
          <circle cx="0" cy="0" r="40" fill="#000000" opacity="0.15" />
          <path
            d="M 3,-15 Q 5,-18 7,-15 Q 9,-12 9,-7 Q 9,-3 7,0 Q 5,3 3,0 Q 0,-3 -3,0 Q -5,3 -7,3 Q -12,3 -15,-3 Q -18,-7 -15,-12 Q -12,-18 -7,-18 Q -3,-18 0,-15 Q 1.5,-16.5 3,-15"
            fill="#000000"
          />
          <path d="M 3,-18 Q 3,-21 5,-21 Q 6,-21 6,-19" fill="#000000" />
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
          x1="287"
          y1="213"
          x2="320"
          y2="190"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          opacity="0.3"
        />
        <line
          x1="287"
          y1="287"
          x2="320"
          y2="310"
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
          x1="213"
          y1="287"
          x2="180"
          y2="310"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          opacity="0.3"
        />
        <line
          x1="213"
          y1="213"
          x2="180"
          y2="190"
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
