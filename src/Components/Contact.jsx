import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 15em 2.5em 0em 2.5em;
  background-color: darkgrey;
  color: white;
  position: absolute;
  top: 550vh;

  input {
    padding: 0.3em 0.3em 0.3em 0.3em;
    font-size: 18px;
    border: none;
    border-radius: 10px;
  }
  @media screen and (min-width: 1024px) {
    margin-right: 13%;
    margin-left: 13%;
    padding-bottom: 15em;
  }
  @media screen and (min-width: 1440px) {
    justify-content: center;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const ContactTitle = styled.h1`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    font-size: 55px;
  }
`;
const ContactInformation = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
  }
`;
const RightSection = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;
const NameLable = styled.div`
  padding-bottom: 0.5em;
  font-size: 18px;
`;
const NameInput = styled.div`
  padding-bottom: 1.5em;
  input {
    width: 100%;
    max-width: 500px;
  }
  @media screen and (min-width: 1024px) {
    padding-right: 50px;
  }
`;

const LeftSection = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;

const EmailLable = styled.div`
  padding-bottom: 0.5em;
  font-size: 18px;
`;
const EmailInput = styled.div`
  padding-bottom: 1.5em;
  input {
    width: 100%;
    max-width: 500px;
  }
`;
const MessageLable = styled.div`
  padding-bottom: 0.5em;
  font-size: 18px;
`;
const MessageInput = styled.div`
  padding-bottom: 1.5em;
  input {
    width: 100%;
    padding-bottom: 10em;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: right;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Get in Touch</ContactTitle>
      <ContactInformation>
        <RightSection>
          <NameLable>Name</NameLable>
          <NameInput>
            <input></input>
          </NameInput>
        </RightSection>
        <LeftSection>
          <EmailLable>Email</EmailLable>
          <EmailInput>
            <input></input>
          </EmailInput>
        </LeftSection>
      </ContactInformation>
      <MessageLable>Message</MessageLable>
      <MessageInput>
        <input></input>
      </MessageInput>
      <Button>
        <button>Send</button>
      </Button>
    </ContactContainer>
  );
};

export default Contact;
