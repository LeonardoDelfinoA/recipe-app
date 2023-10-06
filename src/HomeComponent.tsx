import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";
import Results from "./Results";



const HomeComponent = () => {

    const [requestParams, setRequestParams] = useState({
        title: ""
    });

    const results = useQuery(["search", requestParams], fetchSearch);
    const meals = results?.data?.results ?? [];

    return (
        <div className="my-0 mx-auto w-11/12">
            <Results meals={meals} />
        </div>
    );
}


export default HomeComponent;