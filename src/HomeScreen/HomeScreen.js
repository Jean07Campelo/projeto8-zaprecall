import React from "react";

import logo from "../assets/logo.png";
import './style.css'

export default function HomeScreen({ setScreen }) {
  const description = "Logo ZapRecall, um raio amarelo com contorno vermelho";

  return (
    <div className="items">
      <div className="home">
        <img src={logo} alt={description}></img>
        <h1>ZapRecall</h1>
        <button
          onClick={() => {
            setScreen(false);
          }}
        >
          Iniciar Recall!
        </button>
      </div>
    </div>
  );
}
