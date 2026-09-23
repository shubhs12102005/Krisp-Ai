import React from "react";
import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "primary", // primary | dark | outline | dropdown
  href = "#",
  className = "",
  onClick,
  icon,
  external = false
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-bold transition-all duration-200 cursor-pointer select-none text-[14px] leading-[20px] rounded-[10px] h-[44px] px-[16px]";

  const variantMap = {
    primary:
      "bg-[#614efa] hover:bg-[#4a3bbe] text-white shadow-sm hover:shadow-md",
    dark:
      "bg-[#14141a] hover:bg-[#23232e] text-white",
    outline:
      "border border-[#23232e] text-[#1a1a22] hover:bg-[#23232e] hover:text-white bg-transparent",
    lightOutline:
      "border border-[#a59afc] text-[#614efa] hover:bg-[#614efa] hover:text-white rounded-[48px] px-[16px] py-[12px] h-auto font-semibold"
  };

  const combinedClasses = `${baseClasses} ${variantMap[variant] || variantMap.primary} ${className}`;

  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </a>
    );
  }

  return (
    <Link to={href} className={combinedClasses} onClick={onClick}>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </Link>
  );
}
