import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import data_dream from '../data/data_dream'

class EmotionComponent extends React.Component {
    
    render() {
        
        const emotion = this.props.emotion

      return (
          <View style= {styles.button}>
              <Text style= {styles.text_attributes}> {emotion} </Text>
          </View>
      )}
    }
const styles = StyleSheet.create({
    button: {
        height: 35,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#252947',
        borderRadius:8, 
        marginRight:20,
        paddingRight:10,
        paddingLeft:10,
        alignSelf: 'flex-start'
        

    },
    text_attributes:{
        color:"white",
        fontFamily:'Harmattan-Bold',
        fontSize:15
    }

})

export default EmotionComponent