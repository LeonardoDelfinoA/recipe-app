import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchByLetter from "./fetchByLetter";
import Results from "./Results"

const SearchByLetter = () => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));

    const [requestParams, setRequestParams] = useState({
        firstLetter: "",
    });
    const [firstLetter, setFirstLetter] = useState("");

    const results = useQuery(["search", requestParams], fetchByLetter);
    const meals = results?.data?.results ?? [];

    console.log(results.data);

    return (
        <div className="my-0 mx-auto w-11/12">
        <form
        className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col items-center justify-center"
        onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const obj = {
            firstLetter: formData.get("firstLetter")?.toString() ?? ""
        };
        setRequestParams(obj);
        }}
        >
            <label htmlFor="firstLetter">
            First Letter
            <select
                id="firstLetter"
                name="firstLetter"
                className="mb-5 block w-60"
            >
                <option />
                {alphabet.map((firstLetter) => (
                <option key={firstLetter}>{firstLetter}</option>
                ))}
            </select>
            </label>
            <button className="rounded px-6 py-2 color text-white hover:opacity-50 bg-orange-500">Submit</button>
        </form>
        <Results meals={meals} />
        </div>

      );

};


export default SearchByLetter;