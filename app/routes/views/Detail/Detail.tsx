import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../../src/types";
import Header from "../../../../components/header";
import YoutubePlayer from "react-native-youtube-iframe";

const Detail = () => {
  
  const {
    params: { title, url, explanation, date },
    
  } = useRoute<NativeStackScreenProps<RootStackParams, "Detail">["route"]>();

  // console.log('viendo explanation', explanation);
  
// Función para verificar si la URL es un video de YouTube
const isYoutubeUrl = (url: string) => {
  return url.includes("youtube.com") || url.includes("youtu.be");
};

// Función para extraer el ID del video de YouTube
const getYoutubeId = (url: string) => {
  const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const matches = url.match(regex);
  return matches ? matches[1] : null;
};
const youtubeId = getYoutubeId(url);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
      {isYoutubeUrl(url) ? (
          <YoutubePlayer height={300} play={false} videoId={youtubeId} />
        ) : (
          <Image source={{ uri: url }} style={styles.image} />
        )}       
         <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.contentExplanation}          showsVerticalScrollIndicator={false} 
        > 
        <Text style={styles.explanation}>
        {explanation}
        </Text>
      </ScrollView>
      </View>
      
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7,26,93,2555)",
  },
  content: {
    
    backgroundColor: "#2c449d",
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
    flex:1,
  },
  image: {
    width:'100%',
    height:'50%',
    borderColor:'#fff',
    borderRadius:32,
    borderWidth:2,
    marginBottom:16

  },
  title: {
     color: '#fff',
     fontWeight:'bold',
     marginBottom:16

  },
  
  date: {
     color: '#fff',
    fontWeight:'bold'
  },
  contentExplanation: {
    marginVertical:16
  },
  explanation:{
color:'#fff',
fontSize:16
  }
});
