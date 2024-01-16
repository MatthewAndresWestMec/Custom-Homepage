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

        setQuote(formattedQuote);
        setAuthor(data.author);
      } catch (error) {
        console.error('Error fetching random quote:', error);
      }
    };

    fetchRandomQuote();
  }, []);

  return (
    <div>
      <h2>Quote</h2>
      <h3>{quote}</h3>
      <p>-{author}</p>
    </div>
  );
};

export default RandomizedQuote;
