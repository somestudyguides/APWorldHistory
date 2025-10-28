/**
 * AP World History Flashcard App
 * Automatically indexes and displays flashcards from markdown files
 */

import { useState, useEffect } from 'react';
import Flashcard from './components/Flashcard';
import { loadAllFlashcards } from './utils/markdownParser';
import './App.css';

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Load flashcards on component mount
    loadAllFlashcards().then(cards => {
      setFlashcards(cards);
      setLoading(false);
    });
  }, []);

  const filteredCards = filter === 'all' 
    ? flashcards 
    : flashcards.filter(card => card.unit === filter);

  const currentCard = filteredCards[currentIndex];

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const getUnits = () => {
    const units = new Set(flashcards.map(card => card.unit));
    return Array.from(units);
  };

  if (loading) {
    return (
      <div className="app">
        <div className="loading">Loading flashcards...</div>
      </div>
    );
  }

  if (flashcards.length === 0) {
    return (
      <div className="app">
        <div className="error">No flashcards found. Please ensure markdown files are available.</div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🌍 AP World History Flashcards</h1>
        <p className="subtitle">Master your knowledge, one card at a time</p>
      </header>

      <div className="filter-container">
        <label htmlFor="unit-filter">Filter by unit: </label>
        <select 
          id="unit-filter"
          value={filter} 
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentIndex(0);
          }}
        >
          <option value="all">All Units</option>
          {getUnits().map(unit => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
      </div>

      <div className="flashcard-section">
        {currentCard && <Flashcard card={currentCard} key={currentIndex} />}
        
        <div className="navigation">
          <button onClick={prevCard} className="nav-button">
            ← Previous
          </button>
          <div className="card-counter">
            {currentIndex + 1} / {filteredCards.length}
          </div>
          <button onClick={nextCard} className="nav-button">
            Next →
          </button>
        </div>
      </div>

      <footer className="app-footer">
        <p>
          Flashcards automatically generated from markdown files
        </p>
        <p className="tip">
          💡 Tip: Click on the card to flip and reveal the answer
        </p>
      </footer>
    </div>
  );
}

export default App;

