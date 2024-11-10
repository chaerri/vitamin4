import React from 'react';
import { useState, useEffect } from 'react';

const NotHome = () =>{
    // Initialize counter state
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');

  // Increase counter
  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  // Decrease counter
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    if (counter < 0) {
      setCounter(0); // Reset counter to 0 if it goes below 0
    } else if (counter > 5) {
      setMessage("You passed 5!"); // Show message if counter goes above 5
    } else {
      setMessage(''); // Clear message if counter is 5 or below
    }
  }, [counter]); // Depend on counter, so effect runs when counter changes

    return(
        <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Not Home Page</h1>
        <h2>Counter: {counter}</h2>
  
        {/* Display message if it is not an empty string */}
        {message && <p>{message}</p>}
  
        <button onClick={increaseCounter} style={{ margin: '0.5rem', padding: '0.5rem 1rem' }}>Increase</button>
        <button onClick={decreaseCounter} style={{ margin: '0.5rem', padding: '0.5rem 1rem' }}>Decrease</button>
      </div>

    )
}

export default NotHome;