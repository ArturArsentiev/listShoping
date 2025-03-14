import AddProduct from "../AddProduct";
import Controls from "../Controls";
import ProductList from "../ProductList";

export default function Main() {
  return (
    <div className="container">
      <h1>Список покупок</h1>
      <Controls />
      <ProductList />
      <AddProduct />
    </div>
  );
}
