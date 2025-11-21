// ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Move focus to main content for screen reader users
    const mainContent = document.querySelector("main");
    if (mainContent) {
      mainContent.focus();
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
