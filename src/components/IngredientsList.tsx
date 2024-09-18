import { useRecipesDetail } from "@/hooks/useRecipeDetail";

export function IngredientsList() {
  const { isLoadingIngredients, ingredientsList } = useRecipesDetail();

  return (
    <>
      {isLoadingIngredients ? (
        <p>loading ingredients</p>
      ) : (
        <>
          <h2 className="font-bold">Ingredients</h2>
          <ul className="list-disc ps-5 gap-3 flex flex-col">
            {ingredientsList?.ingredients.map((ingredient) => (
              <li>
                <span>{ingredient.amount.metric.value} g</span>{" "}
                {ingredient.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
