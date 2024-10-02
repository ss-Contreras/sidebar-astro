// src/components/PlayersField.jsx
import React from 'react';

const PlayersField = ({ jugadores }) => {
  // Función para asignar clases de posición según la posición del jugador
  const getPositionClass = (posicion, index) => {
    switch (posicion) {
      case 'portero':
        return 'top-[85%] left-1/2 transform -translate-x-1/2';
      case 'defensa':
        const defensaPositions = ['left-5%', 'left-30%', 'left-60%', 'left-85%'];
        return `top-[70%] ${defensaPositions[index % defensaPositions.length]}`;
      case 'medio-defensivo':
        const medioDefPositions = ['left-25%', 'left-60%'];
        return `top-[55%] ${medioDefPositions[index % medioDefPositions.length]}`;
      case 'medio-ofensivo':
        const medioOfensivoPositions = ['left-10%', 'left-50%', 'left-80%'];
        return `top-[40%] ${medioOfensivoPositions[index % medioOfensivoPositions.length]}`;
      case 'delantero':
        return 'top-[25%] left-1/2 transform -translate-x-1/2';
      default:
        return 'top-0 left-0';
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-black/50 to-black/50 bg-[url('/img/imagecancha.png')] bg-center bg-no-repeat bg-cover rounded-lg border-4 border-blue-900 shadow-2xl h-[600px]">
      <div className="absolute inset-0 bg-[url('/img/imagecancha.png')] bg-contain bg-no-repeat"></div>
      {jugadores.map((jugador, index) => (
        <div
          key={index}
          className={`absolute text-center cursor-pointer text-white drop-shadow-md ${getPositionClass(jugador.posicion, index)}`}
        >
          <span className="block">{jugador.nombre} ({jugador.numero})</span>
          <img
            src={jugador.imagen}
            alt={jugador.nombre}
            className="hidden absolute -top-24 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-2 border-yellow-500"
          />
          <div className="group relative">
            <div className="group-hover:block hidden">
              <img src={jugador.imagen} alt={jugador.nombre} className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-2 border-yellow-500" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayersField;
