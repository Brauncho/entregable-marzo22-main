import React, { useState } from 'react';
import Card from './Card'; // Importar el componente Card desde su archivo

function App() {
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleInput1Change = (event) => {
    setInput1Value(event.target.value);
    setErrorMessage('');
  };

  const handleInput2Change = (event) => {
    setInput2Value(event.target.value);
    setErrorMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validations
    if (input1Value.trim().length < 3 || input1Value.startsWith(' ')) {
      setErrorMessage('Por favor chequea que la información sea correcta');
    } else if (input2Value.length < 6) {
      setErrorMessage('Por favor chequea que la información sea correcta');
    } else {
      setErrorMessage('');
      setShowCard(true);
    }
  };

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Input 1:</label>
          <input type="text" value={input1Value} onChange={handleInput1Change} />
        </div>
        <div>
          <label>Input 2:</label>
          <input type="text" value={input2Value} onChange={handleInput2Change} />
        </div>
        <button type="submit">Enviar</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      {showCard && <Card input1Value={input1Value} input2Value={input2Value} />}
    </div>
  );
}

export default App;

