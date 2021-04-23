import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { useIsDesktop } from "../utils/hooks";
import { breakpoints } from "../style/theme";

const desktopSize = breakpoints.large;

const HeroWrapper = styled.div`
  //position: relative;
  height: 85vh;
  z-index: 0;

  .hero-img {
    height: 100%;
  }
`;

const HeroText = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
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
      <HeroText>
        <h1> Florencia Nieto </h1>
        <h2> Diseño en arquitectura interior </h2>
      </HeroText>
    </HeroWrapper>
  );
};

export default Hero;
