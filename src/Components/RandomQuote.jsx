import React, { useState, useEffect } from 'react';

const RandomizedQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        const response = await fetch('https://dummyjson.com/quotes/random');
        const data = await response.json();

        // Convert the letter after an apostrophe to lowercase
        const formattedQuote = data.quote.replace(
          /'([A-Z])/,
          (match, letter) => "'" + letter.toLowerCase()
        );

        // Check if the quote is under 50 characters
        if (formattedQuote.length <= 50) {
          setQuote(formattedQuote);
          setAuthor(data.author);
        } else {
          // If the quote is too long, fetch a new one
          fetchRandomQuote();
        }
      } catch (error) {
        console.error('Error fetching random quote:', error);
      }
    };

    fetchRandomQuote();
  }, []);

  return (
    <div>
      <h2>Quote</h2>
      {quote && <h3>{quote}</h3>}
      {quote && <p>-{author}</p>}
    </div>
  );
};

export default RandomizedQuote;
