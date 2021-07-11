import React , { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { Keyboard } from 'react-native';


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

      const answer = this.state
    // this.setState({answer: ''})
     handleAnswer = (text) => {
        this.setState({ answer: text })
        console.log(answer)
     }
        return (
            <View style= {[styles.container, {height:height}] }>
                <View style= {styles.question_view}>
                    
                    <Text style= {styles.question}> {title} </Text>
                </View>
                <View  style= {styles.response_view }  >
                    <TextInput style= {styles.response}
                    placeholder= {custom_placeholder}
                    placeholderTextColor={'#5A5D6F'}
                    multiline = {true}
                    returnKeyType = {"done"}
                    autoFocus = {true}
                    onChangeText={(text) => {handleAnswer(text)}} 
                    onSubmitEditing={() => Keyboard.dismiss()}
                    
                    
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    // {...this.props}
                   
                    // onChangeText={(text) => {
                    //     this.setState({ text })
                    // }}
                    // onContentSizeChange={(event) => {
                    //     this.setState({ height: event.nativeEvent.contentSize.height })
                    // }}
                    >
                    </TextInput>
                </View>
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
        fontSize:24,
        // lineHeight:1
    },
    response_view:{
        backgroundColor: '#252947',
        borderRadius:12,
        width: '85%',
        // height: height,
        flexDirection:'row',
        flex:3
    }, 
    response:{
        fontFamily:'Harmattan-Regular', 
        fontSize:20, 
        color:'white'
    }
})

