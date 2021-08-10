import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const ServicesWrapper = styled.section`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-top: 12rem;
  width: 100%;
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    display: block;
    margin-top: 0;
  }
`;

const ColumnWrapper = styled.div`
  flex: 1;
  margin-right: 1rem;

  .service-image {
    height: 54rem;

    @media (max-width: 768px) {
      height: 20rem;
    }
  }

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const ColumnWrapper2 = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Ul = styled.ul`
  li {
    margin: 1rem;
    margin-bottom: 2rem;
  }
  li:nth-child(1)::marker {
    content: "📧 ";
  }

  li:nth-child(2)::marker {
    content: "👷🏽‍♂️ ";
  }

  li:nth-child(2) {
    margin-bottom: 1rem;
  }

  li:nth-child(4)::marker {
    content: "💵 ";
  }

  li:nth-child(5)::marker {
    content: "🏗️ ";
  }

  li:nth-child(6)::marker {
    content: "🏡 ";
  }

  li:nth-child(1)::marker {
    content: "📸 ";
  }

  li:nth-child(1)::marker {
    content: "🗺️ ";
  }

  li:nth-child(1)::marker {
    content: "🎞️ ";
  }
`;

const SubUl = styled.ul`
  li {
    margin: 0;
  }
  li:last-child {
    margin-bottom: 2rem;
  }

  li:nth-child(1)::marker {
    content: "📸 ";
  }

  li:nth-child(2)::marker {
    content: "🗺️ ";
  }

  li:nth-child(2) {
    margin-bottom: 0;
  }

  li:nth-child(3)::marker {
    content: "🎞️ ";
  }
`;

const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const OnlineProject = () => (
  <Layout>
    <ServicesWrapper>
      <ColumnWrapper>
        <StaticImage
          src="../img/proyecto-online.jpg"
          alt="servicio proyecto online"
          placeholder="tracedSVG"
          className="service-image"
        />
      </ColumnWrapper>
      <ColumnWrapper2>
        <H2> Proyectos online (o presencial) </H2>
        <p>
          Se trata de proyectos 100% personalizados Diseño uno o varios
          ambientes de tu casa a distancia, sin necesidad de reunirnos
          presencialmente, ganando agilidad. Te entrego planos, presentación y
          un catálogo con los productos que necesitás para que puedas ejecutarlo
          a tu ritmo
        </p>
        <br></br>
        <h3> Qué recibirás: </h3>
        <p> Planos 2D con distribución del mobiliario </p>
        <ul>
          <li>
            Moodboard con paleta de colores, materialidad e imágenes de
            referencia
          </li>
          <li> Catálogo con links de compras de: </li>
          <ul>
            <li> muebles </li>
            <li> accesorios: plantas: alfombras, objetos decorativos </li>
            <li> iluminación </li>
            <li> pisos y revestimientos (si corresponde) </li>
          </ul>
        </ul>
        <br></br>
        <h3> Cómo funciona:</h3>
        <Ul>
          <li>
            Escribime a&nbsp;
            <a
              href="mailto:contacto@florencianietointeriores.com"
              target="_blank"
              rel="noreferrer"
            >
              contacto@florencianietointeriores.com
            </a>
            &nbsp;y coordinamos una reunión virtual por videollamada para que me
            cuentes tus necesidades, presupuesto y gustos
          </li>
          <li> Necesito de tu parte: </li>
          <SubUl>
            <li> fotos y/o vídeos actuales,</li>
            <li>
              plano con medidas (con un boceto a mano alzada nos será
              suficiente),
            </li>
            <li> imágenes de referencia o carpeta de Pinterest (opcional) </li>
          </SubUl>
          <li>Te paso el presupuesto y si estás de acuerdo avanzamos</li>
          <li>
            ¡Manos a la obra! Me pondré a trabajar en tu proyecto y nos
            mantendremos en contacto mediante reuniones intermedias para ir
            mostrándote el avance y hacer modificaciones si fueran necesarias
          </li>
          <li>
            Coordinamos una reunión por videollamada para presentarte la
            propuesta final
          </li>
        </Ul>
      </ColumnWrapper2>
    </ServicesWrapper>
  </Layout>
);

export default OnlineProject;
