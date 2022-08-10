import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AccountProvider } from '../home/AccountProvider';
import { ConnectionProvider } from '../home/ConnectionProvider';
import { Wallet } from '../home/Wallet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HomeStackParamList } from '../../navigators';

export default function PrintWallet() {
    const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();

    return (
        <View>
            <View style={{ marginTop: 50, alignItems: "center" }}>
                <AccountProvider>
                    <ConnectionProvider>
                        <Wallet />
                    </ConnectionProvider>
                </AccountProvider>
            </View>
            <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Home")
                    }}
                    style={{ alignItems: "center", justifyContent: "center", marginTop: 150, borderRadius: 40, backgroundColor: "#8CEE49", width: 300, height: 60, borderWidth: 1, borderColor: "white" }}
                >
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 24 }}>CREATE WALLET</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}