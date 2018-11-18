import React from 'react';

const Item = ({ item, children }) => {
  const { CoinName, ImageUrl, SortOrder } = item;
  return (
    <ul className="list">
      <li className="list-row">
        <span>{SortOrder}</span>
        <span>
          <img
            className="cryptocurrency-icon"
            src={'https://www.cryptocompare.com/' + ImageUrl}
            alt=""
          />
        </span>
        <span>{CoinName}</span>
        <span>{children}</span>
      </li>
    </ul>
  );
};

export default Item;
