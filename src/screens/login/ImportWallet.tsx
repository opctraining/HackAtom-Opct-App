import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AccountProvider } from '../home/AccountProvider';
import { ConnectionProvider } from '../home/ConnectionProvider';
import { Wallet } from '../home/Wallet';
import { Keypair, PublicKey } from '@solana/web3.js';

export default function ImportWallet() {

    const [word, SeedWords] = useState("")
    const [text, onChangeText] = useState("시드구문을 입력하세요")
    // testKey : Keypair.fromSeed가져와야함
    return (
        <View>
            <View style={{ marginTop: 50, alignItems: "center" }}>
                <AccountProvider>
                    <ConnectionProvider>
                        {/* <Wallet /> */}
                    </ConnectionProvider>
                </AccountProvider>
            </View>
            <View>
                <Text style={{ color: "white" }}>12 words</Text>
                <TextInput
                    style={{ height: 40, margin: 12, borderWidth: 1, borderColor: "white", padding: 10 }}
                    onChangeText={SeedWords}
                    value={word} />
            </View>
        </View>
    )
}