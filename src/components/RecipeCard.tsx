import { Card, CardContent, CardFooter } from "@/components/ui/card";

type RecipeCardProps = {
  name: string;
  img: string;
};

export default function RecipeCard({ name, img }: RecipeCardProps) {
  return (
    <Card className="p-2 bg-slate-800">
      <CardContent className="p-0 w-full overflow-hiddenn">
        <img
          src={`/img/${img}`}
          alt={`Imagen de ${name}`}
          className="w-full max-h-44 rounded-lg inset-0 object-cover object-top"
        />
      </CardContent>
      <CardFooter className="p-0">
        <p className="p-3">{name}</p>
      </CardFooter>
    </Card>
  );
}
