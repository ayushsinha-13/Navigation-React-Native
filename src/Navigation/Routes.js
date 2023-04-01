import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import About from '../Screens/About';

const Stack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name='About' component={About} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes