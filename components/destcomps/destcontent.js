import React from "react";
import { Image, Text, TouchableOpacity, StyleSheet, View,ScrollView } from "react-native";
import { Card, Button, Icon } from "@rneui/themed";
import MapView from "react-native-maps";
import Mappart from "./map";


export default function Destcontent() {



  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Card containerStyle={{ marginTop: 15 }}>
        <Card.Title></Card.Title>
        <Image
          style={{ width: "100%", height: 100 }}
          resizeMode="contain"
          source={require("../../assets/deliveryman/1.jpeg")}
        />
        <Card.Divider />
        <Text style={styles.fonts} h4>
          Nom delivreur 1
        </Text>
        <Text style={styles.fonts} h4>
          Status
        </Text>
        <Text style={styles.fonts}>
          Rate (5.0) <Icon name="star" type="font-awesome" color="#517fa4" />
        </Text>
      </Card>

      <Card containerStyle={{ marginTop: 15 }}>
        <Card.Title></Card.Title>
        <Image
          style={{ width: "100%", height: 100 }}
          resizeMode="contain"
          source={require("../../assets/deliveryman/2.jpeg")}
        />
        <Card.Divider />
        <Text style={styles.fonts} h4>
          Nom delivreur 2
        </Text>
        <Text style={styles.fonts} h4>
          Status
        </Text>
        <Text style={styles.fonts}>
          Rate (5.0) <Icon name="star" type="font-awesome" color="#517fa4" />
        </Text>
      </Card>

      <Card containerStyle={{ marginTop: 15 }}>
        <Card.Title></Card.Title>
        <Image
          style={{ width: "100%", height: 100 }}
          resizeMode="contain"
          source={require("../../assets/deliveryman/3.jpeg")}
        />
        <Card.Divider />
        <Text style={styles.fonts} h4>
          Nom delivreur 3
        </Text>
        <Text style={styles.fonts} h4>
          Status
        </Text>
        <Text style={styles.fonts}>
          Rate (5.0) <Icon name="star" type="font-awesome" color="#517fa4" />
        </Text>
      </Card>
      <Mappart />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: "80%",
  },
  map: {
    width: "100%",
    height: "50%",
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

