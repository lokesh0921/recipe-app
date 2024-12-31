/* eslint-disable react/prop-types */
import styles from "./container.module.css";

export default function Container({ children }) {
  return <div className={styles.parentContainer}>{children}</div>;
}
