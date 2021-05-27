import React from "react";

import styles from "./CoinCard.module.css";

const CoinCard = ({ coins }) => {
  return (
    <div className={styles.cryptoContainer}>
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
          <div key={id} className={styles.cryptoCoins}>
            <div className={styles.cryptoImage}>
              <h1>{market_cap_rank}.</h1>
              <img src={image} alt={id} />
            </div>
            <h2>{name}</h2>
            <h3>₹ {current_price.toLocaleString()}</h3>
            <h3>{symbol}</h3>
            <h3>{total_volume.toLocaleString()}</h3>
            <h3>{price_change_percentage_24h.toFixed(2)} %</h3>
            <h3 style={{ color: "red" }}>{high_24h.toLocaleString()}</h3>
            <h3 style={{ color: "green" }}>{low_24h.toLocaleString()}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CoinCard;
