import { View, Text, Image } from "react-native";
import React from "react";

export default function Info({ title, source }) {
  return (
    <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
      <Image
        source={source}
        resizeMode="contain"
        style={{ height: 30, width: 30 }}
      />
      <Text style={{ fontSize: 18, color: "gray" }}>{title}</Text>
    </View>
  );
}
