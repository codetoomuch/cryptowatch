import React, { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [cryptoCoin, setCryptoCoin] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchCryptoApi();
  }, []);

  const fetchCryptoApi = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
    );
    const data = await response.json();
    setCryptoCoin(data);
  };

  const searchQueryHandler = (e) => {
    setSearchQuery(e.target.value);
    console.log(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  const cryptoCoins = cryptoCoin.map((coin) => {
    return (
      <div key={coin.id}>
        {" "}
        <p> {coin.id} </p>
        <div> {coin.image} </div>
      </div>
    );
  });

  return (
    <div className="App">
      <form onSubmit={formSubmitHandler}>
        <h3>Search Crypto</h3>
        <input
          onChange={searchQueryHandler}
          value={searchQuery}
          type="text"
          maxLength={20}
          placeholder="Search cryptocurrency..."
        />
      </form>
      {cryptoCoins}
    </div>
  );
};

export default App;
