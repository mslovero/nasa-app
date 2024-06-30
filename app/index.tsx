import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../hooks/views/Home";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
     <Home />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'rgba(7,26,93,2555)',
    flex:1
  }
});
