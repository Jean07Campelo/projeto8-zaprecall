import React from "react";

export default function Flashcards({ cards, setCards }) {

  function turnedCard () {
    
  }

  const renderCards = cards.map((card, index) => (
    <div className="card" key={index}>
      <h2>Pergunta {index + 1}</h2>

      <ion-icon name="play-outline" onClick={turnedCard}></ion-icon>

    </div>
  ));
  console.log(cards);
  return <>{renderCards}</>;
}
