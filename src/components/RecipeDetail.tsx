import { useRecipesDetail } from "@/hooks/useRecipeDetail";

export function RecipeDetail() {
  const { recipe, isLoading } = useRecipesDetail();
  return (
    <>
      {isLoading ? (
        <p>Cargando receta</p>
      ) : (
        <div className="flex flex-col items-center  my-8 mx-8 sm:mx-16">
          <div className="flex w-full justify-between">
            <div>HomeChef</div>
            <button>Regresar a categorias</button>
          </div>
          <div className="flex flex-col items-start justify-center mt-8 gap-5 w-3/5 max-w-xl ">
            <img
              src={recipe?.image}
              alt={`Imagen de ${recipe?.title}`}
              className="w-full h-auto rounded-lg "
            />
            <h1 className="text-4xl">{recipe?.title}</h1>
            <p>Tiempo total de Preparación: {recipe?.readyInMinutes}</p>
            <p>Cantidad de porciones: {recipe?.servings}</p>
            <p>{recipe?.summary}</p>
          </div>
        </div>
      )}
    </>
  );
}
