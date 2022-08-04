import React from "react";
import styled from "styled-components";

import Github from "../../Images/NavImages/GithubLogo.svg";
import Email from "../../Images/NavImages/EmailLogo.svg";
import LinkedIn from "../../Images/NavImages/LinkedInLogo.svg";

const NavLinksImg = ({ ShowNavLinks, EnableHref }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center" }}
      className="invertSVG"
    >
      <a
        href={
          ShowNavLinks && EnableHref ? "https://github.com/Bellamyjared" : null
        }
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
        href={
          ShowNavLinks && EnableHref
            ? "https://www.linkedin.com/in/bellamyjared/"
            : null
        }
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={ShowNavLinks ? "" : "DisablingNavLinks"}
          alt="LinkedIn"
          src={LinkedIn}
        />
      </a>
      <a
        href={
          ShowNavLinks && EnableHref ? "mailto:Bellamyjared@gmail.com" : null
        }
      >
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
