import React from "react";
import styled from "styled-components";

const ContactTitle = styled.div``;
const ContactInformation = styled.div``;
const NameLable = styled.div``;
const NameInput = styled.div``;
const EmailLable = styled.div``;
const EmailInput = styled.div``;
const MessageInformation = styled.div``;
const MessageLable = styled.div``;
const MessageInput = styled.div``;
const Button = styled.div``;

const Contact = () => {
  return (
    <div>
      <ContactTitle>Get in Touch</ContactTitle>
      <ContactInformation>
        <NameLable>Name</NameLable>
        <NameInput></NameInput>

        <EmailLable>Email</EmailLable>
        <EmailInput></EmailInput>
      </ContactInformation>
      <MessageInformation>
        <MessageLable>Message</MessageLable>
        <MessageInput></MessageInput>
      </MessageInformation>
      <Button>Send</Button>
    </div>
  );
};

export default Contact;
