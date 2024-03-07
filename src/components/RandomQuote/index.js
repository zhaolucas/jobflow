import React, { useEffect, useState } from 'react';
import './style.css'; 
import quoteImage from './quote4.webp'; 

function RandomQuote() {
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const quote = data[randomIndex];
        quote.author = quote.author.replace(", type.fit", "").replace("type.fit", ""); 
        setRandomQuote(quote);
      });
  }, []);
  

  return (
    <div
      className="quoteContainer"
      style={{ backgroundImage: `url(${quoteImage})` }} 
    >
      {randomQuote && (
        <>
          <h3 className="quoteText">“{randomQuote.text}”</h3>
          <p className="quoteAuthor">
            — {randomQuote.author || "Unknown"}
          </p>
        </>
      )}
    </div>
  );
}

export default RandomQuote;
