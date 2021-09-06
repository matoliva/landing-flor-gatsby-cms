import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Title from "../components/Title";
import ProjectsGrid from "../components/ProjectsGrid";

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 0;
`;

const ProjectsGridWrapper = styled.div`
  margin-bottom: 2rem;
`;

const Button = styled(Link)`
  height: 40px;
  outline: none;
  cursor: pointer;
  background: white;
  color: black;
  transition: 0.5s;
  font-size: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  border: 1px solid black;
  padding: 1rem 2rem;
  text-decoration: none;
  width: fit-content;
  height: fit-content;

  &:hover {
    background: black;
    color: white;
  }
`;

const ProjectsSection = () => (
  <>
    <TitleWrapper>
      <Title>Proyectos</Title>
    </TitleWrapper>
    <ProjectsGridWrapper>
      <ProjectsGrid />
    </ProjectsGridWrapper>
    <Button to="projects">Ver más</Button>
  </>
);

export default ProjectsSection;
