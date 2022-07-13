import Card from 'components/Card/Card';
import React from 'react';
import { nanoid } from 'nanoid';
import styles from './styled.module.scss';

function Cards({ cards, bunker }) {
  return (
    <ul className={styles.list}>
      {cards.map(item => (
        <Card key={nanoid()} item={item} bunker={bunker} />
      ))}
    </ul>
  );
}

export default Cards;
