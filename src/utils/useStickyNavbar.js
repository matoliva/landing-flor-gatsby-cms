import { useEffect, useRef } from "react";

export const useStickyNavbar = (navbarID, navbarHeight) => {
  const prevScrollpos = useRef();
  prevScrollpos.current = window.pageYOffset;
  const navbar = document.getElementById(navbarID);

  useEffect(() => {
    const modifyTopOnScroll = () => {
      const currentScrollPos = window?.pageYOffset;
      if (!!navbar) {
        if (prevScrollpos.current > currentScrollPos) {
          navbar.style.top = "0";
        } else {
          navbar.style.top = `-${navbarHeight}px`;
        }
      }
      prevScrollpos.current = currentScrollPos;
    };
    document.addEventListener("scroll", modifyTopOnScroll);
    return () => document.removeEventListener("scroll", modifyTopOnScroll);
  }, [navbarID, navbarHeight, navbar]);
};
