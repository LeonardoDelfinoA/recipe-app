import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearchByIngredients from "./fetchSearchByIngredients";
import Results from "./Results";

const SearchByIngredients = () => {

    const [requestParams, setRequestParams] = useState({
        ingredients: "",
    });
  const [ingredients, setIngredients] = useState("");

    const results = useQuery(["search", requestParams], fetchSearchByIngredients);
    const meals = results?.data ?? [];

    return (
        <div className="search">
            <form
                className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col items-center justify-center"
                onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const obj = {
                    ingredients: formData.get("ingredients")?.toString() ?? ""
                };
                
                setRequestParams(obj);
                }}
            >
                <label htmlFor="ingredients">
                    Meal Ingredients
                    <input
                        name="ingredients"
                        id="ingredients"
                        className="mb-5 block w-60"
                        placeholder="Ingredients"
                        />
                </label>
                <button className="rounded px-6 py-2 color text-white hover:opacity-50 bg-orange-500">Submit</button>
            </form>
            <Results meals={meals} />
        </div>
      );
};


export default SearchByIngredients;
