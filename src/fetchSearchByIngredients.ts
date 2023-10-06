import { QueryFunction } from "@tanstack/react-query";
import { mealAPIResponse } from "./APIResponsesTypes";


const fetchSearchByIngredients: QueryFunction<
    mealAPIResponse,
    [
        "search",
        {
            ingredients: string;
        }
    ]
> = async ({queryKey}) => {
    const {ingredients} = queryKey[1];

    console.log(ingredients);


    const res = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=ef75de21c853402fa03236eb3713014e&ingredients=${ingredients}`
    );


    if (!res.ok) {
        throw new Error(`meal search not okay`);
    }

    return res.json();
}


export default fetchSearchByIngredients;