import React from "react";

import Flashcards from "./Flashcards";

export default function HomeScreen() {
  const img = "../assets/logo.png";
  const description = "Logo ZapRecall,um raio amarelo com contorno vermelho";

  const [screen, setScreen] = React.useState(false);

  return (
    <>
      {screen ? (
        <>
          <img src={img} alt={description}></img>
          <h1>ZapRecall</h1>
          <button onClick={() => setScreen(!screen)}>Iniciar Recall!</button>
        </>
      ) : (
        <Flashcards />
      )}
    </>
  );
}
