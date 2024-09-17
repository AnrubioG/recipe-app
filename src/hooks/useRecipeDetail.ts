import { API_KEY } from "@/constants";
import { useRecipeStore } from "@/store/store";
import axios from "axios";
import { useEffect, useState } from "react";
import { z } from "zod";

const RecipeDetail = z.object({
  id: z.number(),
  title: z.string(),
  readyInMinutes: z.number(),
  servings: z.number(),
  sourceUrl: z.string(),
  image: z.string(),
  imageType: z.string(),
  summary: z.string(),
});

export type RecipeDetail = z.infer<typeof RecipeDetail>;

export const useRecipesDetail = () => {
  const { currentId } = useRecipeStore();
  const [recipe, setRecipe] = useState<RecipeDetail>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchRecipes = async () => {
    if (currentId) {
      setIsLoading(true);
      try {
        const detailRecipeUrl = `https://api.spoonacular.com/recipes/${currentId}/information?includeNutrition=false&addWinePairing=false&addTasteData=false&apiKey=${API_KEY}`;
        const { data } = await axios(detailRecipeUrl);
        const result = RecipeDetail.safeParse(data);

        if (result.success) {
          setRecipe(result.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [currentId]);

  return { recipe, isLoading };
};
