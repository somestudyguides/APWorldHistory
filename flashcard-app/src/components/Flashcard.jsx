/**
 * Flashcard Component
 * Displays a single flashcard with flip animation
 */

import { useState } from 'react';
import './Flashcard.css';

function Flashcard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard-container" onClick={handleFlip}>
      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
        <div className="flashcard-front">
          <div className="flashcard-unit">{card.unit}</div>
          <div className="flashcard-content">
            <h2>{card.question}</h2>
            <p className="tap-hint">Tap to reveal answer</p>
          </div>
        </div>
        <div className="flashcard-back">
          <div className="flashcard-unit">{card.unit}</div>
          <div className="flashcard-content">
            <h3>{card.question}</h3>
            <div className="answer">{card.answer}</div>
            <p className="tap-hint">Tap to flip back</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
