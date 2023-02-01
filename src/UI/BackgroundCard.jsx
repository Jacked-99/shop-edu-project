import styles from "./CardStyles.module.scss";
import { forwardRef } from "react";

const Card = forwardRef((props, ref) => {
  const classes = `${styles.Card} ${props.className}`;
  return <div className={classes}>{props.children}</div>;
});

export default Card;
