import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Controls({
  sort,
  setSort,
  filterValue,
  setFilterValue,
  sorts
}) {

  return (
    <View style={styles.controls}>
      <TextInput
        style={styles.inputText}
        placeholder="Фільтр товарів..."
        value={filterValue}
        onChangeText={setFilterValue}
      />
      <Picker
        selectedValue={sort}
        style={styles.picker}
        onValueChange={(itemValue) => setSort(itemValue)}
      >
        <Picker.Item label="А - Я" value={sorts.ASC} />
        <Picker.Item label="Я - А" value={sorts.DESC} />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  controls: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  inputText: {
    flexBasis: "60%",
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  picker: {
    flexBasis: "35%",
    marginLeft: 10,
  },
});
