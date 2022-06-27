import React from "react";
import { useScroll } from "@react-three/drei";

const NavLinks = ({ test }) => {
  const data = useScroll(test);
  // console.log(data);

  function ChromeWheel() {
    var evt = document.createEvent("MouseEvents");
    evt.initEvent("mousewheel", true, true);
    evt.wheelDelta = 120;
    document.dispatchEvent(evt);
  }

  const moveTest = () => {
    console.log(data);
    data.offset = 0.2;
    data.scroll.current = 0.2;
  };
  return (
    <>
      <button onClick={() => ChromeWheel()}>Home</button>
      <a href="#projects">Projects</a>
      <a href="#tech">Tech</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </>
  );
};

export default NavLinks;
