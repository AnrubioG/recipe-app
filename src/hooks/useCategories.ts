import { useRecipeStore } from "@/store/store";
import axios from "axios";
import { useEffect, useState } from "react";

export const useCategories = () => {
  const { currentCategory } = useRecipeStore();

  const [recipesByCategories, setRecipesByCategories] = useState();

  const fetchRecipesByCategories = async () => {
    if (currentCategory) {
      try {
        const categoriesUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${currentCategory}&apiKey=cc3c78208e1b42249e382f04b0a5a44e`;
        const { data } = await axios(categoriesUrl);

        setRecipesByCategories(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchRecipesByCategories();
  }, [currentCategory]);

  return {
    recipesByCategories,
  };
};
