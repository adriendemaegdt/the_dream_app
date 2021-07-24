import React , { useState, useRef, useCallback } from 'react'
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform  } from 'react-native'
import { Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class QuestionInput extends React.Component {
    constructor(props) {
            super(props);
            this.state = {answer:""};
        }
        componentDidMount() { }
    render() {
      const marginTop = this.props.marginTop
      const height = this.props.height
      const title = this.props.title
      const custom_placeholder = this.props.custom_placeholder
      const multilineAuthorized = this.props.multilineAuthorized

      const answer = this.state.answer
      
      const clearInput = ()=>{
          return this.input.clear()
      }
     
    
        return (
            <View style= {[styles.container, {height:height}, {marginTop: marginTop}] } >
                <View style= {styles.question_view}>
                    
                    <Text style= {styles.question}> {title} </Text>
                </View>
                
                <TextInput style= {styles.response}
                placeholder= {custom_placeholder}
                placeholderTextColor={'#5A5D6F'}
                multiline = {multilineAuthorized}
                returnKeyType = {"done"}
                
                autoFocus = {false}
                onChangeText={(text) => this.setState({ answer: text })}
                onSubmitEditing={() => Keyboard.dismiss()}
                keyboardAppearance = 'dark'
                value = {answer}
                ref='input'
                // {input => { this.textInput = input }}

                
                >
                </TextInput>

            </View>
        )}
    }

const styles = StyleSheet.create({
    container: {
        
        // justifyContent:'center',
        // alignItems:'center',
        padding:10,

    },
    question_view:{
        
        paddingRight:"15%",
        
        // flex:2
    },
    question:{
        // position:'absolute',
        // top:0,
        color:"white",
        fontFamily:'Harmattan-Bold',
        fontSize:30,
        lineHeight:35
    },
    response:{
        fontFamily:'Harmattan-Bold', 
        fontSize:20, 
        color:'white',
        backgroundColor: '#252947',
        borderRadius:12,
        width: '95%',
        // height: height,
        flexDirection:'row',
        flex:3, 
        justifyContent:'center'
    }
})

