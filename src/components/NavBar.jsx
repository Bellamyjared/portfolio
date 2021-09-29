import React from "react";
import { Link } from "react-scroll";

function NavBar(props) {
  return (
    <div className=" navbar navbar-dark bg-dark">
      <Link to="/">home</Link>
      <Link to="test" smooth={true} duration={500}>
        Projects
      </Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default NavBar;
