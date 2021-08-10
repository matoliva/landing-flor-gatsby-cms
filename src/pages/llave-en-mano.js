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
    height: 37rem;

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
    content: "💵 ";
  }

  li:nth-child(3)::marker {
    content: "⌨️ ";
  }

  li:nth-child(4)::marker {
    content: "🏗️ ";
  }

  li:nth-child(5)::marker {
    content: "🏡 ";
  }
`;

const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: 3rem;
`;

const keyOnHand = () => (
  <Layout>
    <ServicesWrapper>
      <ColumnWrapper>
        <StaticImage
          src="../img/llave-en-mano.jpg"
          alt="servicio llave en mano"
          placeholder="tracedSVG"
          className="service-image"
        />
      </ColumnWrapper>
      <ColumnWrapper2>
        <H2> Diseño y Decoración Integral con llave en mano </H2>
        <p>
          Si quieres tener absolutamente todo resuelto, realizo un anteproyecto
          con la idea general en la cual trabajamos en conjunto ya que es 100%
          personalizado y una vez que tenemos todo definido realizo el proyecto
          que es la dirección de obra, es llave en mano porque me ocupo de todo,
          la gestión de compra del mobiliario y accesorios, los gremios que van
          a hacer el trabajo asignado y todos los detalles para que no tengas
          que preocuparte por nada y puedas tener el/los ambientes listos para
          disfrutarlos.
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
            &nbsp;y coordinamos una reunión para que me cuentes tus necesidades,
            presupuesto y gustos
          </li>
          <li>Te paso el presupuesto y si estas de acuerdo avanzamos</li>
          <li>
            Realizo un anteproyecto el cual lo vamos trabajando en conjunto
            mediante varias reuniones para que podamos obtener el resultado
            deseado
          </li>
          <li>
            Una vez finalizado comenzamos con la etapa del proyecto en donde voy
            a llevar a cabo todo lo definido en la etapa anterior
          </li>
          <li>
            Me ocupo de todo y te “entrego” la llave de tu casa para que puedas
            disfrutar del gran cambio que se convirtió en realidad.
          </li>
        </Ul>
      </ColumnWrapper2>
    </ServicesWrapper>
  </Layout>
);

export default keyOnHand;
