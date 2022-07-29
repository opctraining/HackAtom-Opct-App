import { Platform } from 'react-native';
import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Home from '../screens/home';
import Reward from '../screens/reward';

const Stack = createStackNavigator();

const GlobalNav = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={
          {
            cardStyle: { backgroundColor: "black", paddingHorizontal: 20 },
            cardStyleInterpolator:
              Platform.OS === "android" ?
                CardStyleInterpolators.forFadeFromBottomAndroid :
                CardStyleInterpolators.forHorizontalIOS
          }
        }>
        <Stack.Screen
          name="Reward"
          component={Reward}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};

export default GlobalNav;