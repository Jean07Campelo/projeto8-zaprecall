import React from "react";
import Options from './Options'

export default function Flashcards({ cards, status, setStatus }) {
  const [qtd, setQtd] = React.useState(0);
  const [response, setResponse] = React.useState(false);

  const renderCard = cards.map((card, index) => (
    <>
      {card.open === "open" ? (
        <div className="card-open" key={index}>
          <h3>{card.question}</h3>

          {response ? (

            <Options status={status} setStatus={setStatus}/>

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

  return <>{renderCard}</>;
}
