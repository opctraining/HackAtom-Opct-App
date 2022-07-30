import { StyleSheet, Text, View, useWindowDimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from "../../navigators";
import character from "../../assets/character_long.png";
import sun from "../../assets/mon.png";
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  const size = useWindowDimensions();
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  return (
    <View style={{ flex: 7, backgroundColor: "black" }}>

      <View style={{ flex: 4, marginTop: 20 }}>
        <View style={{ borderWidth: 1, alignItems: "center", justifyContent: "flex-start", flex: 1, marginTop: 100 }}>
          <Image source={character} style={{ width: 200, height: 270, }} />
        </View>


      </View>
      <View style={{ flex: 4, marginLeft: 20, marginBottom: 45, backgroundColor: "#232323", width: "90%", borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomLeftRadius: 45, borderBottomRightRadius: 45 }}>
        <View style={{ width: "50%", flex: 0.7, alignItems: "center", justifyContent: "center", height: 50, borderBottomWidth: 3, borderBottomColor: "#8CEE49" }}>
          <Text style={{ marginBottom: 1, color: "#8CEE49", fontSize: 24, fontWeight: "bold" }}>Mission</Text>
        </View>
        <View style={{ flex: 2.3, alignItems: "center", justifyContent: "center", }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>

            <Text style={{ color: "white", marginRight: 15 }}>WEEKLY</Text>

            <View style={{ borderWidth: 1, borderColor: "white", width: 200, height: 20, borderRadius: 35 }}>

              <LinearGradient
                colors={['red', 'orange', 'yellow', 'green', 'blue', '#8000FF']}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                style={{ marginTop: 1, marginLeft: 1.6, height: 15, width: 180, alignItems: 'center', justifyContent: 'center', borderRadius: 35 }}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 25, marginRight: 15, alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 14, marginRight: 10, }}>DAILY</Text>
            <View>
              <Text style={{ fontSize: 8, color: "white", marginRight: 5, marginLeft: 20 }}>SUN</Text>
            </View>
            <Text style={{ fontSize: 8, color: "white", marginRight: 5, marginLeft: 5 }}>MON</Text>
            <Text style={{ fontSize: 8, color: "white", marginRight: 5, marginLeft: 5 }}>TUE</Text>
            <Text style={{ fontSize: 8, color: "white", marginRight: 5, marginLeft: 5 }}>WED</Text>
            <Text style={{ fontSize: 8, color: "white", marginRight: 5, marginLeft: 5 }}>THU</Text>
            <Text style={{ fontSize: 8, color: "white", marginRight: 5, marginLeft: 5 }}>FRI</Text>
            <Text style={{ fontSize: 8, color: "white", marginRight: 5, marginLeft: 5 }}>SAT</Text>
          </View>
          <Image source={sun} style={{ width: 100, height: 30, marginRight: 110 }} />
        </View>

        <View style={styles.bottomelement}>
          <TouchableOpacity
            style={{
              alignItems: "center", flexDirection: "row", justifyContent: "center", borderRadius: 40, borderColor: "white", borderWidth: 3,
              width: size.width - 100, borderBottomColor: "white", backgroundColor: "#8CEE49"
            }}
            onPress={() => {
              navigation.navigate("Main");
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 24 }}>READY, </Text>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 24 }}>OPCT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 10,
              alignItems: "center", flexDirection: "row", justifyContent: "center", borderRadius: 40, borderColor: "white", borderWidth: 3,
              width: size.width - 100, borderBottomColor: "white", backgroundColor: "#8CEE49"
            }}
            onPress={() => {
              navigation.navigate("TensorFlow");
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 24 }}>TensorFlow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  bottomelement: {
    alignItems: "center",
    flex: 1.5,
    height: 100,
  },
  Test: { color: 'white' },
  topelement: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile: {
    borderRadius: 45,
    width: 40,
    height: 40,
    padding: 10,
  },
  profileImage: {
    width: 30,
    height: 30,
  },
  StatBox: {
    borderRadius: 30,
    borderWidth: 1,
    bordercolor: 'white',
    width: 142,
    height: 10,
    flexDirection: 'row',
    padding: 20,
    marginTop: 5,
  },
  coin1: {
    width: 41,
    height: 20,
  },
  coin2: {
    width: 41,
    height: 20,
  },
});