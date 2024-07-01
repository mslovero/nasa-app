import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../../../components/header/Header'
import FetchApi from '../../../../src/utils/fetch'
import TodayImage from '../../../../components/todayImage'
import { PostImage } from '../../../../src/types'

import { format, sub} from 'date-fns'
import LastFiveDaysImages from '../../../../components/lastFiveDaysImages'
const Home = () => {
    const [todayImage, setTodayImage] = useState<PostImage>({})
    const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([])
    useEffect(() => {
    const loadTodaysImage = async () => {
        try{
            const todayImageResponse = await FetchApi()
            setTodayImage(todayImageResponse)
            //  console.log('imegen', todayImageResponse);
        }catch (error){
            console.error(error);
            setTodayImage({}) 
        }
    }
    const loadLast5DaysImages = async () => {
        try{
            const date = new Date();
            const todayDate = format(date, 'yyyy-MM-dd')
            const fiveDaysAgoDate = format(sub(date, {days:5}),'yyyy-MM-dd')

            const lastFiveDaysImagenResponse = await FetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${todayDate}`)
             setLastFiveDaysImages(lastFiveDaysImagenResponse)
        }catch (error){
             console.error(error);
        }
    }
     loadTodaysImage().catch(null)
     loadLast5DaysImages().catch(null)
    }, [])
    // console.log(' la imagen', todayImage);
    // console.log('viendo last', lastFiveDaysImages);
    
  return (
    <View  style={styles.container}>
        <Header />
        <TodayImage {...todayImage}/>
        <LastFiveDaysImages postImages={lastFiveDaysImages} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:16,
        backgroundColor:'rgba(7,26,93,2555)',

    }
})