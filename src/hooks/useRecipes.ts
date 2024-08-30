import { API_KEY, RECIPE_API_URL } from "@/constants";
import { Recipe } from "@/types";
import { useEffect, useState } from "react";

export const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isloading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const URL = `${RECIPE_API_URL}?${API_KEY}`;

  useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const result = data.results;
        setRecipes(result);
      })
      .catch(() => setIsError(true))
      .finally(() => setLoading(false));
  }, []);

  return {
    recipes,
    isloading,
    isError,
  };
};
