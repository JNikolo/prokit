/**
 * @file SoccerJersey.tsx
 * @description High-fidelity SVG jersey visualization component.
 * Uses CSS variables for real-time design updates and supports front/back views.
 */
import React from "react";
import { JerseyConfig, ViewMode } from "../types";

interface SoccerJerseyProps {
  config: JerseyConfig;
  className?: string;
}

/**
 * The SoccerJersey component renders the interactive SVG jersey model.
 * It maps design configurations to SVG patterns, linear gradients, and text elements.
 */
const SoccerJersey: React.FC<SoccerJerseyProps> = ({
  config,
  className = "",
}) => {
  const {
    primaryColor,
    secondaryColor,
    accentColor,
    textColor,
    pattern,
    collarType,
    backNumber,
    backName,
    view,
    showCrest,
  } = config;

  // The latest provided high-fidelity shirt path from the user
  const templatePath =
    "M970.914 355.684C967.508 358.951 886.81 436.187 832.002 471.655C828.345 474.019 823.534 473.379 820.629 470.139C820.128 469.583 775.539 419.835 734.634 370.741V849.46C734.634 853.951 731.255 857.733 726.792 858.233C725.596 858.372 605.969 871.567 486.814 871.567C367.659 871.567 248.045 858.372 246.85 858.233C242.373 857.733 238.995 853.951 238.995 849.46V370.742C198.104 419.836 153.515 469.583 153.014 470.14C150.108 473.38 145.284 474.019 141.641 471.656C86.8328 436.188 6.1208 358.952 2.7148 355.685C-0.0941958 352.988 -0.803149 348.775 0.962851 345.299C5.46785 336.442 111.929 127.817 161.064 90.6941C210.784 53.1261 371.01 2.141 377.809 1.82875e-06C383 2.79034e-07 383 1.49251e-06 388.5 9.21973e-06C391 9.21973e-06 392.5 -1.7145e-05 409 1.92929e-05C434 0.0844116 453.913 3.25927e-06 483.5 3.25927e-06C513.087 3.25927e-06 513.5 6.9324e-06 547.5 3.25927e-06C571.5 6.66465e-07 575.5 7.73804e-06 581 2.06717e-06C588 1.82876e-06 592.5 1.47113e-06 595.819 1.82875e-06C602.618 2.141 762.858 53.1261 812.578 90.6941C861.7 127.817 968.174 336.442 972.679 345.299C974.446 348.774 973.723 352.987 970.914 355.684Z";

  // Maps configuration colors to CSS variables for use in the SVG and stylesheet
  const cssVariables = {
    "--primary": primaryColor,
    "--secondary": secondaryColor,
    "--accent": accentColor,
    "--text": textColor,
  } as React.CSSProperties;

  return (
    <div
      className={`jersey-container relative w-full h-full flex items-center justify-center transition-opacity duration-300 ${className}`}
      style={cssVariables}
      data-view={view}
      data-pattern={pattern}
      data-collar={collarType}
    >
      <svg
        viewBox="0 0 974 872"
        className="w-full h-full max-w-full max-h-full drop-shadow-2xl overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Pattern definitions for Stripes and Hoops */}
          <pattern
            id="stripes-pattern"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <rect width="60" height="120" fill="var(--primary)" />
            <rect x="60" width="60" height="120" fill="var(--secondary)" />
          </pattern>
          <pattern
            id="hoops-pattern"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <rect width="974" height="60" fill="var(--primary)" />
            <rect y="60" width="974" height="60" fill="var(--secondary)" />
          </pattern>

          {/* Gradient definitions */}
          <linearGradient
            id="gradient-pattern"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--secondary)" />
          </linearGradient>
          <linearGradient id="half-pattern" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" stopColor="var(--primary)" />
            <stop offset="50%" stopColor="var(--secondary)" />
          </linearGradient>

          {/* Realistic Fabric Lighting Effects */}
          <radialGradient id="fabric-light" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="0.15" />
            <stop offset="100%" stopColor="black" stopOpacity="0.15" />
          </radialGradient>

          {/* Clipping path to ensure patterns don't overflow the shirt silhouette */}
          <clipPath id="shirt-clip">
            <path d={templatePath} />
          </clipPath>
        </defs>

        {/* Global Outer Shadow */}
        <path
          d={templatePath}
          fill="black"
          opacity="0.1"
          transform="translate(8, 12)"
          filter="blur(10px)"
        />

        {/* Main Shirt Body with Pattern */}
        <path
          d={templatePath}
          className="jersey-body jersey-part transition-all duration-700"
        />

        {/* Fabric Lighting Overlay */}
        <path
          d={templatePath}
          fill="url(#fabric-light)"
          className="pointer-events-none"
          style={{ mixBlendMode: "overlay" }}
        />

        {/* Collar System - Conditional Visibility based on View */}
        <g
          className="collar-system"
          style={{
            opacity: view === ViewMode.FRONT ? 1 : 0,
            transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Black interior fill - This sits behind the collar but over the shirt pattern */}
          <path
            d="M378 1 Q487 145 596 1 L596 0 L378 0 Z"
            fill="#0f172a"
            className="jersey-part"
            style={{ display: collarType === "round" ? "block" : "none" }}
          />
          <path
            d="M378 1 L487 165 L596 1 L596 0 L378 0 Z"
            fill="#0f172a"
            className="jersey-part"
            style={{
              display:
                collarType === "v-neck" || collarType === "polo"
                  ? "block"
                  : "none",
            }}
          />

          {/* Collar Rim Elements */}
          <path
            d="M378 1 Q487 145 596 1"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="20"
            strokeLinecap="round"
            className="collar-round collar-part transition-all duration-500"
          />
          <path
            d="M378 1 L487 165 L596 1"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="20"
            strokeLinecap="round"
            className="collar-v-neck collar-part transition-all duration-500"
          />

          <g className="collar-polo collar-part transition-all duration-500">
            {/* The main V part of the polo */}
            <path
              d="M378 1 L487 165 L596 1"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* The flaps */}
            <path
              d="M378 1 L315 75 L487 165 L655 75 L596 1"
              fill="var(--accent)"
              stroke="var(--secondary)"
              strokeWidth="5"
            />
          </g>
        </g>

        {/* Back neck line - A subtle seam when viewing from the back */}
        {view === ViewMode.BACK && (
          <path
            d="M378 1 Q487 25 596 1"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="6"
            strokeDasharray="4 4"
            opacity="0.3"
          />
        )}

        {/* Interactive Layer: Front */}
        <g className="jersey-view-front">
          {/* Crest */}
          <g
            transform="translate(325, 265)"
            style={{ visibility: showCrest ? "visible" : "hidden" }}
          >
            {/* Crest Outer Glow */}
            <circle cx="0" cy="0" r="50" fill="var(--accent)" opacity="0.1" />
            <circle
              cx="0"
              cy="0"
              r="45"
              fill="var(--accent)"
              stroke="var(--secondary)"
              strokeWidth="6"
              className="jersey-part shadow-lg"
            />
            <path
              d="M-20 -20 L20 20 M-20 20 L20 -20"
              stroke="var(--secondary)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M-45 0 Q0 -45 45 0 Q0 45 -45 0"
              fill="none"
              stroke="var(--secondary)"
              strokeWidth="2"
              opacity="0.2"
            />
          </g>

          {/* Front Number */}
          <text
            x="640"
            y="285"
            fill="var(--text)"
            fontSize="84"
            fontWeight="900"
            textAnchor="middle"
            className="transition-all duration-700"
            style={{
              filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.25))",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {backNumber}
          </text>

          {/* Sponsor Area */}
          <g className="transition-all duration-700">
            <rect
              x="317"
              y="440"
              width="340"
              height="100"
              fill="var(--text)"
              opacity="0.15"
              rx="20"
            />
            <text
              x="487"
              y="502"
              fill="var(--text)"
              fontSize="42"
              textAnchor="middle"
              fontWeight="900"
              style={{
                opacity: 0.8,
                letterSpacing: "8px",
                filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.1))",
              }}
            >
              SPONSOR
            </text>
          </g>
        </g>

        {/* Interactive Layer: Back */}
        <g className="jersey-view-back">
          {/* Player Name */}
          <text
            x="487"
            y="230"
            fill="var(--text)"
            fontSize="54"
            fontWeight="800"
            textAnchor="middle"
            className="transition-all duration-700"
            style={{
              letterSpacing: "12px",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))",
              textTransform: "uppercase",
            }}
          >
            {backName}
          </text>

          {/* Large Back Number */}
          <text
            x="487"
            y="590"
            fill="var(--text)"
            fontSize="360"
            fontWeight="900"
            textAnchor="middle"
            className="transition-all duration-700"
            style={{
              filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.5))",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {backNumber}
          </text>
        </g>

        {/* Bottom Hem Trim */}
        <path
          d="M246 858 Q487 874 726 858"
          stroke="var(--accent)"
          strokeWidth="16"
          fill="none"
          opacity="0.95"
          strokeLinecap="round"
          className="jersey-part transition-all duration-700"
        />
      </svg>
    </div>
  );
};

export default SoccerJersey;
