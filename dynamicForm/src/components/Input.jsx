import React, { useState } from 'react';

const Input = () => {
  // Initialize with one certificate block.
  const [cards, setCards] = useState([{ id: 0 }]);

  // Add a new certificate block at the end.
  const handleAddCard = () => {
    const newId = cards.length ? Math.max(...cards.map(card => card.id)) + 1 : 0;
    setCards([...cards, { id: newId }]);
  };

  // Remove the certificate block at the given index.
  const handleRemoveCard = (index) => {
    // Prevent removal if there's only one card.
    if (cards.length === 1) return;
    setCards(cards.filter((_, i) => i !== index));
  };

  return (
    <div className="InputContainer">
      {cards.map((card, index) => {
        const certificateId = `certificate-${card.id}`;
        const isLast = index === cards.length - 1;
        return (
          <div key={card.id} className="d-flex flex-column gap-3 entireCard">
            <div>
              <label htmlFor={certificateId} className="form-label">
                Certificate
              </label>
              <input type="text" id={certificateId} className="form-control" />
            </div>
            <div className="w-100 d-flex justify-content-end">
              {isLast ? (
                // Last certificate shows "Add Another"
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleAddCard}
                >
                  Add Another
                </button>
              ) : (
                // All other certificates show "Remove"
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleRemoveCard(index)}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Input;
