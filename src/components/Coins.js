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
        <label>current price</label>
        <h3>₹ {props.current_price.toLocaleString()}</h3>
        <label>price change </label>
        <h3
          className={
            props.price_change_percentage_24h > 0 ? classes.gain : classes.loss
          }
        >
          {props.price_change_percentage_24h.toFixed(2)} %
        </h3>
      </div>
      <div className={classes.totalVolume}>
        <label>total volume</label>
        <h3>{props.total_volume.toLocaleString()}</h3>
      </div>

      <div className={classes.highNLow}>
        <label>24h high</label>
        <h3 className={classes.gain}>{props.high_24h.toLocaleString()}</h3>
        <label>24h low</label>
        <h3 className={classes.loss}>{props.low_24h.toLocaleString()}</h3>
      </div>
    </li>
  );
};

export default Coins;
