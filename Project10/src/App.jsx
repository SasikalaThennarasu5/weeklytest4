import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" }
];

const App = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">📜 Random Quote Generator</h2>
      <div className="card p-4 shadow-sm">
        <blockquote className="blockquote mb-3">
          <p className="mb-0">"{quote.text}"</p>
          <footer className="blockquote-footer mt-2">{quote.author}</footer>
        </blockquote>
        <button className="btn btn-primary" onClick={getRandomQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
