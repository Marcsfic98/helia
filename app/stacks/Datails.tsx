import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


export default function Datails() {

   let router = useRouter()
 
   function handleHome() {
     router.navigate("/tabs/home")
   }

  return (
    <View style={styles.container} >
        <ScrollView>
            <View style={styles.header}>
          <Image style={styles.headerImage} source={require("../../assets/images/ap1.jpg")} />
          
          <View style={styles.headerInfoBtn}>
              
              <Pressable onPress={handleHome}>
                  <AntDesign name="arrowleft" size={28} color="#f4f4f4" />
              </Pressable>

              <View style={styles.headerInfoBtnRight}>
                <AntDesign name="star" size={24} color="#f4f4f4" />
                <SimpleLineIcons name="options" size={24} color="#f4f4f4" />
              </View>
          </View>
        </View>

        <Text style={styles.infoNameText}>Hotel Miozine</Text>

        <View style={styles.contentAddress}>
          <Feather name="map-pin" size={24} color="#1ab65c" />
          <Text style={styles.contentAddressText}>Av. Domingos ferreiro , 2558 - Boa Viagem - Recife | PE</Text>
        </View>

        <View style={styles.separator}/>

        <View style={styles.containerGalleryPhotos}>
          <Text style={styles.containerGalleryText}>Galeria de fotos</Text>
          <Text style={styles.containerGalleryTextSellAll}>Ver todas</Text>
        </View>

       <View style={styles.contentPhotosContainer}>
         <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <Image style={styles.contentPhotosImg} source={{uri:"https://cdn.mrv.com.br/imoveis/upload/imagens/4600/thumb_detalhes/RECANTO-DAS-ARVORES_PE_PISCINA_2024_05_20_.jpg"}} />
          <Image style={styles.contentPhotosImg} source={{uri:"https://cdn.mrv.com.br/imoveis/upload/imagens/4600/thumb_detalhes/RECANTO-DAS-ARVORES_PE_APTO-VARANDA_2024_05_20.jpg"}} />
          <Image style={styles.contentPhotosImg} source={{uri:"https://cdn.mrv.com.br/imoveis/upload/imagens/4600/thumb_detalhes/RECANTO-DAS-ARVORES_PE_GUARITA-ENTARDECER_2024_05_20.jpg"}} />
          <Image style={styles.contentPhotosImg} source={{uri:"https://cdn.mrv.com.br/imoveis/upload/imagens/4600/thumb_detalhes/RECANTO-DAS-ARVORES_PE_APTO-AREA-PRIVATIVA_2024_05_20.jpg"}} />
          <Image style={styles.contentPhotosImg} source={{uri:"https://cdn.mrv.com.br/imoveis/upload/imagens/4600/thumb_detalhes/RECANTO-DAS-ARVORES_PE_CHURRASQUEIRA_2024_05_20_.jpg"}} />
        </ScrollView>
       </View>

         <View style={styles.containerGalleryPhotos}>
          <Text style={styles.containerGalleryText}>Detalhes</Text>
        </View>

        <View style={styles.containerDatails}>
            <View style={styles.DatailsItem}>
              <FontAwesome6 name="hotel" size={24} color="#1ab65c" />
              <Text style={styles.DatailsText}>Hotel</Text>
            </View>

            <View style={styles.DatailsItem}>
              <FontAwesome6 name="bed" size={24} color="#1ab65c" />
              <Text  style={styles.DatailsText}>4 Quartos</Text>
            </View>

            <View style={styles.DatailsItem}>
              <FontAwesome6 name="bath" size={24} color="#1ab65c" />
              <Text style={styles.DatailsText}>2 Banheiros</Text>
            </View>

             <View style={styles.DatailsItem}>
              <MaterialIcons name="square-foot" size={24} color="#1ab65c" />
              <Text style={styles.DatailsText}>400 m²</Text>
            </View>
        </View>

        <View style={styles.footer}>
            <View style={styles.footerContainerText}>
                <Text style={styles.footerContainerTextMoney}>R$ 500,00</Text>
                <Text style={styles.footerContainerTextMonth}>/ Dia</Text>
            </View>

            <TouchableOpacity  style={styles.btn}><Text style={styles.btnText}>Reservar</Text></TouchableOpacity>
        </View>
        </ScrollView>
    </View>
  );
}

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#181a20",
        paddingTop:40
    },
    header:{
      width:"100%",
      height:"40%"
    },
    headerImage:{
      width:"100%",
      height:"100%",

      position:"absolute"
    },
    headerInfoBtn:{
      marginTop:30,
      paddingHorizontal:15,
      flexDirection:"row",
      justifyContent:"space-between"
    },
    headerInfoBtnRight:{
      flexDirection:"row",
      gap:10,
      
    },
    infoNameText:{
      color:"#f4f4f4",
      fontSize:36,
      fontWeight:"bold",
      paddingHorizontal:15,
      paddingTop:20
    },
    contentAddress:{
      flexDirection:"row",
      alignItems:"center",
      gap:10,
      paddingHorizontal:15,
      paddingTop:20
    },
    contentAddressText:{
      color:"#f4f4f4",
      fontSize:12
    },
    separator:{
      height:1,
      backgroundColor:"#757575",
      marginHorizontal:15,
      marginTop:20
    },
    containerGalleryPhotos:{
      flexDirection:"row",
      paddingHorizontal:15,
      justifyContent:"space-between",
      marginTop:20
    },  
    containerGalleryText:{
      color:"#f5f5f5",
      fontSize:18,
      fontWeight:"bold"
    },
    containerGalleryTextSellAll:{
      color:"#1ab65c",
      fontSize:16,
      fontWeight:"400"
    },
    contentPhotosContainer:{
      paddingHorizontal:15,
      paddingTop:15,
      height:125
    },
    contentPhotosImg:{
      width:100,
      height:100,
      borderRadius:12,
      marginRight:10
    },
    containerDatails:{
    width:"100%",
    paddingTop:30,
    justifyContent:"space-around",
    flexDirection:"row"
    },
    DatailsItem:{
      gap:10,
      alignItems:"center"
    },
    DatailsText:{
      color:"#757575"
    },
    footer:{
      marginTop:20,
      borderWidth:1,
      height:120,
      borderRightColor:"#757575",
      borderLeftColor:"#757575",
      borderTopColor:"#757575",

      borderTopLeftRadius:26,
      borderTopRightRadius:26,

      paddingHorizontal:10,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center"
    },
    footerContainerText:{
      flexDirection:"row",
      alignItems:"center",
      gap:10,
      width:"50%",
    },
    footerContainerTextMoney:{
      fontSize:26,
      fontWeight:"bold",
      color:"#1ab65c",
      
    },
    footerContainerTextMonth:{
        fontSize:12,
        fontWeight:"400",
        color:"#fff",
    },
    btn:{
        backgroundColor:"#1ab55c",
      width:"40%",
      height:56,
      borderRadius:36,
      alignItems:"center",
      justifyContent:"center",
       elevation:5
    },
    btnText:{
      color:"#f4f4f4",
      fontSize:16,
      fontWeight:800
    }
    
})