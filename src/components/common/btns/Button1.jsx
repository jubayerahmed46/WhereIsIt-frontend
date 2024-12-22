import { useState } from "react";
import "./anim.css";

// eslint-disable-next-line react/prop-types
export default function Button1({ children, className, onClick = () => {} }) {
  const [rippleStyle, setRippleStyle] = useState({});

  const handleRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(button.offsetWidth, button.offsetHeight);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    setRippleStyle({
      width: size,
      height: size,
      left: x,
      top: y,
    });

    setTimeout(() => {
      setRippleStyle({});
    }, 600); // Duration of the ripple animation
  };

  return (
    <button
      className={`relative overflow-hidden bg-blue-600 text-white px-6 py-2 rounded-md text-base hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-opacity-75 ${className}`}
      onClick={(e) => {
        onClick();
        handleRipple(e);
      }}
    >
      {children}
      <span
        className="absolute rounded-full bg-white opacity-50 pointer-events-none transform transition-all duration-300"
        style={{
          width: rippleStyle.width,
          height: rippleStyle.height,
          left: rippleStyle.left,
          top: rippleStyle.top,
          transform: "scale(0)",
          animation: rippleStyle.width
            ? "ripple-animation 0.6s linear"
            : "none",
        }}
      ></span>
    </button>
  );
}
