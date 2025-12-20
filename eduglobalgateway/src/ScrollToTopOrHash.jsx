import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopOrHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Delay ensures DOM is fully rendered before scrolling
    const timeout = setTimeout(() => {
      if (hash) {
        const el = document.getElementById(hash.substring(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
}
