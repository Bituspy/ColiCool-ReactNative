import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
  Alert,
} from "react-native";
import { Card, Button, Icon,Chip,Avatar} from "@rneui/themed";
const Livcontent = () => {

  const createAlertConfirm = () =>
    Alert.alert("Commande accepted", "You agreed to deliver this command, the client will be informed.", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
      const createAlertDeny = () =>
        Alert.alert(
          "Commande declined",
          "You refused to deliver this command.",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Card>
        <Card.Title></Card.Title>
        <Chip
          title="Commande 1"
          type="outline"
          containerStyle={{ marginVertical: 15 }}
        />
        <Chip
          title="Commande 2"
          type="outline"
          containerStyle={{ marginVertical: 15 }}
        />
        <Chip
          title="Commande 3"
          type="outline"
          containerStyle={{ marginVertical: 15 }}
        />
        <Chip
          title="Commande 4"
          type="outline"
          containerStyle={{ marginVertical: 15 }}
        />
      </Card>
      <View style={styles.readmorerec}>
        <Text>Demandes</Text>
      </View>

      <View>
        <Card>
          <Avatar
            size={32}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
          <Card.Title>Nom.Utilisateur</Card.Title>
          <Text style={styles.fonts}>Adresse</Text>
          <Card.Divider></Card.Divider>
          <View style={styles.options}>
            <Icon
              name="thumbs-up"
              type="font-awesome"
              color="#0ca628"
              onPress={createAlertConfirm}
            />
            <Icon
              name="thumbs-down"
              type="font-awesome"
              color="#a60c0c"
              onPress={
                createAlertDeny
            }
            />
          </View>
          <Text style={styles.fonts}>Temps</Text>
        </Card>
      </View>
      <View>
        <Card>
          <Avatar
            size={32}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
          <Card.Title>Nom.Utilisateur</Card.Title>
          <Text style={styles.fonts}>Adresse</Text>
          <Card.Divider></Card.Divider>
          <View style={styles.options}>
            <Icon
              name="thumbs-up"
              type="font-awesome"
              color="#0ca628"
              onPress={() => console.log("yes")}
            />
            <Icon
              name="thumbs-down"
              type="font-awesome"
              color="#a60c0c"
              onPress={() => console.log("no")}
            />
          </View>
          <Text style={styles.fonts}>Temps</Text>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  options: {
    height: 30,
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-around", // center, space-around
    paddingLeft: 5,
  },
});

export default Livcontent;
