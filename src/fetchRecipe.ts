import { QueryFunction } from "@tanstack/react-query";
import { mealAPIResponse } from "./APIResponsesTypes";

const fetchRecipe: QueryFunction<mealAPIResponse, ["details", string]> = async ({queryKey}) => {
    const id = queryKey[1];


    const apiRes = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=ef75de21c853402fa03236eb3713014e`);

    if (!apiRes.ok) {
        throw new Error(`details/${id} fetch not ok`);
    }

    return apiRes.json();
}

export default fetchRecipe;