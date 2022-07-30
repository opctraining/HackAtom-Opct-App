import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Video from "react-native-video";
import WorkoutVideo from "../../assets/opctVideo.mp4"
const Main = () => {
    return (
        <View style={{ flex: 2, backgroundColor: "black" }}>
            <View style={{ flex: 1, alignItems: "center" }}>
                <TouchableOpacity style={{ marginTop: 110, width: "width: 90%", height: 100, borderWidth: 1, borderColor: "white", alignItems: "center" }}>
                    <Video
                        source={WorkoutVideo}
                        style={{ width: 300, height: 300 }}
                        resizeMode="none"
                        repeat
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    // onPress={() => navigation.navigate("WeeklyGame")}
                    style={{ width: "90%", marginTop: 50 }}>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default Main

const styles = StyleSheet.create({})