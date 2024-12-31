/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import FoodItem from "./FoodItem";

/* eslint-disable react/jsx-key */
export default function FoodList({ foodData, setfoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem setfoodId={setfoodId} key={food.id} food={food} />
      ))}
    </div>
  );
}
