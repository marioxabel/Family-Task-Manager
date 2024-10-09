import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DadJoke = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await axios.get('http://icanhazdadjoke.com/', {
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
    <div className="dad-joke">
      <p style={{marginTop:'3rem'}}>{joke ? joke : 'Loading joke...'}</p>
    </div>
  );
};

export default DadJoke;
