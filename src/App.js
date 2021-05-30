import React, { useState, useEffect } from "react";

import CoinCard from "./components/CoinCard";
import Loading from "./assets/Loading";
import Modal from "./components/Modal/Modal";

import classes from "./App.module.css";

const App = () => {
  const [cryptoCoins, setCryptoCoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOverlay, setIsOverlay] = useState(true);

  useEffect(() => {
    fetchCryptoApi();
  }, []);

  const fetchCryptoApi = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
    );
    const data = await response.json();
    setIsOverlay(false);
    setCryptoCoins(data);
  };

  const searchQueryHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  const filteredCryptoCoin = cryptoCoins.filter((coin) =>
    coin.id.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const displayCoins = (
    <>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div className={classes.searchInput}>
          <input
            onChange={searchQueryHandler}
            value={searchQuery}
            type="text"
            maxLength={20}
            placeholder="Search cryptocurrency..."
          />
        </div>
      </form>
      <ul>
        {filteredCryptoCoin.length > 0 ? (
          <CoinCard coins={filteredCryptoCoin} />
        ) : (
          <Modal />
        )}
      </ul>
    </>
  );

  return <>{isOverlay ? <Loading /> : displayCoins}</>;
};

export default App;
