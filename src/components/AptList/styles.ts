import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width:"100%",
    gap:20
  },
  cardButton:{
    alignItems:"flex-start",
    flexDirection:"row",
    gap:10
  },
  card:{
    width:"100%",
    height:120,
    borderRadius:12,
    backgroundColor:"#1f222a",
    paddingHorizontal:10,
    alignItems:"center",
    flexDirection:"row",
    gap:10,
    justifyContent:"space-between",
  },
  cardImage:{
    width:90,
    height:90,
    borderRadius:12
  },
  cardInfo:{
    height:"100%",
    gap:10
  },
  cardInfoTitle:{
    color:"#f4f4f4",
    fontSize:16,
    fontWeight:400
  },
  cardInfoSbTitle:{
    color:"#f4f4f4",
    fontSize:14,
    fontWeight:300
  }
});