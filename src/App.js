import React from "react";

import HomeScreen from "./HomeScreen";
import Flashcards from "./Flashcards";

export default function App() {
    const [screen, setScreen] = React.useState(false);

    return (
      <>
        {screen ? 
        <HomeScreen setScreen={setScreen} /> 
        :
        <Flashcards cards={cards}/>}
       
      </>
    )
  }


  let cards = [
    {
      question: "O que é JSX?",
      response: "Uma extensão de linguagem do JavaScript",
      open: 'no',
    },
    {
      question: "O React é ...",
      response: "uma biblioteca JavaScript para construção de interfaces",
      open: 'no',
    },
    {
      question: "Componentes devem iniciar com ...",
      response: "letra maiúscula",
      open: 'no',
    },
    {
      question: "Podemos colocar ... dentro do JSX",
      response: "expressões",
      open: 'no',
    },
  ];

  cards = cards.sort(()=> Math.random() - 0.5)