import { Recipe } from "@/hooks/useRecipes";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type RecipeState = {
  currentId: Recipe["id"];
  currentCategory: string;
  setCurretId: (id: Recipe["id"]) => void;
  setCurrentCategory: (category: string) => void;
};

export const useRecipeStore = create<RecipeState>()(
  devtools((set) => ({
    currentId: 0,
    currentCategory: "",

    setCurretId: (id) => {
      set(() => ({
        currentId: id,
      }));
    },

    setCurrentCategory: (category) => {
      set(() => ({
        currentCategory: category,
      }));
    },
  }))
);
