import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Feature from "./Feature";
import Info from "./Info";
export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.left}>
          <Image
            source={require("../assets/Oval.png")}
            style={styles.Image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.right}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>The Octocat</Text>
          <Text style={{ color: "blue", fontSize: 20 }}>Octocat</Text>
          <Text style={{ fontSize: 18 }}>Joined 25 Jan 2011</Text>
        </View>
      </View>
      <View style={{ marginVertical: 40 }}>
        <Text style={{ fontSize: 18, lineHeight: 28 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur
          perspiciatis aliquam odio.
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#e0e0eb",
          borderRadius: 10,
          height: 100,
          alignItems: "center",
        }}
      >
        <Feature title="Repos" count="8" />
        <Feature title="Followers" count="3938" />
        <Feature title="Following" count="9" />
      </View>
      <View style={{ marginVertical: 40, width: "100%", gap: 20 }}>
        <Info source={require("../assets/003-pin.png")} title="San Francisco" />
        <Info
          source={require("../assets/002-url.png")}
          title="https://github/tareqhasan382"
        />
        <Info
          source={require("../assets/004-twitter.png")}
          title="Not Available"
        />
        <Info
          source={require("../assets/001-office-building.png")}
          title="@github"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 40,
    width: "100%",
    paddingHorizontal: 10,
  },
  hero: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
    height: 100,
    // backgroundColor: "red",
    borderRadius: 10,
    alignItems: "center",
  },
  left: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    height: 90,
    width: 90,
  },
  right: {
    width: "60%",
  },
});
