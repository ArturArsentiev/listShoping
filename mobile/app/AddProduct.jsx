import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

export default function AddProduct({ addProduct }) {
  const [title, setTitle] = useState("");

  const handleAddProduct = () => {
    if (title.trim()) {
      addProduct(title);
      setTitle("");
    }
  };

  return (
    <View style={styles.addItem}>
      <TextInput
        style={styles.inputText}
        placeholder="Новий товар"
        value={title}
        onChangeText={setTitle}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
        <Text style={styles.buttonText}>Додати</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addItem: {
    flexDirection: "row",
    marginTop: 20,
  },
  inputText: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginLeft: 10,
    borderRadius: 4,
    backgroundColor: "#66bb6a",
  },
  buttonText: {
    color: "#fff",
  },
});
