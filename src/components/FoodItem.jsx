/* eslint-disable react/prop-types */
import styles from "./fooditem.module.css";

export default function FoodItem({ food, setfoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="foodImage" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            console.log(food.id);
            setfoodId(food.id);
          }}
          className={styles.itemButton}
        >
          View recipe
        </button>
      </div>
    </div>
  );
}