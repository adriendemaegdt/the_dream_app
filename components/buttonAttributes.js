import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import data_dream from '../data/data_dream'

class ButtonAttribute extends React.Component {
    
    render() {
        
        const tags = this.props.dream_infos_tags
        const height = this.props.height
        const fontSize = this.props.fontSize
      return (
          <View style= {[styles.button, {height: height}]}>
              <Text style= {[styles.text_attributes, {fontSize: fontSize}]}> {tags} </Text>
          </View>
      )}
    }
const styles = StyleSheet.create({
    button: {
        // height: {height},
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#0F143A',
        flex:3, 
        borderRadius:8, 
        marginRight:20,
        padding:5,
        alignSelf: 'flex-start'
        

    },
    text_attributes:{
        color:"white",
        fontFamily:'Harmattan-Bold',
        // fontSize: {fontSize}
    }

})

export default ButtonAttribute