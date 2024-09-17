import { CategoryButton } from "./CategoryButton";
import OrderByButton from "./OrderByButton";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";
import { categories } from "../data";
import { Recipe, useRecipes } from "../hooks/useRecipes";
import { useRecipeStore } from "@/store/store";

export function Categories() {
  const { setCurretId } = useRecipeStore();
  const { recipes } = useRecipes();

  const handleClick = (id: Recipe["id"]) => {
    setCurretId(id);
  };

  return (
    <>
      <header
        className="relative flex items-end sm:items-center sm:justify-end h-96 bg-cover bg-left sm:bg-center m-3 rounded-lg"
        style={{ backgroundImage: "url(/img/image.png)" }}
      >
        <div className="text-blue-950 text-5xl sm:text-6xl font-bold z-10 ms-4 mb-4  sm:me-40">
          <h1>Chef</h1>
          <h1 className="sm:ms-20">Academy</h1>
          <h1>Secrets</h1>
        </div>
      </header>

      {/* categorias */}
      <main className="mt-8 mx-8 sm:mx-16 flex flex-col sm:flex-row justify-center items-center sm:items-start">
        <section className="w-full min-w-60 sm:max-w-60">
          <h1 className="mb-8">Categories</h1>
          <div className="flex flex-col gap-3 mb-8">
            {categories.map((category) => (
              <CategoryButton
                key={category.id}
                name={category.name}
                img={category.image}
              />
            ))}
          </div>
        </section>

        <section className="w-full sm:ms-8">
          {/* filtros */}
          <div className="flex justify-between">
            <SearchBar />
            <OrderByButton />
          </div>
          {/* recetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                onClick={() => handleClick(recipe.id)}
                title={recipe.title}
                img={recipe.image}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
