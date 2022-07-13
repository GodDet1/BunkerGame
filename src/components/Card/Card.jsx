import Bunker from 'components/Bunker/Bunker';
import PlayerInfo from 'components/PlayerInfo/PlayerInfo';
import { nanoid } from 'nanoid';
import React from 'react';
import styles from './styled.module.scss';

function Card({ item, bunker }) {
  return (
    <>
      <li key={nanoid()} className={styles.item}>
        <h3>Персонаж</h3>
        <PlayerInfo item={item} />
        <Bunker bunker={bunker} />
      </li>
    </>
  );
}

export default Card;
