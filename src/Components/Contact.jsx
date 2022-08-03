import React, { useState } from "react";
import styled from "styled-components";
import DataBase from "./firebase";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log(Name);
    DataBase(Name, Email, Message);
  };

  return (
    <ContactContainer>
      <ThisIsATest>
        <ContactTitle>Get in Touch</ContactTitle>
        <ContactInformation>
          <RightSection>
            <NameLable>Name</NameLable>
            <NameInput>
              <input
                placeholder="Name"
                value={Name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </NameInput>
          </RightSection>
          <LeftSection>
            <EmailLable>Email</EmailLable>
            <EmailInput>
              <input
                placeholder="Email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </EmailInput>
          </LeftSection>
        </ContactInformation>
        <MessageContainer>
          <MessageLable>Message</MessageLable>
          <MessageInput>
            <input
              placeholder="Message"
              value={Message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></input>
          </MessageInput>
          <Button>
            <button
              onClick={() => {
                handleSubmit();
              }}
            >
              Send
            </button>
          </Button>
        </MessageContainer>
      </ThisIsATest>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  color: white;

  padding: 5em 0em 5em 0em;
  width: 100%;

  input {
    padding: 0.3em 0.3em 0.3em 0.3em;
    font-size: 18px;
    border: none;
    border-radius: 10px;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    padding-bottom: 15em;
  }
`;

const ThisIsATest = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 65%;
    max-width: 800px;
  }
`;

const ContactTitle = styled.h1`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    font-size: 55px;
    width: 100%;
  }
`;
const ContactInformation = styled.div`
  display: grid;
  justify-items: center;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

const RightSection = styled.div`
  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;
const NameLable = styled.div`
  padding-bottom: 0.5em;
  font-size: 18px;
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;
const NameInput = styled.div`
  padding-bottom: 1.5em;
  input {
    width: 80vw;
    max-width: 500px;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    input {
      width: 80%;
      max-width: none;
    }
  }
`;

const LeftSection = styled.div`
  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;

const EmailLable = styled.div`
  padding-bottom: 0.5em;
  font-size: 18px;
`;
const EmailInput = styled.div`
  padding-bottom: 1.5em;
  input {
    width: 80vw;
    max-width: 500px;
  }
  @media screen and (min-width: 1024px) {
    padding-bottom: 2em;
    input {
      width: 100%;
      max-width: none;
      padding-right: 0em;
      padding-left: 0em;
    }
  }
`;

const MessageContainer = styled.div`
  display: grid;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;

const MessageLable = styled.div`
  padding-bottom: 0.5em;
  font-size: 18px;
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;
const MessageInput = styled.div`
  padding-bottom: 1.5em;
  input {
    width: 80vw;
    max-width: 500px;
    padding-bottom: 10em;
  }
  @media screen and (min-width: 1024px) {
    display: flex;

    width: 100%;
    input {
      max-width: none;
      padding-bottom: 15em;
    }
  }
`;

const Button = styled.div`
  button {
    cursor: pointer;
  }
  display: flex;
  justify-content: right;
  button {
    background-color: white;
    color: #000;
    font-size: 1em;
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;
