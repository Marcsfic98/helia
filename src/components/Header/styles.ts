import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width:"100%",
    marginTop:60,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  headerLeft:{
    flexDirection:"row",
    alignItems:"center",
    gap:10
  },
  headerLeftText:{
    color:"#fff",
    fontSize:24,
    fontWeight:800
  },
  headerRight:{   
    flexDirection:"row",
    alignItems:"center",
    gap:10
  },
  logo:{
    width:30,
    height:30,
    backgroundColor:"#1ab65c",
    borderRadius:8,
    paddingLeft:5,
    paddingTop:2
  }
});