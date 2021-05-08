import React from "react";
import styled from "styled-components";
import { breakpoints } from "../style/theme";

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
`;
const Input = styled.input`
  width: 80%;
  border: 0;
  border-bottom: 2px solid black;
  background: transparent;
  margin-bottom: 2rem;
  outline: none;
`;
const TextArea = styled.textarea`
  width: 80%;
  border: 0;
  border-bottom: 2px solid black;
  background: transparent;
  margin-bottom: 2rem;
  outline: none;
`;

const Button = styled.button`
  width: 150px;
  height: 70px;
  outline: none;
  cursor: pointer;
  background: white;
  color: black;
  transition: 0.5s;
  font-size: 24px;
  border-radius: 5px;
  &:hover {
    background: black;
    border: none;
    color: white;
    font-size: 28px;
    transform: scale(1.1);
  }
  
  @media (max-width: ${breakpoints.mobileL}px) {
    width: 100px;
    height: 50px;
  }


`;

const ContactForm = () => (
  <FromWrapper>
    <Title> Stay in touch </Title>
    <Form name="Contact Form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="Contact Form" />

      <Input type="text" name="name" placeholder="Nombre" autocomplete="off" />

      <Input type="email" name="email" placeholder="Email" autocomplete="off" />
      <TextArea name="mensaje" placeholder="Mensaje" />

      <Button type="submit">Enviar</Button>
    </Form>
  </FromWrapper>
);

export default ContactForm;
