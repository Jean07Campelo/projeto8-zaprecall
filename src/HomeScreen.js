import React from "react";

import Flashcards from "./Flashcards";
import logo from "./assets/logo.png";

export default function HomeScreen() {
  const description = "Logo ZapRecall, um raio amarelo com contorno vermelho";

  const [screen, setScreen] = React.useState(true);

  return (
    <>
      {screen ? (
        <>
          <img src={logo} alt={description}></img>
          <h1>ZapRecall</h1>
          <button onClick={() => setScreen(!screen)}>Iniciar Recall!</button>
        </>
      ) : (
        <Flashcards cards={cards} setCards={setCards} />
      )}
    </>
  );
}
