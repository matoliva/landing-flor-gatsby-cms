import React from 'react';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 250px;

    .header-img {
        width: 600px;
        height: 350px;
    }
`

const Header = () => (
  <HeaderWrapper>
      <StaticImage 
        src="../img/logo-header-desktop.png"
        alt="header logo"
        placeholder="tracedSVG"
        className="header-img"/>
  </HeaderWrapper>
);

export default Header;