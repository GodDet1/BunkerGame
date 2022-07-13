import Players from 'components/Players/Players';
import React from 'react';
import styled from './styled.module.scss';

function Header({ isGame, onGameOn, onGameOff, onPlayers, players }) {
  return (
    <header className={styled.header}>
      <h1 className={styled.logo}>Бункер</h1>
      {isGame ? (
        <button type="button" onClick={onGameOff} className={styled.gameOff}>
          Закончить игру
        </button>
      ) : (
        <div className={styled.gameOn}>
          <Players players={players} onPlayers={onPlayers} onClick={onGameOn} />
        </div>
      )}
    </header>
  );
}

export default Header;
