import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import FetchApi from '../../../src/utils/fetch'
import TodayImage from '../../../components/todayImage'
import { PostImage } from '../../../src/types'

const Home = () => {
    const [todayImage, setTodayImage] = useState<PostImage>({})
    useEffect(() => {
    const loadTodaysImage = async () => {
    try{
        const todayImageResponse = await FetchApi()
        setTodayImage(todayImageResponse)
        console.log('imegen', todayImageResponse);
    }catch (error){
        console.error(error);
        setTodayImage({})
        
}
    }
     loadTodaysImage().catch(null)
    }, [])
    console.log('viendo la imagen', todayImage);
    
  return (
    <View  style={styles.container}>
        <Header />
        <TodayImage {...todayImage}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:16
    }
})