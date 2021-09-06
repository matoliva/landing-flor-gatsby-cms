import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { breakpoints } from "../style/theme";
import ProjectsGrid from "../components/ProjectsGrid";
import Title from "../components/Title";

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const GridWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Projects = () => (
  <Layout>
    <TitleWrapper>
      <Title> Proyectos </Title>
    </TitleWrapper>
    <GridWrapper>
      <ProjectsGrid />
    </GridWrapper>
  </Layout>
);

export default Projects;
