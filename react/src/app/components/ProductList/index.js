"use client";
import { useEffect, useState } from "react";
import Product from "../Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    async function fetchProducts() {
      const resp = await fetch("/api/products");
      const products = await resp.json();
      setProducts(products);
    }
    fetchProducts();
  }, []);
  function update(product) {
    setProducts((prevProducts) => {
      const newProducts = [...prevProducts];
      const index = newProducts.findIndex((p) => p.id === product.id);
      newProducts[index] = product;
      fetch("/api/products", { method: "PUT", body: JSON.stringify(product) });
      return newProducts;
    });
  }
  return (
    <ul>
      {products
        ? products.map((product) => (
            <Product key={product.id} product={product} update={update} />
          ))
        : null}
    </ul>
  );
}
