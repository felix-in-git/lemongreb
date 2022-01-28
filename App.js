// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import dashboard from './src/pages/dashboard'
import bike from './src/pages/bike'
import food from './src/pages/food'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="dashboard" component={dashboard} />
        <Stack.Screen name="bike" component={bike} />
        <Stack.Screen name="food" component={food} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;