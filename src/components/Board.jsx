import React from "react";

const Board = ({ cards, flippedCards, matchedPairs, handleCardClick }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card) => {
        const isFlipped =
          flippedCards.some((flipped) => flipped.id === card.id) ||
          matchedPairs.includes(card.pairId);
        const isMatched = matchedPairs.includes(card.pairId);

        return (
          <div
            key={card.id}
            className={`relative w-24 h-36 cursor-pointer transform ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            onClick={() => handleCardClick(card)}
          >
            <div
              className={`absolute inset-0 w-full h-full bg-white border-2 ${
                isMatched ? "border-green-500" : "border-gray-300"
              } rounded-lg shadow-md transition-transform duration-500`}
            >
              <div
                className={`w-full h-full flex items-center justify-center bg-blue-500 text-white text-lg font-bold ${
                  isFlipped ? "hidden" : "block"
                }`}
              >
                ?
              </div>
              <div
                className={`w-full h-full flex items-center justify-center text-gray-800 font-bold ${
                  isFlipped ? "block" : "hidden"
                }`}
              >
                {card.text}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Board;
