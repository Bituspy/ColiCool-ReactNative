import React from "react";
import Topbar from "./destcomps/topbar";
import Destcontent from "./destcomps/destcontent";
import {
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { Card, Button, Icon,Chip } from "@rneui/themed";

function CommandesList() {

      const commandesData = [
        {
          name: "Commmande 1",
        },
        {
          name: "Commmande 2",
        },
        {
          name: "Commmande 3",
        },
        {
          name: "Commmande 4",
        },
        {
          name: "Commmande 5",
        },
        {
          name: "Commmande 6",
        },
        {
          name: "Commmande 7",
        },
      ];  
      
  return (
    <View className="">
      <Topbar />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={{ textAlign: "center", fontSize: 24 }}>
          La liste des commandes
        </Text>
        <Card>
          <Card.Title></Card.Title>
          {commandesData.map((y) => {
            return (
              <Chip
                title={y.name}
                type="outline"
                containerStyle={{ marginVertical: 15 }}
              />
            );
          })}
        </Card>
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

export default CommandesList;
