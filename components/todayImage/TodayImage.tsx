import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React, { FC, useState, useCallback } from 'react';
import { PostImage } from '../../src/types';
import YoutubePlayer from "react-native-youtube-iframe";

// Función para extraer el ID del video desde la URL
const extractVideoId = (url) => {
  const regex = /(?:\?v=|\/embed\/|\.be\/|\/v\/|\/watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regex);
  return match && match[1] ? match[1] : url;
};

const TodayImage: FC<PostImage> = ({ url, date, title, media_type }) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("¡El video ha terminado de reproducirse!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const videoId = extractVideoId(url);

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <View style={styles.image}
        >
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={videoId}
          onChangeState={onStateChange}
        />
        </View>
    
        {/* <Button title={playing ? "Pausar" : "Reproducir"} onPress={togglePlaying} /> */}
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text>{date}</Text>
      <View>
        <Button title="Ver" />
      </View>
    </View>
  );
}

export default TodayImage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16
  },
  containerImage: {},
  image: {
    width: "100%",
    height:200,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 32,
    paddingVertical:20,
    paddingHorizontal:10
  },
  title: {
    fontSize: 23,
    color: "white"
  }
});
