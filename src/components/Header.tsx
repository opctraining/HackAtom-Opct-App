import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { useNavigation } from "@react-navigation/native";
import { leftIcon } from '../assets';


interface HeaderProps {
  headerRight?: JSX.Element;
  viewStyle?: ViewStyle;
}

const Header = ({ headerRight, viewStyle }: HeaderProps) => {
  const navigation = useNavigation<StackNavigationProp>();

  return (
    <View style={[styles.container, viewStyle]}>
      <TouchableOpacity onPress={navigation.goBack()}>
        <Image source={leftIcon} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
      {headerRight}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
    paddingHorizontal: 20
  }
});