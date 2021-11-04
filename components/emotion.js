import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import data_dream from '../data/data_dream'
import {connect} from 'react-redux'

class EmotionComponent extends React.Component {
    
    saveEmotion = (field,value) => {
        const action = {type : 'SAVE_VALUE' ,value : {[field] : value}}
        console.log(action)
        this.props.dispatch(action)
    }

    render() {
        
        const emotion = this.props.emotion

      return (
          <Button style= {styles.button}
          onPress = {this.saveInput.bind(this)}

          >
              <Text style= {styles.text_attributes}> {emotion} </Text>
          </Button>
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

export default connect()(EmotionComponent)