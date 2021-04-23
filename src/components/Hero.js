import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { useIsDesktop } from "../utils/hooks";
import { breakpoints } from "../style/theme";

const desktopSize = breakpoints.large;

const HeroWrapper = styled.div`
  height: 100vh;
  z-index: 0;

  .hero-img {
    height: 100%;
  }
`;

const DesktopImage = () => {
  return (
    <StaticImage
      src="../img/hero-desktop.jpg"
      alt="cover design"
      placeholder="tracedSVG"
      layout="constrained"
      className="hero-img"
      objectPosition="50% 50%"
    />
  );
};

const MobileImage = () => {
  return (
    <StaticImage
      src="../img/hero-mobile.jpg"
      alt="cover design"
      placeholder="tracedSVG"
      layout="constrained"
      className="hero-img"
      objectPosition="50% 50%"
    />
  );
};

const Hero = () => {
  const isDesktop = useIsDesktop(desktopSize);
  const Component = isDesktop ? DesktopImage : MobileImage;

  return (
    <HeroWrapper>
      <Component />
    </HeroWrapper>
  );
};

export default Hero;
