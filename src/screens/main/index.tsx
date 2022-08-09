import { StyleSheet, Text, View, useWindowDimensions, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RewardStackParamList } from "../../navigators";
import pause from "../../assets/pause.png";
import play from "../../assets/play.png";
import sizeIcon from "../../assets/sizeup.png";
import Video from "react-native-video";
import HeaderCharacter from '../../components/HeaderCharacter';
import TensorFlow from './TensorFlow';
import OpctshortVideo from "../../assets/OpctshortVideo.mp4"

const Main = () => {
    const size = useWindowDimensions();
    const navigation = useNavigation<StackNavigationProp<RewardStackParamList>>();
    const [pauseIn, setPauseIn] = useState(false);
    const [sizeIn, setSizeIn] = useState(true);
    const [mutedIn, setMutedIn] = useState(true);
    const togglePaused = () => setPauseIn(prev => !prev);
    const toggleSized = () => setSizeIn(prev => !prev);
    return (
        <View style={{ flex: 2, backgroundColor: "black" }}>
            {/* <HeaderCharacter /> */}
            <View style={{ flex: 1, alignItems: "center", marginTop: 50 }}>
                <TouchableOpacity style={{ alignItems: "center" }}>

                    <Video
                        // fullscreenAutorotate={true}
                        // fullscreenOrientation="landscape"
                        // fullscreen={sizeIn}
                        paused={pauseIn}
                        playInBackground={false}
                        source={OpctshortVideo}
                        style={{ width: size.width - 160, height: 250 }}
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
                <View style={{ height: 20, marginTop: 90 }}>
                    <TensorFlow />
                </View>
                <TouchableOpacity
                    style={{ marginTop: 390, alignItems: "center", flexDirection: "row", justifyContent: "center", borderRadius: 40, borderColor: "white", borderWidth: 3, width: size.width - 100, borderBottomColor: "white", backgroundColor: "#8CEE49" }}
                    onPress={() => {
                        navigation.navigate("Reward");
                    }}
                >
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 24 }}>Done</Text>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 24 }}>OPCT</Text>
                </TouchableOpacity>
            </View>
        </View >
    );

};

export default Main;

const styles = StyleSheet.create({});