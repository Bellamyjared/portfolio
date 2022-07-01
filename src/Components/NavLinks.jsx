import React from "react";
import { useScroll } from "@react-three/drei";

const NavLinks = ({ test, ChromeWheel }) => {
  const data = useScroll(test);
  // console.log(data);

  // function ChromeWheel() {
  //   var evt = document.createEvent("MouseEvents");
  //   evt.initEvent("mousewheel", true, true);
  //   evt.wheelDelta = 120;
  //   testing.dispatchEvent(evt);
  //   console.log("test");
  // }
  // const moveTest = () => {
  //   console.log(data);
  //   data.offset = 0.2;
  //   data.scroll.current = 0.2;
  // };

  function testing() {
    console.log(window.target.scrollTop);
  }

  return (
    <div onScroll={(e) => testing()}>
      <button id="btn" onClick={() => ChromeWheel()}>
        Home
      </button>
      <a href="#projects">Projects</a>
      <a href="#tech">Tech</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default NavLinks;
