import { useState, useEffect } from 'react'

export const useIsDesktop = (desktopSize) => {

  const mobileBreakpoint = 480;

  const [isDesktop, setDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth : mobileBreakpoint
  );

  const updateMedia = () => setDesktop(window.innerWidth > desktopSize)

  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  });

  return isDesktop
}