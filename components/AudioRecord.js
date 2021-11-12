import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'


class AudioRecord extends React.Component {

    render() {
        const duration = this.props.duration
        const navigation = this.props.navigation
        
        return (
            <View style = {styles.container}>
                <View style= {styles.button_play_view}>
                            <TouchableOpacity
                                style={styles.button_play}>
                                <View style={[styles.triangle,styles.arrowRight]}></View>
                            </TouchableOpacity>
                </View>
                                
            </View>
           
        )
    }
  }

  const styles = StyleSheet.create({

    container:{
        width:300, 
        height:50,
        borderRadius:30,
        backgroundColor:'#2E206F'
    },
    button_play_view:{
        flex:1.5,
        justifyContent:'center',
        alignItems:'center'
    },
    button_play: {
        height:40,
        width:40,
        borderRadius: 180,
        backgroundColor:'#0F143A',
        justifyContent:'center',
        alignItems:'center'
        // marginRight:10
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
    },
    arrowRight: {
        borderTopWidth: 8,
        borderRightWidth: 0,
        borderBottomWidth: 8,
        borderLeftWidth: 12,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: "white",
        borderRadius:5
    },

})

export default AudioRecord
  