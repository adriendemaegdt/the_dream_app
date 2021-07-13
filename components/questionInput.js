import React , { useState } from 'react'
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

      const height = this.props.height
      const title = this.props.title
      const custom_placeholder = this.props.custom_placeholder
      const multilineAuthorized = this.props.multilineAuthorized

      const answer = this.state
    // this.setState({answer: ''})
     handleAnswer = (text) => {
        this.setState({ answer: text })
     }
        return (
            <View style= {[styles.container, {height:height}] } >
                <View style= {styles.question_view}>
                    
                    <Text style= {styles.question}> {title} </Text>
                </View>
                
                <TextInput style= {styles.response}
                placeholder= {custom_placeholder}
                placeholderTextColor={'#5A5D6F'}
                multiline = {multilineAuthorized}
                returnKeyType = {"done"}
                autoFocus = {false}
                onChangeText={(text) => {handleAnswer(text)}} 
                onSubmitEditing={() => Keyboard.dismiss()}
                keyboardAppearance = 'dark'
                
                
                >
                </TextInput>
                {/* </View> */}
            </View>
        )}
    }

const styles = StyleSheet.create({
    container: {
        
        // justifyContent:'center',
        // alignItems:'center',
        padding:10,
        // backgroundColor:'grey',
        // borderBottomColor:'red'

    },
    question_view:{
        
        paddingRight:"25%",
        
        // flex:2
    },
    question:{
        // position:'absolute',
        // top:0,
        color:"white",
        fontFamily:'Harmattan-Bold',
        fontSize:30,
        // lineHeight:1
    },
    response:{
        fontFamily:'Harmattan-Bold', 
        fontSize:20, 
        color:'white',
        backgroundColor: '#252947',
        borderRadius:12,
        width: '85%',
        // height: height,
        flexDirection:'row',
        flex:3, 
        justifyContent:'center'
    }
})

