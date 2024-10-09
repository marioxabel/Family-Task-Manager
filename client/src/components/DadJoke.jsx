import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DadJoke = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await axios.get('https://icanhazdadjoke.com/', {
          headers: {
            Accept: 'application/json'
          }
        });
        setJoke(response.data.joke);
      } catch (error) {
        console.error('Error fetching the joke:', error);
      }
    };

    fetchJoke();
  }, []);

  return (
    <div >
      <h1 style={{marginTop:'2rem', fontSize:'30px'}}>Here's a joke to brighten your day...</h1>
      <p>{joke ? joke : 'Loading joke...'}</p>
    </div>
  );
};

export default DadJoke;
