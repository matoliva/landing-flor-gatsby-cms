import React from 'react';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";
import { useIsClient } from "../utils/hooks";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;

  .header-img {
    width: 100%;
    height: 100%;
  }
`

const Header = () => {
  const { isClient, key } = useIsClient();

  if (!isClient) return null
  return (
    <HeaderWrapper key={key}>
      <StaticImage 
        src="../img/logo-header.jpg"
        alt="header logo"
        placeholder="tracedSVG"
        className="header-img"/>
    </HeaderWrapper>
  )
};

export default Header;