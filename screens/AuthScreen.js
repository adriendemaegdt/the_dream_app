import React from 'react'
import { StyleSheet, View, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native'

import Header from '../components/header'

class AuthScreen extends React.Component {

    render() {

        // const { navigation } = this.props;
        return (
        <View style = {styles.container}>
            <TextInput style = {styles.field}
            placeholder = "jereve@dreamz.com"
            autoFocus = {false}
            keyboardAppearance = 'dark'

            >

            </TextInput>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"purple",
        flex:1, 
        flexDirection: 'row'
    }
    ,
    field: {
        fontFamily:'Harmattan-Bold', 
        fontSize:20, 
        color:'white',
        backgroundColor: '#252947',
        borderRadius:12,
        width: '95%',
        height: 100,
         
        justifyContent:'center'
    }
})

export default AuthScreen