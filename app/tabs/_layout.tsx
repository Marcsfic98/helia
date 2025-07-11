import { Tabs } from "expo-router";

import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Text, View } from "react-native";

export default function TabsLayout() {
    return(
        <Tabs screenOptions={{headerShown:false, tabBarStyle:{backgroundColor:"#181a20",height:80,paddingTop:20},tabBarShowLabel:false, tabBarActiveTintColor:"#1ab65c",tabBarInactiveTintColor:"#757575"}} >
            <Tabs.Screen name="home"  options={{tabBarIcon:({color})=> (
                <View>
                    
                    <FontAwesome6 name="house-chimney" size={24} color={color} />
                    <Text style={{color:color,fontSize:10}}>Home</Text>
                </View>
            )}} />
            <Tabs.Screen name="search" options={{tabBarIcon:({color})=> (
                <View>
                    
                    <FontAwesome name="search" size={24} color={color} />
                    <Text style={{color:color ,fontSize:10}}>Buscar</Text>
                </View>
            )}} />
            <Tabs.Screen name="booking" options={{tabBarIcon:({color})=> (
                <View>
                    
                    <Entypo name="bookmarks" size={24} color={color} />
                    <Text style={{color:color,fontSize:10}}>Reservas</Text>
                </View>
            )}} />
            <Tabs.Screen name="profile" options={{tabBarIcon:({color})=> (
               <View>
                    
                   <SimpleLineIcons name="user" size={24} color={color} />
                   <Text style={{color:color,fontSize:10}}>Perfil</Text>
               </View>
            )}} />
        </Tabs>
    )
}