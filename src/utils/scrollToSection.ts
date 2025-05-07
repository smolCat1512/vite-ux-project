// utils/scrollToSection.ts
export function scrollToSection(
    href: string,
    locationPathname: string,
    navigate: (path: string, options?: any) => void,
    delay = 50
  ) {
    if (locationPathname !== "/") {
      // Navigate to homepage first
      navigate("/", { replace: true });
      // Scroll after slight delay
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
  