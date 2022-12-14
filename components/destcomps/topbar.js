import React from "react";
import { Image, Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { Icon } from "@rneui/themed";
const Topbar = () => {
  return (
    <View style={styles.topb}>
      <Icon
        name="bars"
        type="font-awesome"
        color="#000"
        onPress={() => console.log("test1")}
      />
      <Text>Destinataire</Text>
      <Icon
        name="cart-plus"
        type="font-awesome"
        color="#000"
        onPress={() => console.log("test2")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topb: {
    alignSelf: "stretch",
    height: 72,
    flexDirection: "row", // row
    backgroundColor: "rgba(67,128,202,1)",
    alignItems: "center",
    justifyContent: "space-between", // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Topbar;
