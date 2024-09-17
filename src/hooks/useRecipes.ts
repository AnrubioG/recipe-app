import { API_KEY } from "@/constants";
import axios from "axios";
import { useEffect, useState } from "react";
import { z } from "zod";

const Recipe = z.object({
  id: z.number(),
  title: z.string(),
  image: z.string(),
  imageType: z.string(),
});

const RecipesArraySchema = z.array(Recipe);

export type Recipe = z.infer<typeof Recipe>;
export type RecipesArray = z.infer<typeof RecipesArraySchema>;

export const useRecipes = () => {
  const [recipes, setRecipes] = useState<RecipesArray>([]);

  const fetchRecipes = async () => {
    try {
      const allRecipesUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`;
      const { data } = await axios(allRecipesUrl);
      const result = data.results;
      const validation = RecipesArraySchema.safeParse(result);

      if (validation.success) {
        setRecipes(validation.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return {
    recipes,
  };
};
