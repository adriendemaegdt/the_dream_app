import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';


class Plus extends React.Component {
    
    render() {
        const { navigation } = this.props;
      return (
        <View style = {styles.button_view}>
            
            <TouchableOpacity
            style= {styles.button}
            onPress={() => {navigation.navigate('MyDream')} }
            >
                <View style = {styles.vertical}></View>
                <View  style = {styles.horizontal}></View>
            </TouchableOpacity>
        </View>
      )}
    }
const styles = StyleSheet.create({
    button_view:{
        top:-30,
        justifyContent:'center',
        alignItems:'center',
        height:70,
        width:70,
        
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
        height:'40%',
        borderRadius:50,
        width:6, 
        zIndex:2
    },

    horizontal: {
        backgroundColor:'#F8F5FE', 
        borderRadius:50,
        width:'40%',
        height:6,
        position:'absolute',
        zIndex:2

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
