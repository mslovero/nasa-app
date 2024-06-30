import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { FC, useState, useRef } from 'react'
 import { PostImage } from '../../src/types'
 import { Video, ResizeMode } from 'expo-av';
 const TEST_VIDEO_URL = "https://www.youtube.com/embed/1R5QqhPq1Ik?rel=0";

const TodayImage: FC<PostImage> = ({url , date, title,media_type}) => {
  const video = useRef(null);
  const [status, setStatus] = useState<any>({});


  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        
          <Video
             ref={video}
            source={{ uri: url }} 
            style={styles.image} 
            useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
          
          />
       <View >
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync()
          }
        />
      </View> 
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text>{date}</Text>
      <View>
        <Button  title="view"/>
      </View>
    </View>
  )
}

export default TodayImage

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#2c449d",
    marginVertical:16,
    marginHorizontal:24,
    borderRadius:32,
    padding:16

  },
  containerImage: {
    

  },
  image: {
    width:"100%",
    height:190,
    borderColor:"#fff",
    borderWidth:2,
    borderRadius:32,
  },
  title: {
    fontSize:23,
    color:"white"
  }
})