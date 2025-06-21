// components/Quiz.jsx
import React, { useState } from 'react';
import questions from '../data/questions';

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleAnswer = (option) => {
    setSelectedOption(option);
    const isCorrect = option === questions[current].answer;
    if (isCorrect) setScore(score + 1);

    setTimeout(() => {
      setSelectedOption('');
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
      } else {
        setShowScore(true);
      }
    }, 800);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-success mb-4">🧠 React Quiz</h2>

      {showScore ? (
        <div className="alert alert-info text-center">
          You scored <strong>{score}</strong> out of <strong>{questions.length}</strong>
        </div>
      ) : (
        <div className="card p-4 shadow">
          <h5 className="mb-3">{`Q${current + 1}: ${questions[current].question}`}</h5>
          <div className="d-grid gap-2">
            {questions[current].options.map((option, index) => (
              <button
                key={index}
                className={`btn btn-lg ${
                  selectedOption === option
                    ? option === questions[current].answer
                      ? 'btn-success'
                      : 'btn-danger'
                    : 'btn-outline-primary'
                }`}
                onClick={() => handleAnswer(option)}
                disabled={selectedOption !== ''}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="mt-3 text-end text-muted">Question {current + 1} of {questions.length}</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
