import React, { useState, useRef, useEffect, useCallback } from "react";
import "./ComparisonSlider.css";

const ComparisonSlider = ({
  beforeImage,
  afterImage,
  theme,
  objectFit = "contain",
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const sliderRef = useRef(null);

  const setSliderPosition = useCallback((x) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const newPosition = ((x - rect.left) / rect.width) * 100;
      setPosition(Math.min(Math.max(newPosition, 0), 100));
    }
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsResizing(true);
  }, []);

  const handleTouchStart = useCallback(() => {
    setIsResizing(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsResizing(false);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (isResizing) {
        setSliderPosition(e.clientX);
      }
    },
    [isResizing, setSliderPosition]
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (isResizing && e.touches.length > 0) {
        setSliderPosition(e.touches[0].clientX);
      }
    },
    [isResizing, setSliderPosition]
  );

  useEffect(() => {
    const updateContainerWidth = () => {
      if (sliderRef.current) {
        setContainerWidth(sliderRef.current.offsetWidth);
      }
    };

    updateContainerWidth();
    window.addEventListener("resize", updateContainerWidth);

    return () => {
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return (
    <div
      className="comparison-slider"
      ref={sliderRef}
      style={{
        boxShadow: theme.imageShadow,
      }}
    >
      {/* After Image (Right) - Background */}
      <div className="slider-image-wrapper after">
        <img
          src={afterImage.image}
          alt={afterImage.title}
          draggable="false"
          style={{
            width: containerWidth > 0 ? `${containerWidth}px` : "100%",
            objectFit: objectFit,
          }}
        />
        <span className="slider-label right">{afterImage.title}</span>
      </div>

      {/* Before Image (Left) - Foreground (Clipped) */}
      <div
        className="slider-image-wrapper before"
        style={{
          clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
        }}
      >
        <img
          src={beforeImage.image}
          alt={beforeImage.title}
          draggable="false"
          style={{
            width: containerWidth > 0 ? `${containerWidth}px` : "100%",
            objectFit: objectFit,
          }}
        />
        <span className="slider-label left">{beforeImage.title}</span>
      </div>

      {/* Slider Handle */}
      <div
        className="slider-handle"
        style={{ left: `${position}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="handle-button">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="handle-icon"
          >
            {/* Left Triangle */}
            <path d="M11 8L6 14L11 20V8Z" fill="white" />
            {/* Right Triangle */}
            <path d="M17 8L22 14L17 20V8Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;
