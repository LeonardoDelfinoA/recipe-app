import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import fetchRecipe from "./fetchRecipe";

const MealDetails = () => {
    const { id } = useParams();

    if(!id) {
        throw Error("No Id was provided")
    }
    const results = useQuery(["details", id], fetchRecipe);

    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>
        )
    }

    const meal = results?.data?.meals[0];

    if(!meal) {
        throw Error("No meal returned")
    }

    return (
        <div>
            <div className="flex flex-col items-center">
                <h1 className="w-full text-center p-1 font-sans">{meal.title}</h1>
                <img src={meal.image} alt="" />
                <h2 className="my-2">Instructions</h2>
                <p>{meal.instructions}</p>
            </div>
        </div>
    )
};

export default MealDetails;