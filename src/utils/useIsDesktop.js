import { useState, useEffect } from 'react'

export const useIsDesktop = (desktopSize) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth >= desktopSize)

  const updateMedia = () => setDesktop(window.innerWidth > desktopSize)

  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  });

  return isDesktop
}
