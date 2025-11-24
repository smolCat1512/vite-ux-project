import { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";
import { FaBars, FaXmark } from "react-icons/fa6";

const navItems = [
  { title: "Technologies", href: "#technologies" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "Connect", href: "#connect" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleLogoClick = () => {
    if (location.pathname === "/" && location.hash) {
      window.history.replaceState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  // Handles clicking a nav item (desktop or mobile)
  const handleNavClick = (item: (typeof navItems)[0]) => {
    setIsOpen(false);
    scrollToSection(item.href, location.pathname, navigate);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Focus the close button when menu opens
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    const handleTab = (e: KeyboardEvent) => {
      if (!isOpen || !menuRef.current) return;

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];

      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  return (
    <>
      {/* Skip-to-content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-black p-2 rounded"
      >
        Skip to main content
      </a>

      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-lg p-4 flex items-center justify-between z-50"
      >
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          aria-label="Go to top of home page"
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          <Logo />
        </button>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:block primary-navigation"
          aria-label="Primary"
        >
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      handleNavClick(item);
                    }
                  }}
                  className="text-lg cursor-pointer hover:text-fuchsia-900 transition-colors duration-300 relative group"
                >
                  {item.title}
                  <span className="absolute top-8 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-fuchsia-900 primary-navigation"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
        >
          {isOpen ? <FaXmark size={28} /> : <FaBars size={28} />}
        </button>

        {/* Mobile Navigation Panel */}
        {isOpen && (
          <>
            {/* Overlay backdrop */}
            <div
              className="fixed inset-0 bg-opacity-50 md:hidden z-40"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
              tabIndex={-1}
            />

            {/* Mobile Menu */}
            <motion.div
              ref={menuRef}
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 h-fit w-full bg-fuchsia-900 bg-opacity-95 p-6 flex flex-col space-y-4 md:hidden z-50 overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="self-end text-white hover:text-cyan-400 transition-colors mb-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                aria-label="Close Navigation Menu"
                ref={closeButtonRef}
              >
                <FaXmark size={32} />
              </button>

              {/* Navigation Items */}
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item)}
                  className="text-white text-lg hover:text-cyan-400 transition-colors text-left"
                >
                  {item.title}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </motion.header>
    </>
  );
};

export default Header;
