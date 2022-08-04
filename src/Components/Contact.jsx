import React, { useState } from "react";
import styled from "styled-components";
import DataBase from "./firebase";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Loading, setLoading] = useState(false);
  const [ContactMessage, setContactMessage] = useState("");

  const textCheckThing = () => {
    setContactMessage("");
    if (Name != "" && Email != "" && Message != "") {
      handleSubmit();
    } else {
      let errList = [];
      if (Name === "") {
        errList = [errList + ` Name`];
      }
      if (Email === "") {
        errList = [errList + " Email"];
      }
      if (Message === "") {
        errList = [errList + " Message"];
      }

      setContactMessage("Please fill in the following inputs: " + errList);
    }
  };

  const handleSubmit = async () => {
    if (!Loading) {
      console.log("pressed");
      setLoading(true);
      if (await DataBase(Name, Email, Message)) {
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
        setContactMessage("Thanks for getting into contact!");
      } else {
        setLoading(false);
        setContactMessage(
          "There was an error with your request, please try again later."
        );
      }
    }
  };

  return (
    <ContactContainer>
      <ThisIsATest>
        <ContactTitle>Get In Touch</ContactTitle>
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
          <BottomContainer>
            <SubmitMessage>{ContactMessage}</SubmitMessage>
            <Button Loading={Loading}>
              <button
                onClick={() => {
                  textCheckThing();
                }}
              >
                Send
              </button>
            </Button>
          </BottomContainer>
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
    width: 100%;
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
    width: 100%;
    margin-right: 0.25em;
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

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SubmitMessage = styled.div`
  text-align: center;
  width: 100%;
`;

const Button = styled.div`
  display: flex;
  width: 50%;
  justify-content: right;
  button {
    background-color: ${(props) => (props.Loading ? "lightgreen" : "white")};
    color: #000;
    font-size: 1em;
    cursor: pointer;
  }
  @media screen and (min-width: 1024px) {
    width: 30%;
  }
`;
