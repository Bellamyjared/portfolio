import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 15em 2.5em 0em 2.5em;
  color: white;

  input {
    width: 70%;
    padding-top: 1.5em;
    border: none;
    border-radius: 10px;
  }
  @media screen and (min-width: 1024px) {
    margin-right: 13%;
    margin-left: 13%;
    padding-bottom: 13em;
  }
`;
const ContactTitle = styled.h1`
  display: flex;
  justify-content: center;
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
