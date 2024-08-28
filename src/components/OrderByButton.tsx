import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectGroup } from "@radix-ui/react-select";

export default function OrderByButton() {
  return (
    <Select>
      <SelectTrigger className="w-48 rounded-full">
        <SelectValue placeholder="Ordenar por" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="anywere">Seleccione</SelectItem>
          <SelectItem value="name">Nombre</SelectItem>
          <SelectItem value="category">Categoría</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
