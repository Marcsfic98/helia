import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';





export default function SingUp() {

  let router = useRouter()

   function handleLogin() {
    router.navigate("/stacks/Login")
  }

  return (
    <View style={styles.container} >
         <TouchableOpacity onPress={handleLogin} style={styles.header}>
            <AntDesign name="arrowleft" size={24} color="#f4f4f4" />
        </TouchableOpacity>
        <Text style={styles.wellcome}>Crie sua conta !</Text>

        <View style={styles.content}>

          <View style={styles.contentInput}>
              <FontAwesome6 name="user-large" size={24} color="#757575" />
              <TextInput style={styles.input} placeholderTextColor="#757575" placeholder='Seu nome'/>
          </View>

          <View style={styles.contentInput}>
              <Fontisto name="date" size={24} color="#757575" />
              <TextInput style={styles.input} placeholderTextColor="#757575" placeholder='Data de nascimento'/>
          </View>

          <View style={styles.contentInput}>
              <FontAwesome name="envelope" size={24} color="#757575" />
              <TextInput style={styles.input} placeholderTextColor="#757575" placeholder='Seu e-mail'/>
          </View>

          <View style={styles.contentInput}>
              <Entypo name="lock" size={24} color="#757575" />
              <TextInput style={styles.input} placeholderTextColor="#757575" placeholder='Sua senha'/>
          </View>

          <View style={styles.contentInput}>
              <Entypo name="lock" size={24} color="#757575" />
              <TextInput style={styles.input} placeholderTextColor="#757575" placeholder='Confirme Sua senha'/>
          </View>
        </View>

        <TouchableOpacity  style={styles.btnSingnin}><Text style={styles.BtnText} >Criar conta</Text></TouchableOpacity>
    </View>
  );
}


export const styles = StyleSheet.create({
    container:{
        flex:1,
        height:"100%",
        backgroundColor:"#181a20",
        paddingTop:40,
        paddingHorizontal:15
    },
    header:{
      alignSelf:"flex-start",
      marginTop:50
    },
    wellcome:{
      color:"#f4f4f4",
      marginTop:50,
      fontSize:24,
      fontWeight:"600",
      textAlign:"center"
    },
    content:{
      width:"100%",
      marginTop:50,
      alignItems:"center",
      gap:20
    },
    contentInput:{
      width:"100%",
      height:56,
      backgroundColor:"#1f222a",
      borderRadius:12,
      flexDirection:"row",
      alignItems:"center",
      paddingHorizontal:20,
      gap:10,
      elevation:5
    },
    input:{
      flex:1,
      color:"#757575"
    },
    btnSingnin:{
      backgroundColor:"#1ab55c",
      width:"100%",
      height:56,
      borderRadius:36,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
       elevation:5
    },
    BtnText:{
      color:"#fff",
      fontSize:18,
      fontWeight:"bold"
    }
  })