export default function Flashcards () {
    return (
        <>
        {renderCards}
        </>
    )
}

const cards = [
  {
    question: "O que é JSX?",
    response: "Uma extensão de linguagem do JavaScript",
  },
  {
    question: "O React é ...",
    response: "uma biblioteca JavaScript para construção de interfaces",
  },
  {
    question: "Componentes devem iniciar com ...",
    response: "letra maiúscula",
  },
  {
    question: "Podemos colocar ... dentro do JSX",
    response: "expressões",
  },
];

const renderCards = cards.map((card, index) => 
    <div className='card'>
        <h2>Pergunta {index + 1}</h2>
        <ion-icon name="play-outline"></ion-icon>
    </div>
)