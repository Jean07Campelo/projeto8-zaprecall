import React from "react";

import HomeScreen from "./HomeScreen";
import Flashcards from "./Flashcards";

export default function App() {
    const [screen, setScreen] = React.useState(true);

    return (
      <>
        {screen ? 
        <HomeScreen setScreen={setScreen} /> 
        :
        <Flashcards />}
       
      </>
    )
  }


  let cards = [
    {
      question: "O que é JSX?",
      response: "Uma extensão de linguagem do JavaScript",
    },
    {
      question: "O React é ...",
      response: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      question: "Componentes devem iniciar com ...",
      response: "letra maiúscula",
    },
    {
      question: "Podemos colocar ... dentro do JSX",
      response: "expressões",
    },
  ];

  cards = cards.sort(()=> Math.random() - 0.5)