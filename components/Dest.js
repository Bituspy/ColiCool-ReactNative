import React from "react";
import { Image, Text, StyleSheet, TouchableOpacity, View,ScrollView } from "react-native";
import Topbar from "./destcomps/topbar";
import Destcontent from "./destcomps/destcontent";

export default function Dest({navigation}) {
  const pressHandler = () => {
    navigation.navigate("LivreurList");
  }
  return (
    <View className="">
      <Topbar />
        <View style={styles.readmorerec}>
          <Text>Commander Livreur</Text>
          <TouchableOpacity onPress={pressHandler}>
            <Text>Voir plus</Text>
          </TouchableOpacity>
        </View>
      <Destcontent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

