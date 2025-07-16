

import { AptList } from '@/src/components/AptList';
import { Header } from '@/src/components/Header';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function Booking() {
  return (
  <View style={styles.container} >
         <Header/>
         <View style={styles.space}/>
       
         <Text style={styles.txt} >Reservas</Text>
          <View style={styles.space}/>
         <AptList/>
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
       color:"#fff",
       fontSize:28,
     }
     })