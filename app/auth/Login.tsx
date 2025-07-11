import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
        <Text>Login</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center"
    }
})