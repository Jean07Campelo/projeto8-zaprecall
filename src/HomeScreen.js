import React from "react";

import Flashcards from "./Flashcards";

export default function HomeScreen() {
  const img = "../assets/logo.png";
  const description = "Logo ZapRecall,um raio amarelo com contorno vermelho";

  const [screen, setScreen] = React.useState(false);
  const [isTurned, setIsTurned] = React.useState(false);

  const cards = [
    {
      question: "O que é JSX?",
      response: "Uma extensão de linguagem do JavaScript",
      turned: {isTurned},
    },
    {
      question: "O React é ...",
      response: "uma biblioteca JavaScript para construção de interfaces",
      turned: {isTurned},
    },
    {
      question: "Componentes devem iniciar com ...",
      response: "letra maiúscula",
      turned: {isTurned},
    },
    {
      question: "Podemos colocar ... dentro do JSX",
      response: "expressões",
      turned: {isTurned},
    },
  ];

  return (
    <>
      {screen ? (
        <>
          <img src={img} alt={description}></img>
          <h1>ZapRecall</h1>
          <button onClick={() => setScreen(!screen)}>Iniciar Recall!</button>
        </>
      ) : (
        <Flashcards cards={cards} isTurned={isTurned} setIsTurned={setIsTurned} />
      )}
    </>
  );

  
}

