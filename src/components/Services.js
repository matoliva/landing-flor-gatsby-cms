import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import KeyIcon from "../icons/key-solid.svg";
import OnlineIcon from "../icons/globe-americas-solid.svg";
import AdviceIcon from "../icons/people-carry-solid.svg";

const ServiceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 6rem;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1);

  h3,
  p {
    text-align: center;
  }

  p {
    line-height: 1.8;
  }

  h3 {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    width: 75%;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h3`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 30px;
  font-weight: 100;
  letter-spacing: 15px;
  text-transform: uppercase;
`;

const TitleWrapper = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 150px;
    ${Title} {
      font-size: 24px;
    }
  }
`;

const P = styled.p`
  line-height: 1.5rem;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
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
  margin-top: 2rem;
  border: 1px solid black;
  padding: 1.5rem 1rem 0rem 1rem;
  text-decoration: none;

  &:hover {
    background: black;
    color: white;
  }
`;

export const Services = () => {
  return (
    <ServiceWrapper id="services">
      <TitleWrapper>
        <Title> Servicios </Title>
      </TitleWrapper>
      <CardWrapper>
        <Card>
          <KeyIcon height={50} />
          <h3>Dise??o y Decoraci??n Integral con llave en mano</h3>
          <P>
            ??Me encargo de que absolutamente <strong>TODO</strong> quede
            resuelto! Vos solo ten??s que contarme tus necesidades, gustos y cu??l
            es tu presupuesto. Yo voy a coordinar los gremios, comprar el
            mobiliario o los accesorios que hagan falta y culminar el trabajo,
            para que vos disfrutes de tu hogar y vivas el cambio que hicimos
            realidad.
          </P>
          <Button to="llave-en-mano"> Conoc?? m??s </Button>
        </Card>
        <Card>
          <OnlineIcon height={50} />
          <h3>Proyectos online (o presencial)</h3>
          <P>
            ??Mayor comodidad y dinamismo! Disen??o uno o varios ambientes de tu
            casa a distancia. Te voy a brindar las herramientas necesarias para
            que puedas ejecutar el dise??o a tu ritmo y tengas el hogar que
            siempre so??aste.
          </P>
          <Button to="proyecto-online"> Conoc?? m??s </Button>
        </Card>
        <Card>
          <AdviceIcon height={50} />
          <h3>Asesoramiento</h3>
          <br></br>
          <P>
            Si quer??s hacer un cambio en tu hogar, pero no sab??s por d??nde
            empezar ??Este servicio es ideal para vos! Es muy sencillo: voy a
            resolver todas tus dudas con respecto al/los ambiente/s que quer??s
            intervenir y juntos vamos a definir qu?? es lo que te conviene
            realizar para optimizar tus ideas y potenciar tu presupuesto.
          </P>
          <Button to="asesoramiento"> Conoc?? m??s </Button>
        </Card>
      </CardWrapper>
    </ServiceWrapper>
  );
};
