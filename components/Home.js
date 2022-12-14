import React from "react";
import { Image, Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "@rneui/themed";
export default function Home({navigation}) {
  const navigateToDestinataire = () => {
    navigation.navigate("Destinataire");
  }
    const navigateToLivreur = () => {
      navigation.navigate("Livreur");
    };
    const NavTocommentCaMarche = () => {
      navigation.navigate("commentCaMarche");
    };
     const NavToContact = () => {
       navigation.navigate("contactUs");
     };
      const NavToMentionsLegales = () => {
        navigation.navigate("mentionsLegales");
      };
       const NavToPartners = () => {
         navigation.navigate("becomepartner");
       };
  return (
    <View className="">
      <View className=""></View>
      <View style={styles.rect}>
        <View className="flex-row px-8 py-[200px] gap-3">
          <TouchableOpacity
            className="bg-white w-40 h-10 rounded-xl"
            onPress={navigateToDestinataire}
          >
            <Text className="text-center text-xl">Destinataire</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-white w-40 h-10 rounded-xl"
            onPress={navigateToLivreur}
          >
            <Text className="text-center text-xl">Delivreur</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../assets/COLICOOL.png")}
          style={styles.image}
        ></Image>
        <Text className="text-center text-xxl">ColiCool</Text>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button4}
            onPress={NavTocommentCaMarche}
          >
            <Text style={styles.commentCaMarche}>Comment ça marche</Text>
          </TouchableOpacity>
          <View style={styles.button3Row}>
            <TouchableOpacity style={styles.button3} onPress={NavToPartners}>
              <Text style={styles.devernirPartenaire}>Devernir partenaire</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={NavToContact}>
              <Text style={styles.contactUs}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={NavToMentionsLegales}>
              <Text style={styles.mentionsLegales}>Mentions légales</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  rect: {
    width: 375,
    height: 505,
    backgroundColor: "rgba(67,128,202,1)",
    borderTopLeftRadius: 78,
    marginTop: 180,
  },
  image: {
    width: 180,
    height: 124,
    marginTop: -580,
    marginLeft: 88,
  },
  footer: {
    width: 375,
    height: 105,
    backgroundColor: "rgba(255,254,254,1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 0,
    marginTop: 400,
  },
  button4: {
    width: 360,
    height: 20,
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    opacity: 0.74,
    justifyContent: "center",
    marginTop: 18,
    marginLeft: 6,
  },
  commentCaMarche: {
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    alignSelf: "center",
  },
  button3: {
    width: 118,
    height: 20,
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    opacity: 0.74,
  },
  devernirPartenaire: {
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    marginTop: 3,
    marginLeft: 13,
  },
  button2: {
    width: 118,
    height: 20,
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    opacity: 0.74,
    marginLeft: 4,
  },
  contactUs: {
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    marginTop: 3,
    marginLeft: 32,
  },
  button: {
    width: 118,
    height: 20,
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    opacity: 0.74,
    marginLeft: 4,
  },
  mentionsLegales: {
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    marginTop: 3,
    marginLeft: 17,
  },
  button3Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 4,
    marginRight: 9,
  },
});


