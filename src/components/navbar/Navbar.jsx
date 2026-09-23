import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import Button from "../common/Button";
import { navigationModel } from "../../models/navigationModel";
import { useNavigationController } from "../../controllers/navigationController";

export default function Navbar() {
  const {
    activeDropdown,
    openDropdown,
    closeDropdown,
    mobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    mobileSubMenu,
    setMobileSubMenu,
    getKrispDropdownOpen,
    setGetKrispDropdownOpen,
    scrolled
  } = useNavigationController();

  const navRef = useRef(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    closeDropdown();
    closeMobileMenu();
    setGetKrispDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close getKrispDropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeDropdown();
        setGetKrispDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeItem = navigationModel.menuItems.find(
    (item) => item.id === activeDropdown
  );

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 w-full h-[73px] z-[9998] transition-all duration-200 border-b border-[#f4f4f5] flex items-center ${
          scrolled ? "bg-white/95 backdrop-blur-[45px] shadow-xs" : "bg-white/90 backdrop-blur-[45px]"
        }`}
      >
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src={navigationModel.logo.src}
                alt={navigationModel.logo.alt}
                width={navigationModel.logo.width}
                height={navigationModel.logo.height}
                className="w-[72px] h-[34px]"
              />
            </Link>

            {/* Desktop Navigation Items */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-1">
                {navigationModel.menuItems.map((item) => (
                  <li
                    key={item.id}
                    className="relative px-2 py-1"
                    onMouseEnter={() => item.hasSubMenu && openDropdown(item.id)}
                  >
                    {item.hasSubMenu ? (
                      <button
                        onClick={() =>
                          activeDropdown === item.id ? closeDropdown() : openDropdown(item.id)
                        }
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-[14px] leading-[20px] font-medium transition-colors ${
                          activeDropdown === item.id
                            ? "bg-[#f4f4f5] text-[#1a1a22] font-semibold"
                            : "text-[#1a1a22] hover:bg-[#f4f4f5]"
                        }`}
                      >
                        <span>{item.title}</span>
                        <img
                          src="https://krisp.ai/wp-content/themes/krisp-v4/imgs//home/icon_arrow.svg"
                          alt="Arrow"
                          className={`w-3 h-3 transition-transform duration-200 ${
                            activeDropdown === item.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-[14px] leading-[20px] font-medium text-[#1a1a22] hover:bg-[#f4f4f5] transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={navigationModel.actions.signIn.href}
              className="text-[14px] font-semibold text-[#1a1a22] hover:underline"
            >
              {navigationModel.actions.signIn.text}
            </a>

            <div className="w-[1px] h-[26px] bg-[#e7e7ea]"></div>

            <Button variant="dark" href="/contact-sales">
              {navigationModel.actions.bookDemo.text}
            </Button>

            {/* Get Krisp Dropdown */}
            <div className="relative">
              <button
                onClick={() => setGetKrispDropdownOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 bg-[#614efa] hover:bg-[#4a3bbe] text-white text-[14px] font-bold h-[44px] px-4 rounded-[10px] transition-colors cursor-pointer"
              >
                <span>Get Krisp</span>
                <img
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_arrow_down.svg"
                  alt="Arrow"
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    getKrispDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {getKrispDropdownOpen && (
                <div className="absolute right-0 top-[52px] w-[290px] bg-white rounded-[16px] p-2 header-dropdown-menu z-50">
                  {navigationModel.actions.getKrispDropdown.map((drop) => (
                    <a
                      key={drop.id}
                      href={drop.href}
                      onClick={() => setGetKrispDropdownOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-[12px] hover:bg-[#f4f4f5] transition-colors text-left"
                    >
                      <img
                        src={drop.icon}
                        alt={drop.title}
                        className="w-6 h-6 mt-0.5 flex-shrink-0"
                      />
                      <div>
                        <div className="text-[14px] font-bold text-[#1a1a22] leading-[18px]">
                          {drop.title}
                        </div>
                        <div className="text-[12px] text-[#757585] mt-0.5 leading-[16px]">
                          {drop.desc}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Hamburger button for mobile/tablet */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-2 flex flex-col gap-1.5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span
                className={`w-7 h-[2px] bg-[#131032] rounded-full transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-7 h-[2px] bg-[#131032] rounded-full transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-7 h-[2px] bg-[#131032] rounded-full transition-transform duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Mega Menu Dropdown */}
      <div onMouseLeave={closeDropdown}>
        <MegaMenu
          item={activeItem}
          isOpen={Boolean(activeDropdown && activeItem)}
          onClose={closeDropdown}
        />
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        navigationData={navigationModel}
        activeSubMenu={mobileSubMenu}
        setActiveSubMenu={setMobileSubMenu}
      />
    </>
  );
}
