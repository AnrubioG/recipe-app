import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form action="/search" method="get" className="flex items-center relative">
      <input
        type="text"
        name="query"
        className="border rounded-full px-10 py-2 w-full bg-transparent"
        placeholder="Buscar..."
      />
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 ">
        <Search />
      </span>
    </form>
  );
}
