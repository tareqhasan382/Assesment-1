import { View, Text } from "react-native";
import React from "react";

export default function Feature({ title, count }) {
  return (
    <View style={{ alignItems: "center", gap: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "400" }}>{title}</Text>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>{count}</Text>
    </View>
  );
}
