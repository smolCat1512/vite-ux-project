import type { NavigateFunction, NavigateOptions } from "react-router-dom";

export function scrollToSection(
  href: string,
  locationPathname: string,
  navigate: NavigateFunction,
  delay = 50
) {
  if (locationPathname !== "/") {
    navigate("/", { replace: true } as NavigateOptions);

    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, delay);
  } else {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
}
