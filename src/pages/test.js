import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import NextIcon from '../icons/angle-right-solid.svg'
import PrevIcon from '../icons/angle-left-solid.svg'

const ProjectTitle = styled.h1`
  color: ${({ theme }) => theme.colors.font};
  font-weight: 100;
`
const PageWrapper = styled.section`
  display: flex;
  height: 100vh;
  width: 70vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 15px;
  grid-template-areas:
    "img-1 img-1 img-2 img-3"
    "img-1 img-1 img-4 img-5";
  margin: 40px 0;
  img {
    cursor: pointer;
    :hover {
      filter: grayscale(80%);
    }
  }
`

const Img1 = styled.div`
  grid-area: img-1;
`
const Img2 = styled.div`
  grid-area: img-2;
`
const Img3 = styled.div`
  grid-area: img-3;
`
const Img4 = styled.div`
  grid-area: img-4;
`
const Img5 = styled.div`
  grid-area: img-5;
`

const ProjectDescription = styled.article`
  color: ${({ theme }) => theme.colors.font};
  font-size: ${({ theme }) => theme.size.l};
  font-weight: 100;
  line-height: 2;
`

const TestPage = () => {
  const [isGalleryOpen, setGalleryOpen] = useState(false)
  const [currentImg, setCurrentImg] = useState(0)

  const handleGalleryOpen = (currentImg = 0) => {
    setGalleryOpen(true)
    setCurrentImg(currentImg)
  }

  return (
    <Layout>
      {isGalleryOpen ? <ImageGallery currentImg={currentImg} closeGallery={() => setGalleryOpen(false)}/> : null}
      <PageWrapper>
        <ProjectTitle>Project Title - TEST</ProjectTitle>
        <ImagesGrid onClick={handleGalleryOpen}>
          <Img1 onClick={() => handleGalleryOpen(0)}><StaticImage src="../../static/img/project-test-1.jpg" alt="test-1" height={520} width={520}/></Img1>
          <Img2 onClick={() => handleGalleryOpen(1)}><StaticImage src="../../static/img/project-test-2.jpg" alt="test-2" height={250} width={250} /></Img2>
          <Img3 onClick={() => handleGalleryOpen(2)}><StaticImage src="../../static/img/project-test-3.jpg" alt="test-3" height={250} width={250} /></Img3>
          <Img4 onClick={() => handleGalleryOpen(3)}><StaticImage src="../../static/img/project-test-4.jpg" alt="test-4" height={250} width={250} /></Img4>
          <Img5 onClick={() => handleGalleryOpen(4)}><StaticImage src="../../static/img/project-test-5.jpg" alt="test-5" height={250} width={250} /></Img5>
        </ImagesGrid>
        <ProjectDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          fringilla lectus eget dignissim fermentum.Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Duis
          fringilla lectus eget dignissim fermentum. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </ProjectDescription>
      </PageWrapper>
    </Layout>
  )
}

export default TestPage


const GalleryWrapper = styled.section`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(0,0,0,0.9);
`
const ImageGallery = ({ closeGallery, current = 0 }) => {
  const [currentImg, setCurrentImg] = useState(current)
  React.useEffect(() => setCurrentImg(current), [current])
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          Images {
            text
            image {
              childImageSharp {
                gatsbyImageData(
                  height: 700
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`)

  const images = data.allMarkdownRemark.nodes[0].frontmatter.Images?.map(img => getImage(img.image))

  const handleNextImg = (e) => {
    e.stopPropagation()
    if (currentImg !== images.length) {
      setCurrentImg(currentImg + 1)
    }
  }

  const handlePrevImg = (e) => {
    e.stopPropagation()
    if (currentImg !== 0) {
      setCurrentImg(currentImg - 1)
    }
  }

  return (
    <GalleryWrapper onClick={closeGallery}>
      <PrevIcon onClick={handlePrevImg} color="#FFF" height={50} />
      <GatsbyImage height={700} image={images[currentImg]} style={{transition: "all 4s ease-in-out"}}/>
      <NextIcon onClick={handleNextImg} color="#FFF" height={50} />
    </GalleryWrapper>
  )
}
