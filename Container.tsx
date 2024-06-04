import React from 'react'
import Home from './screens/Home';
import GetAPI from './screens/GetAPI';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Container = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{ headerShown: false, statusBarHidden: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Get" component={GetAPI} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Container