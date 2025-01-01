import React, { useState, useEffect } from "react";

const cardsData = [
  { id: 1, text: "Variable", pairId: 1 },
  { id: 2, text: "let x = 5;", pairId: 1 },
  { id: 3, text: "{}", pairId: 2 },
  { id: 4, text: "Bloques de código", pairId: 2 },
  { id: 5, text: "if", pairId: 3 },
  { id: 6, text: "Estructura condicional", pairId: 3 },
  { id: 7, text: "Node.js", pairId: 4 },
  { id: 8, text: "Entorno para ejecutar JavaScript en el servidor", pairId: 4 },
];

function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  useEffect(() => {
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">
        Juego de Memoria: JavaScript
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`p-4 bg-white rounded shadow cursor-pointer text-center text-lg font-medium transition-transform duration-500 transform ${
              flippedCards.some((flipped) => flipped.id === card.id) ||
              matchedPairs.includes(card.pairId)
                ? "bg-green-200 scale-105"
                : "bg-gray-300"
            }`}
            onClick={() => handleCardClick(card)}
          >
            {flippedCards.some((flipped) => flipped.id === card.id) ||
            matchedPairs.includes(card.pairId)
              ? card.text
              : "?"}
          </div>
        ))}
      </div>
      <p className="text-lg text-gray-700 mt-4">
        Pares encontrados: {matchedPairs.length}
      </p>
    </div>
  );
}

export default App;
