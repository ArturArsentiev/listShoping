import React from "react";
import { StyleSheet, View, Text, Switch } from "react-native";

export default function Product({ product, updateProduct }) {
  const onValueChange = (newValue) => {
    updateProduct({ ...product, checked: newValue });
  };

  return (
    <View style={styles.productContainer}>
      <Switch value={product.checked} onValueChange={onValueChange} />
      <Text style={styles.productName}>{product.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  productName: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
});
