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
  const [cards, setCards] = React.useState([]);
  const [flippedCards, setFlippedCards] = React.useState([]);
  const [matchedPairs, setMatchedPairs] = React.useState([]);

  React.useEffect(() => {
    const shuffledCards = [...cardsData].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []);

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
    <div className="min-h-screen bg-red-100 flex flex-col items-center justify-center ">
      <Header title="Juego de Memoria: JavaScript" />
      <Board
        cards={cards}
        flippedCards={flippedCards}
        matchedPairs={matchedPairs}
        handleCardClick={handleCardClick}
      />
      <p className="text-lg text-gray-700 mt-4">
        Pares encontrados: {matchedPairs.length}
      </p>
    </div>
  );
};

export default MemoryGame;
