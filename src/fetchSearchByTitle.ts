import { QueryFunction } from "@tanstack/react-query";
import { mealAPIResponse } from "./APIResponsesTypes";


const fetchSearchByTitle: QueryFunction<
    mealAPIResponse,
    [
        "search",
        { 
            title: string;
        }
    ]
> = async ({queryKey}) => {
    const {title} = queryKey[1];


    const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=ef75de21c853402fa03236eb3713014e&query=${title}`
    );


    if (!res.ok) {
        throw new Error(`meal search not okay`);
    }

    return res.json();
}


export default fetchSearchByTitle;