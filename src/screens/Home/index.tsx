import React from 'react';
import { Text, View } from 'react-native';

import { Header } from '@/src/components/Header';
import { Input } from '@/src/components/Input';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
        <Header/>
        <Text style={styles.userName}>Olá, Marcos Ribeiro</Text>
        <Input/>
    </View>
  );
}