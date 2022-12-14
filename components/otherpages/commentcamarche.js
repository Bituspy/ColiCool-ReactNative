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

function commentCaMarche() {

  return (
    <View className="">
      <Topbar />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={{ textAlign: "center", fontSize: 36 }}>
          Comment ça marche?
        </Text>
        <Icon name="user" type="font-awesome" color="#517fa4" />
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
          En tant que : Destinataire
        </Text>

        <Text style={{ textAlign: "center", fontSize: 18 }}>
          Vous devez choisir le livreur et le commander.
        </Text>
        <Icon name="truck" type="font-awesome" color="#517fa4" />
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
          En tant que : Livreur
        </Text>

        <Text style={{ textAlign: "center", fontSize: 18 }}>
          Vous recevez des demandes de livraison, vous pouvez soit les accepter
          soit les refuser.
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

export default commentCaMarche;
