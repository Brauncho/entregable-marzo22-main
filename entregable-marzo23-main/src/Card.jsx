//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from 'react';

function Card({ input1Value, input2Value }) {
  return (
    <div className="card">
      <h2></h2>
      <p>Valor del Input 1: {input1Value}</p>
      <p>Valor del Input 2: {input2Value}</p>
    </div>
  );
}

export default Card;