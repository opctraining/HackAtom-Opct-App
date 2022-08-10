import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import logo from '../../assets/opct_logo.png';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LoginStackParamList } from '../../navigators';

const Login = () => {
    const navigation = useNavigation<StackNavigationProp<LoginStackParamList>>();
    const movetoPrintWallet = () => {
        navigation.navigate("PrintWallet")
    }
    return (
        <View style={{ flex: 3 }}>
            <View style={{ flex: 1.5, alignItems: "center", justifyContent: "center" }}>
                <Image source={logo} style={{ marginTop: 90, width: 250, height: 250 }} />
            </View>
            <View style={{ flex: 1.5, alignItems: "center" }}>
                <Pressable style={{ alignItems: "center", justifyContent: "center", width: 300, height: 65, backgroundColor: "#8CEE49", borderRadius: 40, borderWidth: 1, borderColor: "white" }} >
                    <Text style={{ fontSize: 24, fontWeight: "bold" }}>IMPORT WALLET</Text>
                </Pressable>
                <TouchableOpacity
                    onPress={movetoPrintWallet}
                    style={{ marginTop: 30, alignItems: "center", justifyContent: "center", width: 300, height: 65, backgroundColor: "white", borderRadius: 40 }} >
                    <Text style={{ fontSize: 24, fontWeight: "bold" }}>CREATE NEW{"\n"}{"     "}WALLET</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login