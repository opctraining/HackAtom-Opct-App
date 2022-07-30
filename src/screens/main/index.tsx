import { StyleSheet, Text, View, useWindowDimensions, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RewardStackParamList } from "../../navigators";
import pause from "../../assets/pause.png";
import play from "../../assets/play.png";
import sizeIcon from "../../assets/sizeup.png";
import Video from "react-native-video";
import HeaderCharacter from '../../components/HeaderCharacter';
import WorkoutVideo from "../../assets/opctVideo.mp4";
const Main = () => {
  const size = useWindowDimensions();
  const navigation = useNavigation<StackNavigationProp<RewardStackParamList>>();
  const [pauseIn, setPauseIn] = useState(true);
  const [sizeIn, setSizeIn] = useState(true);
  const [mutedIn, setMutedIn] = useState(true);
  const togglePaused = () => setPauseIn(prev => !prev);
  const toggleSized = () => setSizeIn(prev => !prev);
  return (
    <View style={{ flex: 2, backgroundColor: "black" }}>
      <HeaderCharacter />
      <View style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity style={{ marginTop: 20, width: "90%", height: 100, alignItems: "center" }}>

          <Video
            // fullscreenAutorotate={true}
            // fullscreenOrientation="landscape"
            // fullscreen={sizeIn}
            muted={true}
            paused={pauseIn}
            playInBackground={false}
            source={WorkoutVideo}
            style={{ width: 320, height: 250 }}
            resizeMode="none"
          />
          {pauseIn ?
            <TouchableWithoutFeedback onPress={togglePaused}>
              <Image source={play} style={{ width: 25, height: 25, position: "absolute", marginTop: 100, marginLeft: 30 }} />
            </TouchableWithoutFeedback>
            :
            <TouchableWithoutFeedback onPress={togglePaused}>
              <Image source={pause} style={{ width: 25, height: 25, position: "absolute", marginTop: 100, marginLeft: 30 }} />
            </TouchableWithoutFeedback>
          }
          {/* {
                        sizeIn ?
                            <TouchableWithoutFeedback onPress={toggleSized}>
                                <Image source={sizeIcon} style={{ width: 25, height: 25, position: "absolute", marginTop: 150, marginLeft: 80 }}></Image>
                            </TouchableWithoutFeedback>
                            :
                            <TouchableWithoutFeedback onPress={toggleSized}>
                                <Image source={sizeIcon} style={{ width: 25, height: 25, position: "absolute", marginTop: 150, marginLeft: 180 }}></Image>
                            </TouchableWithoutFeedback>
                    } */}

        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => navigation.navigate("WeeklyGame")}
          style={{ width: "90%", marginTop: 50 }} />
        <TouchableOpacity
          style={{ marginTop: 370, alignItems: "center", flexDirection: "row", justifyContent: "center", borderRadius: 40, borderColor: "white", borderWidth: 3, height: size.height - 780, width: size.width - 100, borderBottomColor: "white", backgroundColor: "#8CEE49" }}
          onPress={() => {
            navigation.navigate("Reward");
          }}
        >

          <Text style={{ color: "black", fontWeight: "bold", fontSize: 24 }}>Stop </Text>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 24 }}>OPCT</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
};

export default Main;

const styles = StyleSheet.create({});