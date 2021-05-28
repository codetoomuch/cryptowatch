import classes from "./Coins.module.css";

const Coins = (props) => {
  return (
    <li className={classes.coins}>
      <div className={classes.description}>
        <h2>{props.market_cap_rank}.</h2>
        <img src={props.image} alt={props.id} className={classes.coinImage} />
        <h2>{props.name}</h2>
      </div>
      <div className={classes.prices}>
        <h3>₹ {props.current_price.toLocaleString()}</h3>
        <h3>{props.price_change_percentage_24h.toFixed(2)} %</h3>
      </div>
      <h3>{props.total_volume.toLocaleString()}</h3>
      <div className={classes.highNLow}>
        <h3 style={{ color: "red" }}>{props.high_24h.toLocaleString()}</h3>
        <h3 style={{ color: "green" }}>{props.low_24h.toLocaleString()}</h3>
      </div>
    </li>
  );
};

export default Coins;
