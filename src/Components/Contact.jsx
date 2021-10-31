import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 10em 2.5em 0em 2.5em;
  color: white;

  input {
    width: 70%;
    padding-top: 1.5em;
    border: none;
    border-radius: 15px;
  }
`;
const ContactTitle = styled.h1`
  display: flex;
  justify-content: center;
`;
const ContactInformation = styled.div``;
const NameLable = styled.div`
  padding-bottom: 0.5em;
  font-size: 18px;
`;
const NameInput = styled.div`
  padding-bottom: 1.5em;
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
        <NameLable>Name</NameLable>
        <NameInput>
          <input></input>
        </NameInput>

        <EmailLable>Email</EmailLable>
        <EmailInput>
          <input></input>
        </EmailInput>
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
