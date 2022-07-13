import React from 'react';

function PlayerInfo({
  item: {
    proffesion,
    old,
    child,
    healthInfo,
    gender,
    weightInfo,
    hobbiesInfo,
    characterInfo,
    additionalInfo,
    phobiaInfo,
    cardsInfo,
    baggageInfo,
  },
}) {
  return (
    <ol>
      <li>
        <p>Профессия: {proffesion}</p>
      </li>
      <li>
        <p>
          Возраст: {old}, {child ? 'хочет детей' : 'не хочет детей'}
        </p>
      </li>
      <li>
        <p>Пол: {gender ? 'мужчина' : 'женщина'}</p>
      </li>
      <li>
        <p>Телосложение: {weightInfo}</p>
      </li>
      <li>
        <p>Здоровье: {healthInfo}</p>
      </li>
      <li>
        <p>Черты характера: {characterInfo}</p>
      </li>
      <li>
        <p>Хобби: {hobbiesInfo}</p>
      </li>
      <li>
        <p>Дополнительная информация: {additionalInfo}</p>
      </li>
      <li>
        <p>Багаж: {baggageInfo}</p>
      </li>
      <li>
        <p>Фобия: {phobiaInfo}</p>
      </li>
      <li>
        <p>Доп. карта №1: {cardsInfo[0]}</p>
      </li>
      <li>
        <p>Доп. карта №2: {cardsInfo[1]}</p>
      </li>
    </ol>
  );
}

export default PlayerInfo;
