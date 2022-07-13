import createBunker from 'helper/createBunker';
import createCards from 'helper/createCards';
import { useEffect } from 'react';
import { useState } from 'react';
import Rules from 'views/Rules';
import data from '../gameData/data.json';
import Cards from './Cards.jsx/Cards';
import Header from './Header/Header';

const App = () => {
  const [bunker, setBunker] = useState('');
  const [playerCards, setPlayerCards] = useState('');
  const [players, setPlayers] = useState('');
  const [isGame, setIsGame] = useState(false);

  useEffect(() => {
    setIsGame(false);
  }, [players]);

  const gameOn = () => {
    if (players < 8) {
      setIsGame(false);
      return;
    }
    setIsGame(true);
    setBunker(createBunker(data));
    setPlayerCards(createCards(data, players));
  };

  const gameOff = () => {
    let isGameEnd = prompt('Действительно закончить игру? Да или нет');

    if (
      isGameEnd.toLowerCase().trim() === 'да' ||
      isGameEnd.toLowerCase().trim() === 'yes'
    ) {
      setIsGame(false);
    }
  };

  const handlePlayers = e => {
    setPlayers(e.target.value);
  };

  return (
    <div>
      <Header
        isGame={isGame}
        onGameOff={gameOff}
        onGameOn={gameOn}
        onPlayers={handlePlayers}
        players={players}
      />

      {!isGame && <Rules players={players} />}

      {isGame && <Cards cards={playerCards} bunker={bunker} />}
    </div>
  );
};

export default App;
