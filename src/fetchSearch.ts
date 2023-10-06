import { QueryFunction } from "@tanstack/react-query";
import { mealAPIResponse } from "./APIResponsesTypes";


const fetchSearch: QueryFunction<mealAPIResponse> = async () => {

    const res = await fetch(
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=ef75de21c853402fa03236eb3713014e"
    );


    if (!res.ok) {
        throw new Error(`meal search not okay`);
    }
    return res.json();
}


export default fetchSearch;