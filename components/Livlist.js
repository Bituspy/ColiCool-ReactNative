import React from "react";
import Topbar from "./destcomps/topbar";
import Destcontent from "./destcomps/destcontent";
import {
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView
} from "react-native";
import { Card, Button, Icon } from "@rneui/themed";

function Livlist() {

      const livreurData = [
        {
          name: "Liv1",
          status: "Status1",
          Rate: 5,
          piclink: require('../assets/deliveryman/1.jpeg'),
        },
        {
          name: "Liv2",
          status: "Status2",
          Rate: 4,
          piclink: require('../assets/deliveryman/2.jpeg'),
        },
        {
          name: "Liv3",
          status: "Status3",
          Rate: 4,
          piclink: require('../assets/deliveryman/2.jpeg'),
        },
        {
          name: "Liv4",
          status: "Status4",
          Rate: 5,
          piclink: require('../assets/deliveryman/3.jpeg'),
        },
        {
          name: "Liv5",
          status: "Status5",
          Rate: 3,
          piclink: require('../assets/deliveryman/3.jpeg'),
        },
        {
          name: "Liv6",
          status: "Status6",
          Rate: 2,
          piclink: require('../assets/deliveryman/2.jpeg'),
        },
      ];  
      
  return (
    <View className="">
      <Topbar />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={{ textAlign: "center",fontSize: 24 }}>
          La liste des livreurs
        </Text>

        {livreurData.map((y) => {
          return (
            <Card containerStyle={{ marginTop: 15 }}>
              <Card.Title></Card.Title>
              <Image
                style={{ width: "100%", height: 100 }}
                resizeMode="contain"
                source={y.piclink}
              />

              <Card.Divider />
              <Text style={styles.fonts} h4>
                {y.name}
              </Text>
              <Text style={styles.fonts} h4>
                {y.status}
              </Text>
              <Text style={styles.fonts}>
                Rate ({y.Rate})
                <Icon name="star" type="font-awesome" color="#517fa4" />
              </Text>
            </Card>
          );
        })}
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

export default Livlist;
