import { useState } from "react";
import { mealsData } from "./data/meals.js";
import MealList from "./components/MealsList";
import SelectedMeals from "./components/SelectedList";
import "./styles.css";

export default function App() {
  const [showAvailable, setShowAvailable] = useState(true);
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredMeals = mealsData.filter((meal) =>
    showAvailable ? true : meal.available
  );

  const sortedMeals = [...filteredMeals].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  const addMeal = (meal) => {
    if (!selectedMeals.find((m) => m.id === meal.id)) {
      setSelectedMeals([...selectedMeals, meal]);
    }
  };

  const sortedSelected = [...selectedMeals].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <div className="container">
      <h1>Meal Selection App</h1>
      <div className="controls">
        <button onClick={() => setShowAvailable(!showAvailable)}>
          {showAvailable ? "Show All" : "Show Available"}
        </button>
        <button
          onClick={() =>
            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
          }
        >
          Sort: {sortOrder === "asc" ? "Low → High" : "High → Low"}
        </button>
        <button onClick={() => setSelectedMeals([])}>
          Reset
        </button>
      </div>

      <div className="grid">
        <MealList meals={sortedMeals} addMeal={addMeal} />
        <SelectedMeals meals={sortedSelected} />
      </div>
    </div>
  );
}