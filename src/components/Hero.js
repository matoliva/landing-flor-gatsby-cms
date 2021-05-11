import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { useWindowSize, useIsClient } from "../utils/hooks";
import { breakpoints } from "../style/theme";

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
  top: 1;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;

  @media (max-width: ${breakpoints.mobile}px) {
    top: 0;
  }
`;

const TitleText = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  background-color: rgba(0,0,0,.5);
  padding: 5px 15px;
  margin: 5px;
  font-size: 60px;
  font-weight: 100;
  letter-spacing: 4px;
`

const SubtitleText = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  background-color: rgba(0,0,0,.5);
  margin: 5px;
  padding: 5px 15px;
  font-size: 30px;
  font-weight: 100;
  letter-spacing: 2px;
`

const DesktopImage = () => (
  <StaticImage
    src="../img/hero-img.jpg"
    alt="cover design"
    placeholder="tracedSVG"
    className="hero-img"
  />
);

const MobileImage = () => (
  <StaticImage
    src="../img/textura-blanca.jpg"
    alt="cover design"
    placeholder="tracedSVG"
    className="hero-img"
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
  const { isClient, key } = useIsClient();
  const { width } = useWindowSize();
  const Component = width > breakpoints.mobile ? DesktopImage : MobileImage;
  const Content = width > breakpoints.mobile ? (
    <>
    <TitleText> Florencia Nieto </TitleText>
    <SubtitleText> Diseño en arquitectura interior </SubtitleText>
    </>
  ) : <LogoImg />

  if (!isClient) return null;
  return (
    <HeroWrapper key={key}>
      <Component />
      <HeroTitle>
        {Content}
      </HeroTitle>
    </HeroWrapper>
  );
};

export default Hero;
