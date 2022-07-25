import React from "react";

export default function Flashcards({ cards }) {
  const [qtd, setQtd] = React.useState(0);
  const [response, setResponse] = React.useState(false);

  const renderCard = cards.map((card, index) => (
    <>
      {card.open === "open" ? (
        <div className="card-open" key={index}>
          <h3>{card.question}</h3>

          {response ? (
            <>
              <h2>hora de responder</h2>
              <buttom onClick={() => (card.status = "nao_lembrou")}>
                Não Lembrei
              </buttom>
              <buttom onClick={() => (card.status = "quase_nao_lembrou")}>Quase não lembrei</buttom>
              <buttom onClick={() => (card.status = "zap")}>Zap!</buttom>
            </>
          ) : (
            <ion-icon
              name="reload-outline"
              onClick={() => setResponse(true)}
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

  return <>{renderCard}
  {console.log(cards)}</>;
}
