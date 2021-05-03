import React from "react";
import styled from 'styled-components';
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from '../components/Hero'

const HomeWrapper = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Home = ({ data }) => (
  <Layout>
    <HomeWrapper>
      {/* <h1>{data.site.siteMetadata.title}</h1> */}
      <Hero />
    </HomeWrapper>
  </Layout>
);

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Home;
