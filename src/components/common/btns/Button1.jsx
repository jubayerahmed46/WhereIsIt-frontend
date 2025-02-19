import { useState } from "react";
import "./anim.css";

// eslint-disable-next-line react/prop-types
export default function Button1({ children, className, onClick = () => {} }) {
  return (
    <button
      className={`py-2 px-3   rounded-md  transition-all duration-300 
         ${className} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
