export default function SelectedMeals({ meals }) {
  const total = meals.reduce((sum, m) => sum + m.price, 0);

  return (
    <div className="card">
      <h2> Selected Meals</h2>
      {meals.length === 0 ? (
        <p>No meals selected</p>
      ) : (
        meals.map((meal) => (
          <div key={meal.id} className="meal-item">
            <span>{meal.name}</span>
            <span>₹{meal.price}</span>
          </div>
        ))
      )}
      <h3>Total: {total}</h3>
    </div>
  );
}