import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParams } from '../../src/types';
import Home from './views/Home';
import Detail from './views/Detail';

const Stack = createNativeStackNavigator<RootStackParams>();

const routeScreenDefaultOptions = {
  headerStyle: {
    backgroundColor:'rgba(7,26,93,2555)',
  }, 
  headerTitleStyle: {
    color:"#fff"
  }
}
const Rutes = () => {

  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={routeScreenDefaultOptions}/>  
        <Stack.Screen name='Detail' component={Detail} options={routeScreenDefaultOptions}/>

      </Stack.Navigator>
     </NavigationContainer>

  )
}

export default Rutes

const styles = StyleSheet.create({})