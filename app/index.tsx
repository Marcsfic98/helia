import { StatusBar, View } from 'react-native';

import { Home } from '@/src/screens/Home';
import { styles } from "./styles";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Home/>
      <StatusBar/>
    </View>
  );
}

