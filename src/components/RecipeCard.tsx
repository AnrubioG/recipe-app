import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Recipe } from "@/hooks/useRecipes";

type RecipeCardProps = {
  onClick: () => void;
  title: Recipe["title"];
  img: Recipe["image"];
};

export default function RecipeCard({ onClick, title, img }: RecipeCardProps) {
  return (
    <button onClick={onClick}>
      <Card className="p-2 bg-slate-800">
        <CardContent className="p-0 w-full overflow-hiddenn">
          <img
            src={img}
            alt={`Imagen de ${title}`}
            className="w-full max-h-44 rounded-lg inset-0 object-cover object-top"
          />
        </CardContent>
        <CardFooter className="p-0">
          <p className="p-3">{title}</p>
        </CardFooter>
      </Card>
    </button>
  );
}
