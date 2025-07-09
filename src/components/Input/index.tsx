import React from 'react';
import { TextInput, View } from 'react-native';

import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { styles } from './styles';

export function Input() {
  return (
    <View style={styles.container}>
        <Feather name="search" size={24} color="#757575" />
        <TextInput style={styles.input} placeholder='Busque sua casa aqui' placeholderTextColor="#757575"></TextInput>
        <FontAwesome6 name="sliders" size={24} color="#1ab65c" />
    </View>
  );
}