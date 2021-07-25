import React from 'react'
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native';


export default function Header (props) {

    const navigation = props.navigation
    const title = props.title
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.cancel}
            onPress={()=>{
                clearNewDream()
                navigation.goBack
                }} 
            >
            Cancel</TouchableOpacity>
            <Text style={styles.title}>title</Text>
            <TouchableOpacity style={styles.save}>Sauvegarder</TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
	container: {
        height:50,
        width :Dimensions.get('window').width,
        flexDirection:"row",
        backgroundColor:"#23195E",
		justifyContent: 'center', 
		alignSelf: 'center', 
	},
    cancel:{
        position:'absolute', 
        left:10, 
        backgroundColor:'pink'
    },
    title:{
        fontSize:20, 
        fontFamily:'Harmmatan-Bold'
    }, 
    save:{
        position:'absolute', 
        right:10, 
        backgroundColor:'pink'
    }

})