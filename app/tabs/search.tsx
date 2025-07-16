import { Header } from '@/src/components/Header';
import { Input } from '@/src/components/Input';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function Search() {
  return (
    <View style={styles.container} >
        <Header/>
        <View style={styles.space}/>
        <Input />
        <Text style={styles.txt} >...</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        backgroundColor:"#181A20",
        alignItems:"center",
        textAlign:"center"
    },
    space:{
      paddingTop:40,
      width:"100%",
      
    },
    txt:{
      color:"#757575",
      fontSize:120,
      marginTop:120
    }
    })