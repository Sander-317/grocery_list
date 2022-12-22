import "./App.css";
import List from "./components/List.js";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <GroceryList />
      <ShoppingCart />
      <List />
    </div>
  );
}

export default App;
