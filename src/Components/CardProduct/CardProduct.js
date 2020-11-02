import React from "react";
import styles from "./CardProduct.module.css";
import SubmitButton from "../SubmitButton/SubmitButton";

function CardProduct(props) {
  return (
    <div className={styles.card}>
      <img src={props.img} className={styles.img} alt="Product" />
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.bottom}>
        <p className={styles.price}>R${props.price}</p>
        <SubmitButton text="Comprar" minWidth='120px' />
      </div>
    </div>
  );
}

export default CardProduct;