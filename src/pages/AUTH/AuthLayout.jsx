import React from "react";
import { Link } from "react-router-dom";

/**
 * Dedicated Layout for Authentication Pages (Sign In, Sign Up, Forgot Password).
 * Matches Krisp's clean, distraction-free authentication experience with Silgate branding.
 */
export default function AuthLayout({
  children,
  headerActionText = "Don't have an account?",
  headerActionLink = "/signup",
  headerActionLabel = "Sign up"
}) {
  return (
    <div className="-mt-[73px] min-h-screen bg-[#fafafc] flex flex-col justify-between selection:bg-[#614efa] selection:text-white">
      {/* Auth Dedicated Header */}
      <header className="w-full h-[72px] px-6 md:px-12 flex items-center justify-between border-b border-[#f0f0f4] bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2 group" title="Return to Home">
          <img
            src="/silgate-logo-latest.png"
            alt="Silgate Solutions"
            className="h-[36px] md:h-[42px] w-auto object-contain mix-blend-multiply group-hover:opacity-90 transition-opacity"
          />
        </Link>

        <div className="flex items-center gap-3 text-[14px]">
          <span className="text-[#525069] hidden sm:inline">{headerActionText}</span>
          <Link
            to={headerActionLink}
            className="inline-flex items-center justify-center font-bold text-[#614efa] hover:text-[#4a3bbe] bg-[#f4f2ff] hover:bg-[#ece8ff] px-3.5 py-1.5 rounded-[8px] transition-colors"
          >
            {headerActionLabel}
          </Link>
        </div>
      </header>

      {/* Main Form Center Stage */}
      <main className="flex-1 flex items-center justify-center px-4 py-10 sm:py-14">
        <div className="w-full max-w-[460px]">
          {children}
        </div>
      </main>

      {/* Minimalist Auth Footer */}
      <footer className="w-full py-6 px-6 border-t border-[#f0f0f4] bg-white text-center sm:flex sm:items-center sm:justify-between sm:px-12 text-[13px] text-[#757585]">
        <div className="mb-3 sm:mb-0">
          © {new Date().getFullYear()} Silgate Solutions. All rights reserved.
        </div>
        <div className="flex items-center justify-center gap-6">
          <Link to="/" className="hover:text-[#1a1a22] transition-colors">
            Home
          </Link>
          <Link to="/pricing" className="hover:text-[#1a1a22] transition-colors">
            Pricing
          </Link>
          <Link to="/contact-sales" className="hover:text-[#1a1a22] transition-colors">
            Support
          </Link>
          <Link to="/customers" className="hover:text-[#1a1a22] transition-colors">
            Customers
          </Link>
        </div>
      </footer>
    </div>
  );
}
