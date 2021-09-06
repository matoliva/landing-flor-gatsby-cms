import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import { Services } from "../components/Services";
import ProjectsSection from "../components/ProjectsSection";

const HomeWrapper = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;



const Home = ({ data }) => (
  <Layout>
    <HomeWrapper>
      <Hero />
    </HomeWrapper>
    <ProjectsSection />
    <Services />
    <ContactForm />
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
`;

export default Home;
