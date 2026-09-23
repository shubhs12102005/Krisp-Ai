import { useState, useEffect } from "react";

export function useNavigationController() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [getKrispDropdownOpen, setGetKrispDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDropdown = (id) => setActiveDropdown(id);
  const closeDropdown = () => setActiveDropdown(null);
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => {
      if (prev) {
        setMobileSubMenu(null);
        document.body.classList.remove("overflow-hidden");
      } else {
        document.body.classList.add("overflow-hidden");
      }
      return !prev;
    });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubMenu(null);
    document.body.classList.remove("overflow-hidden");
  };

  return {
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
  };
}
