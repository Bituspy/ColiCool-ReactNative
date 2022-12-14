import React from 'react';
import { Image, Text, TouchableOpacity,StyleSheet, View } from "react-native";
const Footer = () => {
  return (
    <View style={styles.rect}>
      <TouchableOpacity style={styles.button4}>
        <Text style={styles.commentCaMarche}>Comment ça marche</Text>
      </TouchableOpacity>
      <View style={styles.button3Row}>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.devernirPartenaire}>Devernir partenaire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.contactUs}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.mentionsLegales}>Mentions légales</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    width: 375,
    height: 105,
    backgroundColor: "rgba(55,54,54,1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
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

export default Footer
