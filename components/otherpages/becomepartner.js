import React from "react";
import Topbar from "../destcomps/topbar";
import {
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { Card, Button, Icon } from "@rneui/themed";

function becomepartner() {

  return (
    <View className="">
      <Topbar />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={{ textAlign: "center", fontSize: 24 }}>
          PARTNER PROGRAM
        </Text>
        <Image
          source={require("../../assets/partner.png")}
          style={styles.image}
        ></Image>
        <Button type="solid" style={styles.btnstyle}>
          Become a partner 
          <Icon name="handshake-o" type="font-awesome" color="white" />
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnstyle: {
    width: "80%",
    left: "10%",
    marginTop: 10,
  },
  contentContainer: {
    paddingBottom: "80%",
  },
  fonts: {
    marginBottom: 8,
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: 100,
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

export default becomepartner;
