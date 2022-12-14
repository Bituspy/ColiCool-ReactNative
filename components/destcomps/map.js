import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { Card, Button, Icon } from "@rneui/themed";
import MapView from "react-native-maps";
const Mappart = () => {
  return (
    <View>
      <Card containerStyle={{ marginTop: 15, height: "50%" }}>
        <Card.Title>Localiser Livreur</Card.Title>
        <MapView style={styles.map} />
      </Card>
      <Button type="solid" style={styles.evalButton}>
        Evaluer mon colis
        <Icon name="envelope" type="font-awesome" color="white" />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "80%",
  },
  evalButton: {
    width: "80%",
    left: "10%",
    marginTop: 10,
  },
});

export default Mappart;
