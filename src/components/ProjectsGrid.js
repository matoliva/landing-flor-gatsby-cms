import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { v4 as id } from 'uuid'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 50vh);
  grid-template-areas:
    "img0 img0 img1 img2"
    "img0 img0 img3 img4"
    "img5 img5 img6 img6"
    "img7 img7 img6 img6";
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 50vh);
    grid-template-areas:
      "img0"
      "img1"
      "img2"
      "img3"
      "img4"
      "img5"
      "img6"
      "img7"
      "img8"
    ;
    gap-row: 10px;
  }
`

const ImageWrapper = styled(Link)`
  grid-area: img${props => props.index};
  :hover {
    filter: grayscale(100%);
    cursor: pointer;
  }
`

const Image = styled(GatsbyImage)`
  height: 100%;
`

const ProjectsGrid = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(limit: 8) {
        nodes {
          frontmatter {
            title
            Images {
              text
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.nodes.map(project => {
    const title = project.frontmatter.title
    const coverImg = getImage(project.frontmatter.Images[0].image)
    return { title, coverImg }
  })

  return (
    <Wrapper id="proyects">
      <Grid>
        {projects.map((project, index) => (
          <ImageWrapper to='/test' index={index} key={id()}>
            <Image image={project.coverImg} alt='proyect image'/>
          </ImageWrapper>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default ProjectsGrid
