import { StyleSheet, View, FlatList } from "react-native";
import Product from "./Product";

export default function ProductList({ products, updateProduct }) {
  const renderItem = ({ item, index }) => {
    const itemStyle = [styles.productItem];

    if (index % 2 === 0) {
      itemStyle.push(styles.oddItem);
    }

    return (
      <View style={itemStyle}>
        <Product key={item.id} product={item} updateProduct={updateProduct} />
      </View>
    );
  };

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 0,
  },
  productItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: "#e9f5e9",
    borderLeftWidth: 5,
    borderLeftColor: "#66bb6a",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  oddItem: {
    backgroundColor: "#f0f0f0",
    borderLeftColor: "#999",
  },
});
