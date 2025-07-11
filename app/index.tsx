import { StatusBar, StyleSheet, View } from 'react-native';

import { Home } from '@/src/screens/Home';



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Home/>
      <StatusBar/>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    paddingHorizontal:20,
    backgroundColor:"#181A20"
  }
});
