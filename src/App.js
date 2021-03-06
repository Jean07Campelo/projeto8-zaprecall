import React from "react";

import HomeScreen from "./HomeScreen/HomeScreen";
import Flashcards from "./Flashcards/Flashcards";

export default function App() {
    const [screen, setScreen] = React.useState(true);
    const [status, setStatus] = React.useState([]);
    const [icons, setIcons] = React.useState([]);


    return (
      <>
        {screen ? 
        <HomeScreen setScreen={setScreen} /> 
        :
        <Flashcards cards={cards} 
        status={status} 
        setStatus={setStatus} 
        icons={icons} 
        setIcons={setIcons} />}
        
      </>
    )
  }


  let cards = [
    {
      question: "O que é JSX?",
      response: "Uma extensão de linguagem do JavaScript",
      open: 'no',
      userChoice: '',
    },
    {
      question: "O React é ...",
      response: "uma biblioteca JavaScript para construção de interfaces",
      open: 'no',
      userChoice: '',
    },
    {
      question: "Componentes devem iniciar com ...",
      response: "letra maiúscula",
      open: 'no',
      userChoice: '',
    },
    {
      question: "Podemos colocar ... dentro do JSX",
      response: "expressões",
      open: 'no',
      userChoice: '',
    },
  ];

  cards = cards.sort(()=> Math.random() - 0.5)