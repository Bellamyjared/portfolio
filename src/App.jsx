import React, { useState } from "react";

import Projects from "Projects.jsx";
import {
  Header,
  NavBar,
  Logo,
  NavLinks,
  ImageLinks,
  Hero,
  HeroTitle,
  HeroSubTitle,
  CallToAction,
} from "AppStyles.js";

function App() {
  
  const [TechnologyText, setTechnologyText] = useState("Technology");

  return (
    <>
      <Header>
        <NavBar>
          <Logo />
          <NavLinks>
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#tech">Tech</a>
            <a href="#about">About</a>
            <a href="contact">Contact</a>
          </NavLinks>
          <ImageLinks>
            <a src="github" href="github.com"></a>
            <a src="linkedin" href="linkedin.com"></a>
            <a src="email" href="#email"></a>
          </ImageLinks>
        </NavBar>
      </Header>
      <Hero>
        <HeroTitle>Making Technologies Work For You</HeroTitle>
        <HeroSubTitle>Full Stack Development</HeroSubTitle>
        <CallToAction href="project">See More</CallToAction>
      </Hero>
      <Projects>

      </Projects>
      <Technology>
        <BackGroundText>Technology</BackGroundText>
        <TechImages>
          <FrontEnd></FrontEnd>
          <BackEnd></BackEnd>
          <DataBase></DataBase>
        </TechImages>
        <TechLables></TechLables>
      </Technology>
      <About>
        <AboutTitle>About</AboutTitle>
        <AboutContent>
          <AboutImage />
          <AboutParagraph>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockupsLorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and visual
            mockupsLorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and visual
            mockups
          </AboutParagraph>
        </AboutContent>
      </About>
      <Contact>
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
      </Contact>
    </>
  );
}

export default App;
