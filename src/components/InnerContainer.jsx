/* eslint-disable react/prop-types */
import styles from "./innercontainer.module.css";
export default function InnerContainer({ children }) {
  return <div className={styles.innercontainer}>{children}</div>;
}
