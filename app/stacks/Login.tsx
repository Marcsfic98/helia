import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';


export default function Login() {

  let router = useRouter()

  function handleHome() {
    router.navigate("/tabs/home")
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.header}>
            <AntDesign name="arrowleft" size={24} color="#f4f4f4" />
        </TouchableOpacity>
        <Text style={styles.wellcome}>Faça Login na sua conta</Text>

        <View style={styles.content}>
          <View style={styles.contentInput}>
              <FontAwesome name="envelope" size={24} color="#757575" />
              <TextInput style={styles.input} placeholderTextColor="#757575" placeholder='Seu e-mail'/>
          </View>

          <View style={styles.contentInput}>
              <Entypo name="lock" size={24} color="#757575" />
              <TextInput style={styles.input} placeholderTextColor="#757575" placeholder='Sua senha'/>
          </View>
        </View>

        <TouchableOpacity onPress={()=>handleHome()} style={styles.btnSingnin}><Text style={styles.btnSingninText}>Entrar</Text></TouchableOpacity>

        <View style={styles.containerSeparator}>
            <View style={styles.separator}/>
             <Text style={styles.separatorText}>ou continuar com</Text>
             <View style={styles.separator}/>
        </View>

        

        <View style={styles.footer}>

            <TouchableOpacity style={styles.footerBtn}>
                <FontAwesome name="facebook-square" size={24} color="#1ab55c" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerBtn}>
                <AntDesign name="google" size={24} color="#1ab55c" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerBtn}>
                <AntDesign name="apple1" size={24} color="#1ab55c" />
            </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Não possui conta?</Text>
          <TouchableOpacity ><Text style={styles.footerBtnText}>Cadastre-se</Text></TouchableOpacity>
        </View>
    </View>
  );
}

export const styles = StyleSheet.create({
    container:{
        height:"100%",
        paddingHorizontal:20,
        backgroundColor:"#181A20",
        alignItems:"center"
    },
    header:{
      alignSelf:"flex-start",
      marginTop:50
    },
    wellcome:{
      color:"#f4f4f4",
      marginTop:50,
      fontSize:24,
      fontWeight:"600"
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
    btnSingninText:{
      color:"#f4f4f4",
      fontSize:16,
      fontWeight:800
    },
    containerSeparator:{
      width:"100%",
      marginTop:50,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      gap:10
    },
    separator:{
      height:1,
      backgroundColor:"#757575",
      flex:1,
      
    },
    separatorText:{
      color:"#f4f4f4",
      fontSize:16,
      fontWeight:"400"
    },
    footer:{
      marginTop:50,
      flexDirection:"row",
      gap:15
    },
    footerBtn:{
      width:100,
      height:60,
      backgroundColor:"#1f222a",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:12
    },footerText:{
      color:"#f4f4f4",
      fontSize:16,
      fontWeight:400
    },
    footerBtnText:{
       color:"#1ab55c",
      fontSize:16,
      fontWeight:400
    }
})