import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {FC} from 'react'
import { PostImage as PostImageTypes} from '../../src/types'
import PostImage from '../postImages/PostImage'

const LastFiveDaysImages: FC<{ postImages?: PostImageTypes[] }> = ({postImages}) => {
    // console.log('vinedo mis propsssss',postImages);
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView 
         style={styles.content}
         showsVerticalScrollIndicator={false} 
>
   {postImages?.map(postImage => (
      <PostImage key={`post-image-${postImage.title}`} {...postImage}/>
   ))}
      </ScrollView>
    </View>
  )
}

export default LastFiveDaysImages

const styles = StyleSheet.create({
    container: {
         flex:1,
    },
    content:{
        paddingHorizontal:24,
    },
    title: {
        color: "#fff",
        fontSize:16,
        marginBottom:18
    }
})