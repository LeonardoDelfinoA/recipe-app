import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeComponent from "./HomeComponent";
import MealDetails from "./MealDetails";
import SearchByTitle from "./SearchByTitle";
import SearchByIngredients from "./SearchByIngredients";
import SearchByLetter from "./SearchByLetter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  }
})

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header className="w-full mb-10 text-center p-7 bg-orange-500 font-sans">
          <Link className=" m-3 text-2xl hover:text-gray-200" to="/">Recipe App</Link>
          <Link className=" m-3 text-2xl hover:text-gray-200" to="/searchByTitle">Search by Title</Link>
          <Link className=" m-3 text-2xl hover:text-gray-200" to="/searchByIngredients">Search by ingredients</Link>
          <Link className=" m-3 text-2xl hover:text-gray-200" to="/searchByLetter">Search by letter</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<MealDetails />} />
          <Route path="/searchByTitle" element={<SearchByTitle />} />
          <Route path="/searchByIngredients" element={<SearchByIngredients />} />
          <Route path="/searchByLetter" element={<SearchByLetter />} />
          <Route path="/" element={<HomeComponent />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("Element with id 'root' not found");
}

const root = createRoot(container);
root.render(<App />);
