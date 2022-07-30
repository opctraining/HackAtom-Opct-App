import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const Reward = () => {
  const [isSuccess, setIsSuccess] = useState(true);
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={{ marginTop: 40, alignSelf: "center", marginBottom: "auto" }}>
          <Text style={[styles.text, { textAlign: "center" }]}>Reward</Text>
          <View style={{ width: 150, height: 200, borderColor: "white", borderWidth: 1, marginTop: 20 }} />
        </View>
        {isSuccess ?
          <>
            <View style={styles.box}>
              <Text style={[styles.text, { fontSize: 30, color: "#8CEE49", fontWeight: "700" }]}>SUCCESS</Text>
            </View>
            <View style={styles.box}>
              <Text style={[styles.text, { fontSize: 30, color: "#c41d30", fontWeight: "700" }]}>FAIL</Text>
            </View>
          </>
          :
          <View style={styles.box}>
            <Text style={styles.text}>Fail</Text>
          </View>
        }
        <TouchableOpacity style={{
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
    width: Dimensions.get("window").width,
    alignItems: "center",
    paddingVertical: 20
  }
});