import styled from './styled.module.scss';

function Players({ players, onPlayers, onClick }) {
  return (
    <div className={styled.container}>
      <p className={styled.name}>Выберите количество игроков:</p>
      <div className={styled.input_container}>
        <input
          className={styled.input}
          type="number"
          min={8}
          max={16}
          value={players}
          onChange={onPlayers}
        />
        <button type="button" onClick={onClick} className={styled.btn}>
          Готовы играть
        </button>
      </div>
    </div>
  );
}

export default Players;
