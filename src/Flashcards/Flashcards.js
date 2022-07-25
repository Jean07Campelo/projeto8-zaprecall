import React from "react";

import './style.css'
import Top from "../Top/Top";
import Options from '../Options'
import Footer from '../Footer';

export default function Flashcards({ cards, status, setStatus, icons, setIcons }) {
  const [qtd, setQtd] = React.useState(0);
  const [response, setResponse] = React.useState(false);

  const renderCard = cards.map((card, index) => (
    <>
      {card.open === "open" ? (
        <div className="card-open" key={index}>
          <h3>{card.question}</h3>

          {response ? (

            <Options status={status} setStatus={setStatus} icons={icons} setIcons={setIcons} />

          ) : (
            <ion-icon
              name="reload-outline"
              onClick={() => setResponse(!response)}
            ></ion-icon>
          )}
        </div>
      ) : (
        <div className="card-closed" key={index}>
          <h2>Pergunta {index + 1}</h2>
          <ion-icon
            name="play-outline"
            onClick={() => {
              card.open = "open";
              setQtd(qtd + 1);
            }}
          ></ion-icon>
        </div>
      )}
      
    </>
  ));

  return <>
  <Top />
  {renderCard}
  <Footer cards={cards} status={status} icons={icons} />
  </>;
}
