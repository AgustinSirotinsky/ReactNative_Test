import React from "react";
import {SafeAreaView, StyleSheet, TextInput} from "react-native";

// Cajas
const Cajas = () => {
  return (
    <View
      style={{
        flexDirection:"row",
        height:100,
        padding:20
      }}
    >
      <View style={{ backgroundColor:"blue", flex:0.3}}/>
      <View style={{ backgroundColor:"red", flex:0.5}}/>
      <Text>El pepe</Text>
      </View>
  );
};

// Texto de muestra
const TextoDeMuestra=()=> {
  const [text,onChangeText]=React.useState("Useless text");
  const [number,onChangeNumber]=React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      />
      <TextInput
      style={styles.input}
      onChangeText={onChangeNumber}
      value={number}
      placeholder="useless placeholder"
      keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input:{
    height:40,
    margon:12,
    borderWidth:1,
    padding:10,
  }
})
export default TextoDeMuestra;