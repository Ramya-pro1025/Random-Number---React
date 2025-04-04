import { useState } from "react";
import "./styles.css";  // Import the styles

function RandomNumber() {
  // Initialize state with a random number between 0 and 9
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10));

  // Function to generate a new random number between 0 and 9
  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 10);
    setRandomNumber(newRandomNumber); // Updates the state with a new random number
  };

  return (
    <div className="random-number-container">
      <h1 className="title">Fun Random Number Generator</h1>
      <p className="number-display">{randomNumber}</p>
      <button className="generate-btn" onClick={generateRandomNumber}>
        Generate Random Number
      </button>
    </div>
  );
}

export default RandomNumber;
