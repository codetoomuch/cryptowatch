import React from "react";

import Coins from "./Coins";

const CoinCard = ({ coins }) => {
  return (
    <>
      {coins.map((coin) => {
        const {
          market_cap_rank,
          id,
          name,
          image,
          symbol,
          current_price,
          total_volume,
          price_change_percentage_24h,
          high_24h,
          low_24h,
        } = coin;
        return (
          <Coins
            key={id}
            id={id}
            name={name}
            image={image}
            symbol={symbol}
            current_price={current_price}
            total_volume={total_volume}
            price_change_percentage_24h={price_change_percentage_24h}
            high_24h={high_24h}
            low_24h={low_24h}
            market_cap_rank={market_cap_rank}
          />
        );
      })}
      <footer>Made with &hearts; by @codetoomuch</footer>
    </>
  );
};

export default CoinCard;
