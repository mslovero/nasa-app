import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./routes/views/Home";
import Routes from "./routes";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
     {/* <Home /> */}
     <Routes />
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
