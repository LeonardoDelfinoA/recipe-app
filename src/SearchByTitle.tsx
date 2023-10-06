import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearchByTitle from "./fetchSearchByTitle";
import Results from "./Results";


const SearchByTitle = () => {

    const [requestParams, setRequestParams] = useState({
        title: "",
    });
  const [title, setTitle] = useState("");

    const results = useQuery(["search", requestParams], fetchSearchByTitle);
    const meals = results?.data?.results ?? [];

    return (
        <div  className="my-0 mx-auto w-11/12">
            <form
                className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col items-center justify-center"
                onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const obj = {
                    title: formData.get("title")?.toString() ?? ""
                };
                
                setRequestParams(obj);
                }}
            >
                <label htmlFor="title">
                    Meal title
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="mb-5 block w-60"
                        placeholder="Title"
                        />
                </label>
                <button className="rounded px-6 py-2 color text-white hover:opacity-50 bg-orange-500">Submit</button>
            </form>
            <Results meals={meals} />
        </div>
      );

};


export default SearchByTitle;
