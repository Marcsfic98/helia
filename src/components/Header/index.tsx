import React from 'react';
import { Text, View } from 'react-native';

import { AntDesign, Entypo, Octicons } from "@expo/vector-icons";
import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
        <View style={styles.headerLeft}>
            <Entypo style={styles.logo} name="feather" size={24} color="#181A20"  />
            <Text style={styles.headerLeftText}>Helia</Text>
        </View>
        <View style={styles.headerRight}>
            <Octicons name="bell" size={24} color="#F4F4F4" />
            <AntDesign name="star" size={24} color="#F4F4F4" />
            
        </View>
    </View>
  );
}