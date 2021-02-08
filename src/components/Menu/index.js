import React from "react";
import Logo from "../../assets/img/lepschflix.png";
import "./Menu.css";
//import ButtonLink from "./components/ButtonLink";
import Button from "./components/Button";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Lepschflix Logo" />
      </a>
      <Button as="a" className="ButtonLink" href="/" alt="Novo Vídeo">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
