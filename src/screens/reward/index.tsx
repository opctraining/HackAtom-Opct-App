import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import rewardCard from "../../assets/rewardCard.png"

import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { HomeStackParamList } from '../../navigators';
const Reward = () => {
  const [isSuccess, setIsSuccess] = useState(true);
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();
  const onPressHome = () => {
    navigation.navigate("Home")
  }
  return (
    <>
      <View style={styles.container}>
        <View style={{ marginTop: 40, alignSelf: "center", marginBottom: "auto" }}>
          <Text style={[styles.text, { textAlign: "center" }]}>Reward</Text>
          <View style={{ width: 150, height: 200, marginTop: 40 }} >
            <Image source={rewardCard} style={{ width: 150, height: 200 }}></Image>
          </View>

        </View>
        <>
          <View style={styles.box}>
            <Text style={[styles.text, { fontSize: 30, color: "#8CEE49", fontWeight: "700" }]}>SUCCESS</Text>
          </View>
        </>

        <TouchableOpacity
          onPress={onPressHome}
          style={{
            alignSelf: "center",
            backgroundColor: "#8CEE49",
            marginBottom: getBottomSpace() + 40,
            paddingHorizontal: 30, justifyContent: "center", borderRadius: 5,
            borderWidth: 2, borderColor: "white", marginTop: 40,
            paddingVertical: 10
          }}>
          <Text style={{ fontSize: 30, fontWeight: "700" }}>DONE</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Reward;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: "white",
    fontSize: 25,
  },
  box: {
    alignSelf: "center", borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "white",
    marginTop: 20,
    width: Dimensions.get("window").width,
    alignItems: "center",
    paddingVertical: 20
  }
});