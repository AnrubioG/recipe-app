import { Categories } from "./components/Categories";
import { RecipeDetail } from "./components/RecipeDetail";
import { useRecipeStore } from "./store/store";

function App() {
  const { currentId } = useRecipeStore();
  return <>{currentId ? <RecipeDetail /> : <Categories />}</>;
}

export default App;
