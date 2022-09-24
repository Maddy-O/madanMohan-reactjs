import "./App.css";
import { getAllProducts, getAllCategories } from "./Redux/action";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  const handleProductsClick = () => {
    dispatch(getAllProducts());
  };

  const handleCategoriesClick = () => {
    dispatch(getAllCategories());
  };

  console.log("App.js", products);
  console.log("App.js", categories);
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={handleProductsClick}>fetch Products</button>
      <button onClick={handleCategoriesClick}>fetch Categories</button>
    </div>
  );
}

export default App;
