import React from "react";

import Github from "../Images/NavImages/GithubLogo.svg";
import Email from "../Images/NavImages/EmailLogo.svg";
import LinkedIn from "../Images/NavImages/LinkedInLogo.svg";

const NavImgLinks = ({ ShowNavLinks }) => {
  return (
    <div>
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

export default NavImgLinks;
