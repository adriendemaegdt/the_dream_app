import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import RecitScreen from '../screens/RecitScreen';

class Plus extends React.Component {
    
    render() {
        const { navigation } = this.props;
      return (
        <View style = {styles.button_view}>
            
            <TouchableOpacity
            style= {styles.button}
            onPress={() => {navigation.navigate('RecitScreen')} }
            >
                <LinearGradient
            colors={['#7039B8', '#9654EC']}
            style={styles.gradient}
            >
                
                <View style = {styles.vertical}></View>
                <View  style = {styles.horizontal}></View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
      )}
    }
const styles = StyleSheet.create({
    button_view:{
        justifyContent:'center',
        alignItems:'center',
        height:65,
        width:65,
        
    },
    button: {
        width:'100%',
        height:'100%',
        borderRadius: 180,
        backgroundColor:'#7A40C6',
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
// export default Plus
export default function(props) {
    const navigation = useNavigation();
  
    return <Plus {...props} navigation={navigation} />;
  }
