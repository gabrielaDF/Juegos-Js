import React from "react";
import Header from "../components/Header";
import Board from "../components/Board";

const cardsData = [
  { id: 1, text: "Variable", pairId: 1 },
  { id: 2, text: "let x = 5;", pairId: 1 },
  { id: 3, text: "Constante", pairId: 2 },
  { id: 4, text: "const PI = 3.14;", pairId: 2 },
  { id: 5, text: "Función", pairId: 3 },
  { id: 6, text: "function greet() {}", pairId: 3 },
  { id: 7, text: "Array", pairId: 4 },
  { id: 8, text: "[1, 2, 3]", pairId: 4 },
  { id: 9, text: "Objeto", pairId: 5 },
  { id: 10, text: "{ key: 'value' }", pairId: 5 },
  { id: 11, text: "Condicional", pairId: 6 },
  { id: 12, text: "if (x > 5) {}", pairId: 6 },
  { id: 13, text: "Bucle", pairId: 7 },
  { id: 14, text: "for (let i = 0; i < 10; i++) {}", pairId: 7 },
  { id: 15, text: "Evento", pairId: 8 },
  { id: 16, text: "element.addEventListener('click', callback)", pairId: 8 },
];

const MemoryGame = () => {
  const [difficulty, setDifficulty] = React.useState(null);
  const [cards, setCards] = React.useState([]);
  const [flippedCards, setFlippedCards] = React.useState([]);
  const [matchedPairs, setMatchedPairs] = React.useState([]);

  const startGame = (level) => {
    setDifficulty(level);
    const pairsCount = level === "easy" ? 4 : level === "medium" ? 6 : 8;
    const selectedCards = cardsData.slice(0, pairsCount * 2);
    const shuffledCards = [...selectedCards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs([]);
  };

  const handleCardClick = (card) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.some((flipped) => flipped.id === card.id) ||
      matchedPairs.includes(card.pairId)
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, card];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [first, second] = newFlippedCards;
      if (first.pairId === second.pairId) {
        setMatchedPairs([...matchedPairs, first.pairId]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-red-100 flex flex-col items-center justify-center">
      <Header title="Juego de Memoria: JavaScript" />
      {!difficulty ? (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">Selecciona la dificultad</h2>
          <button
            onClick={() => startGame("easy")}
            className="bg-green-500 text-white px-4 py-2 m-2"
          >
            Fácil
          </button>
          <button
            onClick={() => startGame("medium")}
            className="bg-yellow-500 text-white px-4 py-2 m-2"
          >
            Intermedio
          </button>
          <button
            onClick={() => startGame("hard")}
            className="bg-red-500 text-white px-4 py-2 m-2"
          >
            Difícil
          </button>
        </div>
      ) : (
        <>
          <Board
            cards={cards}
            flippedCards={flippedCards}
            matchedPairs={matchedPairs}
            handleCardClick={handleCardClick}
          />
          <p className="text-lg text-gray-700 mt-4">
            Pares encontrados: {matchedPairs.length}
          </p>
          <button
            onClick={() => setDifficulty(null)}
            className="bg-blue-500 text-white px-4 py-2 mt-4"
          >
            Reiniciar Juego
          </button>
        </>
      )}
    </div>
  );
};

export default MemoryGame;
