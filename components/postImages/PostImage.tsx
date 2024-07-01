import { Button, StyleSheet, Text, View } from 'react-native'
import React, {FC} from 'react'
import { PostImage  as PostImageTypes} from '../../src/types'

import { useNavigateToDetail } from '../../hooks/useNavigationToDetail';


const PostImage: FC<PostImageTypes> = ({title, date, url, explanation}) => {
  const navigateToDetail = useNavigateToDetail();

  const handleViewPress = () => {
    navigateToDetail(title, date, url, explanation);
 }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button  title='view' onPress={handleViewPress}/>
      </View>

    </View>
  )
}

export default PostImage

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(18,39,113,255)',
        borderRadius:20,
        marginBottom:12,
        padding:16
    },
    title: {
        color:"#fff",
        fontWeight:"bold",
        marginBottom:12,
        fontSize:18

    },
    date: {
        color:"#fff",
    },
    buttonContainer: {
        alignItems:"flex-end"
    }
})