import React from "react";
import { Image, Text, StyleSheet, TouchableOpacity, View,ScrollView } from "react-native";
import Topbar from "./livcomps/topbar";
import Livcontent from "./livcomps/livcontent";

export default function Liv({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("CommandesList");
  };
  return (
    <View className="">
      <Topbar />
        <View style={styles.readmorerec}>
          <Text>Commandes</Text>
          <TouchableOpacity onPress={pressHandler}>
            <Text>Voir plus</Text>
          </TouchableOpacity>
        </View>
      <Livcontent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: "80%",
  },
  readmorerec: {
    alignSelf: "stretch",
    height: 32,
    flexDirection: "row", // row
    alignItems: "center",
    justifyContent: "space-between", // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
});


