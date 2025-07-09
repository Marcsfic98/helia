import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

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
        </View>
    </View>
  );
}