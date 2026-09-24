import React from "react";

export default function Container({ children, className = "" }) {
  return (
    <div className={`w-[calc(100%-48px)] max-w-[1366px] mx-auto ${className}`}>
      {children}
    </div>
  );
}
