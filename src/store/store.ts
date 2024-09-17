import { Recipe } from "@/hooks/useRecipes";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type RecipeState = {
  currentId: Recipe["id"];
  setCurretId: (id: Recipe["id"]) => void;
};

export const useRecipeStore = create<RecipeState>()(
  devtools((set) => ({
    recipes: [],
    currentId: 0,

    setCurretId: (id) => {
      set(() => ({
        currentId: id,
      }));
      // console.log(id);
    },
  }))
);
