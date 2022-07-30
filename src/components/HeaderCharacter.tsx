import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { useNavigation } from "@react-navigation/native";
import { leftIcon } from '../assets';
import Character from "../assets/character_2.png"

interface HeaderProps {
  headerRight?: JSX.Element;
  viewStyle?: ViewStyle;
}

const HeaderCharacter = ({ headerRight, viewStyle }: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, viewStyle]}>

      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={() => navigation.goBack()}
      >
        <Image source={Character} style={{ width: 41, height: 56 }} />
        <Text style={{ marginTop: 15, marginLeft: 5, color: "white" }}>23353</Text>
      </TouchableOpacity>
      {headerRight}
    </View>
  );
};

export default HeaderCharacter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 20,
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
    paddingHorizontal: 20
  }
});