import React from 'react'
import Login from './components/Login'
import RegisterNow from './components/SignUP'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={RegisterNow} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>

    </NavigationContainer>

  )
}

export default AuthNavigator