import React from 'react'
import { StyleSheet, View, Text, Image, Button, FlatList, TouchableOpacity } from 'react-native'

export default class NavBar extends React.Component {
	render() {
        // const height = this.props.height
        // console.log(height)
		return (
            <View style={styles.nav_bar}>
                <View style={styles.left}>

                </View>
                <View style={styles.center}></View>
                <View style={styles.right}></View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
	nav_bar: {
        position:'absolute',
        bottom:0,
        height:80,
        width:'100%',
        flexDirection:"row",
        backgroundColor:"#23195E"
		// justifyContent: 'center', 
		// alignSelf: 'center', 
	},
    left:{
        flex:2,
        backgroundColor:'green'
    },
    center:{
        backgroundColor:'grey',
        flex:1.5
    },
    right:{
        backgroundColor:'orange',
        flex:2
    }
})