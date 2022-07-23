import React from "react";

export default function Flashcards({ cards, setCards }) {

  function turnedCard(card) {
        
    const teste = (card.turned = (!card.turned))    
    
  }

  const renderCards = cards.map((card, index) => (
    <div className="card" key={index}>
      <h2>Pergunta {index + 1}</h2>
      {(card.turned ? 'true' : 'false')}
      <ion-icon name="play-outline" onClick={()=>turnedCard(card)}></ion-icon>
    </div>
  ));
  console.log(cards);
  return <>{renderCards}</>;
}
