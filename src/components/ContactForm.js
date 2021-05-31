import React from "react";
import styled from "styled-components";
import { breakpoints } from "../style/theme";
//import ReCAPTCHA from "react-google-recaptcha";

const FromWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 4rem;
`;

const Title = styled.h3`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 30px;
  font-weight: 100;
  letter-spacing: 15px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 4rem;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 70%;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${breakpoints.mobile}px) {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 80%;
  border: 0;
  border-bottom: 1px solid black;
  background: transparent;
  margin-bottom: 2rem;
  outline: none;
`;

const TextArea = styled.textarea`
  width: 80%;
  border: 0;
  border-bottom: 1px solid black;
  background: transparent;
  margin-bottom: 2rem;
  outline: none;
  resize: none;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  outline: none;
  cursor: pointer;
  background: white;
  color: black;
  transition: 0.5s;
  font-size: 1rem;
  border-radius: 5px;
  margin-top: 2rem;
  &:hover {
    background: black;
    border: none;
    color: white;
    font-size: 1.2rem;
    transform: scale(1.1);
  }
`;

const ContactForm = () => (
  <FromWrapper>
    <Title> Contacto </Title>
    <Form name="Contact Form" method="POST" data-netlify="true" action="/" /* data-netlify-recaptcha="true" */>
      <input type="hidden" name="form-name" value="Contact Form" />

      <Input type="text" name="name" placeholder="Nombre *" autocomplete="off" required/>
      <Input type="email" name="email" placeholder="Email *" autocomplete="off" required/>
      <Input type="text" name="phone" placeholder="Telefono" autocomplete="off"/>
      <TextArea name="mensaje" placeholder="Mensaje *" rows="4" required/>
      
      {/* <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} /> */}

      <Button type="submit">Enviar</Button>
    </Form>
  </FromWrapper>
);

export default ContactForm;
