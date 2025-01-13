const Board = ({ cards, flippedCards, matchedPairs, handleCardClick }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`p-6 w-24 h-32 bg-white rounded shadow cursor-pointer text-center text-lg font-medium transition-transform duration-500 transform ${
              flippedCards.some((flipped) => flipped.id === card.id) ||
              matchedPairs.includes(card.pairId)
                ? "bg-green-200 scale-105"
                : "bg-gray-500"
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
    </div>
  );
};

export default Board;
