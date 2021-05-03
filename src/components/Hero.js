import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { useWindowSize } from "../utils/hooks";
import { breakpoints } from "../style/theme";

const desktopSize = breakpoints.large;

const HeroWrapper = styled.div`
  height: 100vh;
  z-index: 0;

  .hero-img {
    height: 100%;
  }
`;

const HeroTitle = styled.div`
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

const TitleText = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
  font-weight: 100;
`

const SubtitleText = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 40px;
  font-weight: 100;
`

const DesktopImage = () => (
  <StaticImage
    src="../img/hero-desktop.jpg"
    alt="cover design"
    placeholder="tracedSVG"
    layout="constrained"
    className="hero-img"
    objectPosition="50% 50%"
  />
);

const MobileImage = () => (
  <StaticImage
    src="../img/textura-blanca.jpg"
    alt="cover design"
    placeholder="tracedSVG"
    layout="constrained"
    className="hero-img"
    objectPosition="50% 50%"
  />
);

const LogoImg = () => (
  <StaticImage 
    src="../img/logo-dorado.png"
    alt="logo"
    placeholder="tracedSVG"
  />
)

const Hero = () => {
  const { width } = useWindowSize();
  const Component = width > 500 ? DesktopImage : MobileImage;
  const Content = width > 500 ? (
    <>
    <TitleText> Florencia Nieto </TitleText>
    <SubtitleText> Diseño en arquitectura interior </SubtitleText>
    </>
  ) : <LogoImg />

  return (
    <HeroWrapper>
      <Component />
      <HeroTitle>
        {Content}
      </HeroTitle>
    </HeroWrapper>
  );
};

export default Hero;
