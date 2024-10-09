import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MotivationalQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    axios.get('http://api.quotable.io/random')
      .then(response => {
        setQuote(response.data.content);
      })
      .catch(error => {
        console.error('Error fetching the quote:', error);
      });
  }, []);

  return (
    <div className="motivational-quote">
      <p>"{quote}"</p>
    </div>
  );
};

export default MotivationalQuote;
