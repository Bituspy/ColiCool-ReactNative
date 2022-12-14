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

function contactUs() {

  return (
    <View className="">
      <Topbar />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={{ textAlign: "center", fontSize: 24 }}>GET IN TOUCH!</Text>
        <Icon name="map-marker" type="font-awesome" color="#517fa4" />
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>ADDRESS</Text>
        <Text style={{ textAlign: "center", color: "gray" }}>
          Tunisie,Gafsa 2133
        </Text>
        <Icon name="phone" type="font-awesome" color="#517fa4" />
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>PHONE</Text>
        <Text style={{ textAlign: "center", color: "gray" }}>
          +216 00 00 00 00
        </Text>
        <Icon name="internet-explorer" type="font-awesome" color="#517fa4" />
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>Website</Text>
        <Text style={{ textAlign: "center", color: "gray" }}>
          www.isetgf.rnu.tn
        </Text>
      </ScrollView>
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
  fonts: {
    marginBottom: 8,
    alignItems: "center",
    textAlign: "center",
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

export default contactUs;
