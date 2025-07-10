import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';

export function AptList() {
  return (
    <View style={styles.container}>
        <View style={styles.card}>
            <Pressable>
                <View style={styles.cardButton}>
                    <Image source={require("../../../assets/images/ap1.jpg")} style={styles.cardImage}/>
                    <View  style={styles.cardInfo}>
                        <Text style={styles.cardInfoTitle}>Hotel Miozine</Text>
                        <Text style={styles.cardInfoSbTitle}>Recife-PE</Text>
                    </View>
                </View>
            </Pressable>

            <View  style={styles.cardInfoBuy}>
                <Text style={styles.cardInfoBuyText}>R$ 450,00</Text>
                <Ionicons name="bookmarks" size={24} color="#F4F4F4" />
            </View>
        </View>
    </View>
  );
}