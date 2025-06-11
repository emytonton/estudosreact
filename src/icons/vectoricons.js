import React from "react";
import { View, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function App() {
  return (
    <View style={styles.container}>
      <Feather name="camera" size={60} color="#1e90ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
