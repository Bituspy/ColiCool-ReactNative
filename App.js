import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View,SafeAreaView } from "react-native";
import Navigator from './routes/homestack';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

});