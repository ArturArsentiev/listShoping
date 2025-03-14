import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Storage from "expo-sqlite/kv-store";
import AddProduct from "./AddProduct"; // адаптований компонент для React Native
import ProductList from "./ProductList"; // адаптований компонент для React Native
import Controls from "./Controls";

export default function Home() {
  const sorts = {
    DESC: "desc",
    ASC: "asc",
  };
  const [products, setProducts] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [sort, setSort] = useState(sorts.ASC);
  const updateProduct = (product) => {
    setProducts((prev) => {
      const newProducts = prev.map((p) => {
        if (p.id === product.id) {
          return product;
        }
        return p;
      });
      Storage.setItem("products", JSON.stringify(newProducts));
      return newProducts;
    });
  };
  useEffect(() => {
    async function fetchProducts() {
      const productsString = await Storage.getItem("products");
      let products = JSON.parse(productsString);
      if (!Array.isArray(products)) {
        products = [];
      }
      setProducts(products);
    }
    fetchProducts();
  }, []);

  function addProduct(title) {
    const lastId = products.sort((a, b) => b.id - a.id)[0]?.id || 0;
    const newProduct = { id: lastId, name: title, checked: false };
    setProducts((prev) => {
      prev.push(newProduct);
      const newProducts = [...prev];

      Storage.setItem("products", JSON.stringify(newProducts));
      return newProducts;
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Список покупок</Text>
      <Controls
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        sort={sort}
        setSort={setSort}
        sorts={sorts}
      />
      {products.length ? (
        <ProductList products={products} updateProduct={updateProduct} />
      ) : null}
      <AddProduct addProduct={addProduct} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
