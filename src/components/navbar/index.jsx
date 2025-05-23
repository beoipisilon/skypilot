// src/components/Button.jsx
import React from "react";
import { Container } from "./styles";

const NavBar = () => {
  return (
    <Container>
      <img id="logo" src="/logo.png" />
      <div className="links">
        <a>Drones</a>
        <a>Acessórios</a>
        <a>FAQ</a>
      </div>
      <button className="action">COMPRE</button>
    </Container>
  );
};

export default NavBar;
