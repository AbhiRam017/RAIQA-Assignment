export default function MealList({ meals, addMeal }) {
  return (
    <div className="card">
      <h2>Meals List</h2>
      {meals.map((meal) => (
        <div key={meal.id} className="meal-item">
          <div>
            <p className="name">{meal.name}</p>
            <p>{meal.price}</p>
            <p className={meal.available ? "available" : "not-available"}>
              {meal.available ? "Available" : "Not Available"}
            </p>
          </div>
          <button
            disabled={!meal.available}
            onClick={() => addMeal(meal)}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}