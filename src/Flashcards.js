export default function Flashcards({ cards }) {
  const renderCards = cards.map((card, index) => (
    <div className="card">
      <h2>Pergunta {index + 1}</h2>
      <ion-icon name="play-outline"></ion-icon>
    </div>
  ));

  return <>{renderCards}</>;
}
