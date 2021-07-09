import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
class QuestionInput extends React.Component {
    render() {
      
      
      return (
        <View style= {styles.container}>
            <View style= {styles.question_view}>
                
                <Text style= {styles.question}> Titre  </Text>
            </View>
            <View style= {styles.response_view}>
                <TextInput style= {styles.response} 
                placeholder="Ex: Donnez un titre à votre reve..." 
                placeholderTextColor={'#5A5D6F'}>
                </TextInput>
            </View>
        </View>
      )}
    }
const styles = StyleSheet.create({
    container: {

        height: 100,
        // justifyContent:'center',
        // alignItems:'center',
        padding:10,
        backgroundColor:'grey'

    },
    question_view:{
        
        paddingRight:"25%",
        
        flex:2
    },
    question:{
        // position:'absolute',
        // top:0,
        color:"white",
        fontFamily:'Harmattan-Bold',
        fontSize:24,
        // lineHeight:1
    },
    response_view:{
        backgroundColor: '#252947',
        borderRadius:12,
        width: '85%',
        
        flexDirection:'row',
        flex:3
    },
    response:{

    }

})

export default QuestionInput