import React from "react";
import styled from "styled-components";
import { Link } from 'gatsby'
import KeyIcon from '../icons/key-solid.svg';
import OnlineIcon from '../icons/globe-americas-solid.svg';
import AdviceIcon from '../icons/people-carry-solid.svg';


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
  //justify-content: center;
  align-items: center;
  width: 20%;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1);

  h3,
  p {
    text-align: center;
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
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
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
    <ServiceWrapper>
      <TitleWrapper>
        <Title> Servicios </Title>
      </TitleWrapper>
      <CardWrapper>
        <Card>
          <KeyIcon height={50} />
          <h3>Diseño y Decoración Integral con llave en mano</h3>
          <P>
            Si quieres tener absolutamente todo resuelto, realizo un
            anteproyecto con la idea general en la cual trabajamos en conjunto
            ya que es 100% personalizado y una vez que tenemos todo definido
            realizo el proyecto que es la dirección de obra, es llave en mano
            porque me ocupo de todo, la gestión de compra del mobiliario y
            accesorios, los gremios que van a hacer el trabajo asignado y todos
            los detalles para que no tengas que preocuparte por nada y puedas
            tener el/los ambientes listos para disfrutarlos.
          </P>
          <Button to="llave-en-mano"> Conocé más </Button>
        </Card>
        <Card>
          <OnlineIcon height={50}/>
          <h3>Proyectos online (o presencial)</h3>
          <P>
            Si quieres tener absolutamente todo resuelto, realizo un
            anteproyecto con la idea general en la cual trabajamos en conjunto
            ya que es 100% personalizado y una vez que tenemos todo definido
            realizo el proyecto que es la dirección de obra, es llave en mano
            porque me ocupo de todo, la gestión de compra del mobiliario y
            accesorios, los gremios que van a hacer el trabajo asignado y todos
            los detalles para que no tengas que preocuparte por nada y puedas
            tener el/los ambientes listos para disfrutarlos.
          </P>
          <Button to="proyecto-online"> Conocé más </Button>
        </Card>
        <Card>
          <AdviceIcon height={50}/>
          <h3>Asesoramiento</h3>
          <br></br>
          <P>
            Si quieres tener absolutamente todo resuelto, realizo un
            anteproyecto con la idea general en la cual trabajamos en conjunto
            ya que es 100% personalizado y una vez que tenemos todo definido
            realizo el proyecto que es la dirección de obra, es llave en mano
            porque me ocupo de todo, la gestión de compra del mobiliario y
            accesorios, los gremios que van a hacer el trabajo asignado y todos
            los detalles para que no tengas que preocuparte por nada y puedas
            tener el/los ambientes listos para disfrutarlos.
          </P>
          <Button to="advice"> Conocé más </Button>
        </Card>
      </CardWrapper>
    </ServiceWrapper>
  );
};
