import { QueryFunction } from "@tanstack/react-query";
import { mealAPIResponse } from "./APIResponsesTypes";




const fetchByLetter: QueryFunction<
    mealAPIResponse,
    [
        "search", 
        { 
            firstLetter: string
        }
    ]
> = async ({queryKey}) => {
    const {firstLetter} = queryKey[1];


    const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=ef75de21c853402fa03236eb3713014e&query=${firstLetter}`
    );


    if (!res.ok) {
        throw new Error(`meal search not okay`);
    }
    return res.json();
}


export default fetchByLetter;