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
  instructions: z.string(),
});

const Ingredient = z.object({
  name: z.string(),
  image: z.string(),
  amount: z.object({
    metric: z.object({
      value: z.number(),
      unit: z.string(),
    }),
    us: z.object({
      value: z.number(),
      unit: z.string(),
    }),
  }),
});

const IngredientsResponseSchema = z.object({
  ingredients: z.array(Ingredient),
});

export type RecipeDetail = z.infer<typeof RecipeDetail>;
export type Ingredient = z.infer<typeof Ingredient>;
export type IngredientsResponse = z.infer<typeof IngredientsResponseSchema>;

export const useRecipesDetail = () => {
  const { currentId } = useRecipeStore();
  const [isLoadingRecipe, setIsLoadingRecipe] = useState<boolean>(false);
  const [isLoadingIngredients, setIsLoadingIngredients] =
    useState<boolean>(false);
  const [recipe, setRecipe] = useState<RecipeDetail>();
  const [ingredientsList, setIngredientsList] = useState<IngredientsResponse>();

  const fetchRecipe = async () => {
    if (currentId) {
      setIsLoadingRecipe(true);
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
        setIsLoadingRecipe(false);
      }
    }
  };

  const fetchIngredients = async () => {
    if (currentId) {
      setIsLoadingIngredients(true);
      try {
        const ingredientsRecipeUrl = `https://api.spoonacular.com/recipes/${currentId}/ingredientWidget.json?apiKey=${API_KEY}`;
        const { data } = await axios(ingredientsRecipeUrl);
        const result = IngredientsResponseSchema.safeParse(data);

        if (result.success) {
          setIngredientsList(result.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoadingIngredients(false);
      }
    }
  };

  useEffect(() => {
    fetchRecipe();
    fetchIngredients();
  }, [currentId]);

  return { isLoadingRecipe, isLoadingIngredients, recipe, ingredientsList };
};
