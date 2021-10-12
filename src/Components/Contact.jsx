import React from "react";

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
