import React from "react";

import styled from "styled-components";




function App() {
  
    return (
      <>
      <Header>
        <NavBar>
          <Logo/>
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
      </>
    );
  }


export default App;
