import React from 'react'
import { StyleSheet, View, Text, Image, Button, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {LinearGradient} from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';

import JournalScreen from "../screens/journalScreen";
import AnalyseScreen from "../screens/AnalyseScreen";
import ExplorerScreen from "../screens/ExplorerScreen";
import ProfilScreen from "../screens/ProfilScreen";
import RecitScreen from '../screens/RecitScreen';

import Plus from '../components/plus';
import TopTabNewDream from './TopTabNewDream';
import StackNewDream from './StackNewDream';
import PlusIcon from '../assets/images/plus_icon.svg'




const Button_plus = ({children, onPress, navigation}) => (
    // const navigation = useNavigation();
    // navigation.navigate('NewDream')
// console.log(props)
<View style = {styles.button_view}>
    <TouchableOpacity 
    onPress={() => {console.log('rey')}}
    style={{
        top:-30,
        justifyContent:"center",
        alignItems:'center',
    }}
    >
        <View style={{width:70, height:70, borderRadius:35, backgroundColor:'#7A40C6', justifyContent:'center', alignItems:'center' }}>
            {children}
            <LinearGradient
            colors={['#7039B8', '#9654EC']}
            style={styles.gradient}
            >
                
                {/* <View style = {styles.vertical}></View>
                <View  style = {styles.horizontal}></View> */}
            </LinearGradient>
        </View>
    </TouchableOpacity>
    </View>
)



const Tab = createBottomTabNavigator()
const Tabs = ({navigation}) => {
    return(

    <Tab.Navigator
    tabBarOptions={{
        showLabel:false,
        style:{
            position:'absolute',
            borderRadius:6,
            backgroundColor:"#252947",
            height:70,
            // borderTopColor:'red',
            ...styles.shadow
        }, 
        

    }
    }
    >
        
          <Tab.Screen name="JournalScreen" component={JournalScreen} 
          options={{
              tabBarIcon:({focused}) => (
                  <View style={{
                      alignItems:'center',
                      justifyContent:'center',
                      top:10
                  }}>
                      <Image 
                      source= {require('../assets/images/tab_bar_mes_reves.png')}
                      style={
                        {width: 25,
                        height:25,
                        tintColor: focused ? "white" : "#8E8FA2"
                        }
                      }></Image>
                      <Text style={{
                          color: focused ? "white" : "#8E8FA2",
                          fontSize:12,
                          fontFamily:focused ? 'Harmattan-Bold' : 'Harmattan-Regular'
                      }}>Mes Rêves</Text>
                  </View>
              )
          }} 
          />

          <Tab.Screen name="Analyse" component={AnalyseScreen}
          options={{
            tabBarIcon:({focused}) => (

                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    top:10,

                }}>
                    <Image 
                    source= {require('../assets/images/tab_bar_analyse.png')}
                    style={
                      {width: 25,
                      height:25,
                      tintColor: focused ? "white" : "#8E8FA2",
                      
                      }
                    }></Image>
                    <Text style={{
                        color: focused ? "white" : "#8E8FA2",
                        fontSize:12,
                        fontFamily:focused ? 'Harmattan-Bold' : 'Harmattan-Regular'
                    }}>Analyses</Text>
                </View>
            )
        }} 
          />

          <Tab.Screen name="TopTabNewDream" component={StackNewDream}
          
          
          options={{
             title: 'My home' ,
            //   tabBarVisible:false,
              tabBarIcon:({focused}) => (
                  <PlusIcon resizeMode = "contain" style = {{ width:30, height:30, color:'white', top:35}}/>
              )
              ,
              tabBarButton:(props) => (
                //   <Button_plus {...props} ></Button_plus>
                  
                //   <Plus {...props}/>
                <Plus></Plus>
              )
              
          }}
          listeners={({navigation}) => ({
              tabPress: event => {
                  event.preventDefault();
                  navigation.navigate("TopTabNewDream")
              }
          })}

          />

          <Tab.Screen name="Explorer" component={ExplorerScreen}
          options={{
            tabBarIcon:({focused}) => (

                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    top:10
                }}>
                    <Image 
                    source = {require('../assets/images/tab_bar_compass.png')}
                    style={
                      {width: 25,
                      height:25,
                      tintColor: focused ? "white" : "#8E8FA2"
                      }
                    }></Image>
                    <Text style={{
                        color: focused ? "white" : "#8E8FA2",
                        fontSize:12,
                        fontFamily:focused ? 'Harmattan-Bold' : 'Harmattan-Regular'
                    }}>Explorer</Text>
                </View>
            )
        }} 
          />
          <Tab.Screen name="Profil" component={ProfilScreen} 
          options={{
            tabBarIcon:({focused}) => (
                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    top:10
                }}>
                    <Image 
                    source= {require('../assets/images/tab_bar_profil.png')}
                    style={
                      {width: 25,
                      height:25,
                      tintColor: focused ? "white" : "#8E8FA2"
                      }
                    }></Image>
                    <Text style={{
                        color: focused ? "white" : "#8E8FA2",
                        fontSize:12,
                        fontFamily:focused ? 'Harmattan-Bold' : 'Harmattan-Regular'
                    }}>Profil</Text>
                </View>
             
            )
        }} 
          />
        
    </Tab.Navigator>
   
    )
}
const styles = StyleSheet.create({
    shadow:{
        shadowColor:'blue'
    },
    button_view:{
        top:0,
        justifyContent:'center',
        alignItems:'center',
        height:70,
        width:70,
        
    },
    button: {
        width:'100%',
        height:'100%',
        borderRadius: 180,
        // backgroundColor:'#7A40C6',
        justifyContent:'center',
        alignItems:'center',
    },

    vertical:{
        backgroundColor:'#F8F5FE',
        height:'45%',
        borderRadius:50,
        width:7
    },
    horizontal: {
        backgroundColor:'#F8F5FE', 
        borderRadius:50,
        width:'45%',
        height:7,
        position:'absolute'

    },
    gradient:{
        width:'100%',
        height:'100%',
        borderRadius: 180,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Tabs 