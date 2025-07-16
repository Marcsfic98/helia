import { Header } from '@/src/components/Header';
import React from 'react';
import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



export default function Profile() {
  return (
      <View style={styles.container} >
         <Header/>

          <View style={styles.containerimgUser}>
            <Image style={styles.imgUser} source={{ uri: "https://as1.ftcdn.net/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" }} />
            <View style={styles.containerBtnEdit}>
                <Feather  name="edit-2" size={24} color="black" />
            </View>
          </View>

          <Text style={styles.nameUser}>Marcos Ribeiro</Text>

          <View style={styles.separator}/>

          <View style={styles.menuContainer}>

            <TouchableOpacity style={styles.menuContent}>
              <Feather name="user" size={24} color="#fff" />
              <Text style={styles.menuText}>Editar Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuContent}>
              <MaterialIcons name="payment" size={24} color="#fff" />
              <Text style={styles.menuText}>Pagamento</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuContent}>
              <Feather name="bell" size={24} color="#fff" />
              <Text style={styles.menuText}>Notificações</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuContent}>
              <MaterialIcons name="security" size={24} color="#fff" />
              <Text style={styles.menuText}>Segurança</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuContent}>
              <Ionicons name="help-circle-outline" size={24} color="#fff" />
              <Text style={styles.menuText}>Ajuda</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuContentSwitch}>
              <View style={styles.menuContent}>
                  <FontAwesome name="eye" size={24} color="#fff" />
                  <Text style={styles.menuText}>Tema Dark</Text>
              </View>

              <Switch style={styles.switch}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuContent}>
              <Feather name="log-out" size={24} color="red" />
              <Text style={styles.menuTextRed}>Sair</Text>
            </TouchableOpacity>

            
          </View>
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
       containerimgUser:{
        width:150,
        height:150,
        marginTop:50
       },
       imgUser:{
        width:"100%",
        height:"100%",
        borderRadius:75,
        position:"relative"
       },
       nameUser:{
        color:"#fff",
        fontSize:22,
        fontWeight:600,
        marginTop:15
       },
       containerBtnEdit:{
        borderRadius:"50%",
        width:35,
        height:35,
        backgroundColor:"#1ab55c",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        bottom:0,
        right:0
       },
       separator:{
          width:"100%",
          height:1,
          backgroundColor:"#757575",
          paddingHorizontal:15,
          marginTop:20
       },
       menuContainer:{
        marginTop:30,
        width:"100%",
        gap:30,
        paddingHorizontal:15,
       },
       menuContent:{
        flexDirection:"row",
        gap:20,
        alignItems:"center"
       },
       menuText:{
        color:"#fff",
        fontSize:16,
        fontWeight:600
       },
       switch:{
        justifyContent:"flex-end"
       },
       menuContentSwitch:{
        justifyContent:"space-between",
        width:"100%",
        flexDirection:"row"
       },
       menuTextRed:{
         color:"red",
        fontSize:16,
        fontWeight:600
       }
      
       })