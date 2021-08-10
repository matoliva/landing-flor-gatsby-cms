import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { breakpoints } from "../style/theme";

const ServicesWrapper = styled.section`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-top: 12rem;
  width: 100%;
  margin-bottom: 6rem;

  @media (max-width: ${breakpoints.mobile}px) {
    display: block;
    margin-top: 0;
  }
`;

const ColumnWrapper = styled.div`
  flex: 1;
  margin-right: 1rem;

  .service-image {
    height: 54rem;

    @media (max-width: ${breakpoints.mobile}px) {
      height: 20rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}px) {
    margin-right: 0;
  }
`;

const ColumnWrapper2 = styled.div`
  flex: 1;

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 1rem;
  }
`;

const Ul = styled.ul`
  li {
    margin: 1rem;
    margin-bottom: 2rem;

    @media (max-width: ${breakpoints.mobile}px) {
      overflow-wrap: break-word;
    }
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

  li:nth-child(5) {
    margin-bottom: 1rem;
  }

  li:nth-child(6)::marker {
    content: "🏡 ";
  }
`;

const SubUl = styled.ul`
  li {
    margin: 0;

    @media (max-width: ${breakpoints.mobile}px) {
      overflow-wrap: break-word;
    }
  }
  li:last-child {
    margin-bottom: 2rem;
  }

  li:nth-child(1)::marker {
    content: "💬 ";
  }

  li:nth-child(2)::marker {
    content: "📸 ";
  }

  li:nth-child(3)::marker {
    content: "🗺️ ";
  }

  li:nth-child(4)::marker {
    content: "🎞️ ";
  }

  li:nth-child(2) {
    margin-bottom: 0;
  }
`;

const LastSubUl = styled.ul`
  li {
    margin: 0;

    @media (max-width: ${breakpoints.mobile}px) {
      overflow-wrap: break-word;
    }

    li:nth-child(1)::marker {
      content: "🗺️ " !important;
    }

    li:nth-child(2)::marker {
      content: "🎞️ ";
    }
  }

  li:nth-child(4) {
    margin-bottom: 0;
  }
`;

const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: 3rem;

  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 2rem;
    text-align: center;
  }
`;

const Advice = () => (
  <Layout>
    <ServicesWrapper>
      <ColumnWrapper>
        <StaticImage
          src="../img/asesoramiento.jpg"
          alt="servicio asesoramiento"
          placeholder="tracedSVG"
          className="service-image"
        />
      </ColumnWrapper>
      <ColumnWrapper2>
        <H2> Asesoramiento </H2>
        <p>
          Se trata de una reunión presencial o por videollamada en la cual
          resuelvo todas tus dudas de él/los ambiente que quieras intervenir.
          Este servicio puede serte útil si: - querés hacer vos misma/o un
          cambio en tu casa pero no sabés qué te conviene hacer, qué colores
          usar, si cambiar los muebles que tenés o simplemente hay que cambiar
          la distribución, etc
        </p>
        <br></br>
        <h3> Obtendrás una idea clara de: </h3>
        <ul>
          <li>Cuál es la mejor distribución para cada espacio,</li>
          <li> Qué muebles necesitas agregar, modificar o descartar, </li>
          <li>
            Cuál es la paleta de colores ideal para resaltar las sensaciones que
            quieras transmitir,
          </li>
          <li>
            Cuáles son los objetos y accesorios adecuados para lograr un espacio
            cohesivo, agradable y funcional
          </li>
        </ul>
        <p>
          Con estas herramientas, podrás llevar a cabo el nuevo diseño interior
          de tu casa a tu ritmo y con tu presupuesto
        </p>
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
            <li> que me cuentes qué quieres hacer, modificar o mejorar, </li>
            <li>fotos y/o vídeos actuales,</li>
            <li>
              planos con medidas (con un boceto a mano alzada será suficiente),
            </li>
            <li> imágenes de referencia o carpeta de Pinterest (opcional) </li>
          </SubUl>
          <li>Te paso el presupuesto y si estás de acuerdo avanzamos</li>
          <li>
            Coordinamos la fecha y horario de la videollamada, en la cual te
            expondré mis propuestas y tras la cual te entregaré:
          </li>
          <LastSubUl>
            <li> plano informativo a modo de croquis (si aplica), </li>
            <li> imágenes de referencia de los elementos a incorporar. </li>
          </LastSubUl>
        </Ul>
      </ColumnWrapper2>
    </ServicesWrapper>
  </Layout>
);

export default Advice;
