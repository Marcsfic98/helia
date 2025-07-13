import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function stacks() {
  return (
    <View style={styles.container} >
        <Text>details</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#181a20"
    }
})