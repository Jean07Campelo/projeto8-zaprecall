export default function Flashcards({ cards, isTurned, setIsTurned }) {
  const renderCards = cards.map((card, index) => (
    <div className="card">
      <h2>Pergunta {index + 1}</h2>
      <ion-icon name="play-outline" onClick={()=>setIsTurned(!isTurned)}></ion-icon>
    </div>
  ));
console.log(cards[0].turned)
  return <>{renderCards}</>;
}
