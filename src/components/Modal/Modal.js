import React from "react";

import classes from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={classes.modal}>
      <div className={classes.modalBox}>
        <h1>Sorry, related coin not found </h1>
      </div>
    </div>
  );
};

export default Modal;
