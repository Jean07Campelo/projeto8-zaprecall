import React from "react";

export default function Flashcards({ cards, setCards }) {

  const renderCards = cards.map((card, index) => (
    <div className="card" key={index}>
      <h2>Pergunta {index + 1}</h2>
      
      <ion-icon name="play-outline"></ion-icon>

    </div>
  ));
  return <>{renderCards}</>;
}
