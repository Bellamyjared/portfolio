import React from "react";
import styled from "styled-components";

import Github from "../../Images/NavImages/GithubLogo.svg";
import Email from "../../Images/NavImages/EmailLogo.svg";
import LinkedIn from "../../Images/NavImages/LinkedInLogo.svg";

const NavLinksImg = ({ ShowNavLinks }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center" }}
      className="invertSVG"
    >
      <a
        href={ShowNavLinks ? "https://www.github.com" : null}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={ShowNavLinks ? "" : "DisablingNavLinks"}
          alt="Github"
          src={Github}
        />
      </a>

      <a
        href={ShowNavLinks ? "https://www.linkedin.com" : null}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={ShowNavLinks ? "" : "DisablingNavLinks"}
          alt="LinkedIn"
          src={LinkedIn}
        />
      </a>
      <a href={ShowNavLinks ? "mailto:Bellamyjared@gmail.com" : null}>
        <img
          className={ShowNavLinks ? "" : "DisablingNavLinks"}
          alt="Email"
          src={Email}
        />
      </a>
    </div>
  );
};

export default NavLinksImg;
