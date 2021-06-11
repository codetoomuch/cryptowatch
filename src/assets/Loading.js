import cryptoWatchLogo from "./cryptowatch.svg";
import loadingGif from "./loading.gif";
import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes.Loading}>
      <div className={classes.logo}>
        <img
          className={classes.logoImg}
          src={cryptoWatchLogo}
          alt="cryptowatchlogo"
        />
        <h2>cryptoWatch</h2>
      </div>
      <div className={classes.loadingGif}>
        <img src={loadingGif} alt="loading..." />
      </div>
    </div>
  );
};

export default Loading;
