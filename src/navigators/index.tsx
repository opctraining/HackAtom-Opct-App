import { Platform } from 'react-native';
import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Home from '../screens/home';
import Main from "../screens/main";
import Reward from '../screens/reward';
import TensorFlow from '../screens/main/TensorFlow';

const Stack = createStackNavigator();

export type MainStackParamList = {
  Main: undefined;
  TensorFlow: undefined
};
export type RewardStackParamList = {
  Reward: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
};


const GlobalNav = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={
          {
            cardStyle: { backgroundColor: "black" },
            cardStyleInterpolator:
              CardStyleInterpolators.forHorizontalIOS
          }
        }>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TensorFlow"
          component={TensorFlow}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reward"
          component={Reward}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};

export default GlobalNav;