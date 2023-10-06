import { Meal as MealType } from "./APIResponsesTypes"
import Meal from "./Meal"

const Results = ({ meals }: { meals: MealType[] }) => {

  if (!meals) {
    return null;
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {!meals.length ? (
        <h1>No Meals Found</h1>
      ) : (
        meals.map((meal) => (
          <Meal
            id={meal.id}
            key={meal.id}
            title={meal.title}
            image={meal.image}
          />
        ))
      )}
    </div>
  );
};

export default Results;
