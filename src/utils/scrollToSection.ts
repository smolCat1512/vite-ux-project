import type { NavigateFunction, NavigateOptions } from "react-router-dom";

export function scrollToSection(
  href: string,
  locationPathname: string,
  navigate: NavigateFunction,
  delay = 50
) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  
  const scrollBehavior = prefersReducedMotion ? "auto" : "smooth";

  const scrollAndFocus = () => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: scrollBehavior });
      
      // Move focus for screen reader users
      if (target instanceof HTMLElement) {
        target.setAttribute('tabindex', '-1');
        target.focus();
      }
      
      // Update URL
      window.history.replaceState(null, '', href);
    }
  };

  if (locationPathname !== "/") {
    navigate("/", { replace: true } as NavigateOptions);
    setTimeout(scrollAndFocus, delay);
  } else {
    scrollAndFocus();
  }
}