import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import data_dream from '../data/data_dream'

class ButtonAttribute extends React.Component {
    
    render() {
        
        const tags = this.props.dream_infos_tags

      return (
          <View style= {styles.button}>
              <Text style= {styles.text_attributes}> {tags} </Text>
          </View>
      )}
    }
const styles = StyleSheet.create({
    button: {
        height: 30,
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
        fontSize:12
    }

})

export default ButtonAttribute