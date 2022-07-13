import React from 'react';

function Bunker({ bunker: { event, bunkerItems, bunkerSquare } }) {
  return (
    <>
      <h2>Катастрофа</h2>
      <p>{event}</p>

      <h2>Бункер</h2>
      <p>
        Площадь бункера {bunkerSquare} м{<sup>2</sup>}. В бункере находится :
        {<span>{bunkerItems.join(', ')}</span>}
      </p>
    </>
  );
}

export default Bunker;
