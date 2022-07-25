import React from "react";

export default function Flashcards({ cards }) {
  const [qtd, setQtd] = React.useState(0);

  const renderCard = cards.map((card, index) => (
    <>
      {card.open === "open" ? (
        <div className="card-open" key={index}>
          <h3>{card.question}</h3>
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

  return <>{renderCard}</>;
}
