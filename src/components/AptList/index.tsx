import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { styles } from './styles';

export function AptList() {

    let router = useRouter();

    function handleDatails() {
        router.navigate("/stacks/Datails")
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.card}>
            <Pressable onPress={handleDatails} style={styles.cardButton}>
                
                    <Image source={{uri:"https://cdn.mrv.com.br/imoveis/upload/imagens/4600/thumb_detalhes/RECANTO-DAS-ARVORES_PE_PISCINA_2024_05_20_.jpg"}} style={styles.cardImage}/>
                    <View  style={styles.cardInfo}>
                        <Text style={styles.cardInfoTitle}>Hotel Miozine</Text>
                        <Text style={styles.cardInfoSbTitle}>Recife-PE</Text>
                     </View>
            </Pressable>

            <View  style={styles.cardInfoBuy}>
                <Text style={styles.cardInfoBuyText}>R$ 450,00</Text>
                <AntDesign name="star" size={24} color="#F4F4F4" />
            </View>
        </View>

        <View style={styles.card}>
            <Pressable onPress={handleDatails} style={styles.cardButton}>
                
                    <Image source={{uri:"https://cdn.mrv.com.br/imoveis/upload/imagens/4428/thumb_detalhes/RESIDENCIALTOULON_PPCFACHADAENTARDECER_16-01-2023.jpg"}} style={styles.cardImage}/>
                    <View  style={styles.cardInfo}>
                        <Text style={styles.cardInfoTitle}>Hotel Zetion</Text>
                        <Text style={styles.cardInfoSbTitle}>Olinda-PE</Text>
                     </View>
            </Pressable>

            <View  style={styles.cardInfoBuy}>
                <Text style={styles.cardInfoBuyText}>R$ 720,00</Text>
                <AntDesign name="star" size={24} color="#F4F4F4" />
            </View>
        </View>

        <View style={styles.card}>
            <Pressable onPress={handleDatails} style={styles.cardButton}>
                
                    <Image source={{uri:"https://cdn.mrv.com.br/imoveis/upload/imagens/4610/MAR_DE_CAPRI_PPC_GUARITA_2024.07.193535e877-310b-4080-b2e9-3c8cc75e3cc6.webp"}} style={styles.cardImage}/>
                    <View  style={styles.cardInfo}>
                        <Text style={styles.cardInfoTitle}>Hotel MiraMar</Text>
                        <Text style={styles.cardInfoSbTitle}>Maria Farinha-PE</Text>
                     </View>
            </Pressable>

            <View  style={styles.cardInfoBuy}>
                <Text style={styles.cardInfoBuyText}>R$ 1.200,00</Text>
                <AntDesign name="star" size={24} color="#F4F4F4" />
            </View>
        </View>

        <View style={styles.card}>
            <Pressable onPress={handleDatails} style={styles.cardButton}>
                
                    <Image source={{uri:"https://cdn.mrv.com.br/imoveis/upload/imagens/4513/MIRANTEDAPRAIA_PPCGUARITA_23-10-2023.webp"}} style={styles.cardImage}/>
                    <View  style={styles.cardInfo}>
                        <Text style={styles.cardInfoTitle}>Hotel Boa Viagem</Text>
                        <Text style={styles.cardInfoSbTitle}>Recife-PE</Text>
                     </View>
            </Pressable>

            <View  style={styles.cardInfoBuy}>
                <Text style={styles.cardInfoBuyText}>R$ 650,00</Text>
                <AntDesign name="star" size={24} color="#F4F4F4" />
            </View>
        </View>

        <View style={styles.card}>
            <Pressable onPress={handleDatails} style={styles.cardButton}>
                
                    <Image source={{uri:"https://cdn.mrv.com.br/imoveis/upload/imagens/4513/MIRANTEDAPRAIA_PPCPISCINAENTARDECER_23-10-2023.webp"}} style={styles.cardImage}/>
                    <View  style={styles.cardInfo}>
                        <Text style={styles.cardInfoTitle}>Hotel Diagua</Text>
                        <Text style={styles.cardInfoSbTitle}>Recife-PE</Text>
                     </View>
            </Pressable>

            <View  style={styles.cardInfoBuy}>
                <Text style={styles.cardInfoBuyText}>R$ 800,00</Text>
                <AntDesign name="star" size={24} color="#F4F4F4" />
            </View>
        </View>

    </ScrollView>
)}