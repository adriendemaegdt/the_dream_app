import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { Keyboard } from 'react-native';
import {connect} from 'react-redux' 

class QuestionInput extends React.Component {
    constructor(props) {
            super(props);
            this.state = {answer:''}
        }
    inputChange() {
        const field = this.props.name
        const value = this.state.answer
        this.props.onChange(field,value)
     }
    
    componentDidMount(){
        if (this.props.newDream){
            this.state.answer = this.props.newDream[this.props.name] || ""
        }
        else {
            this.state.answer = ""
        }
    }
    render() {
          
     
        
        
      const marginTop = this.props.marginTop
      const height = this.props.height
      const title = this.props.title
      const custom_placeholder = this.props.custom_placeholder
      const multilineAuthorized = this.props.multilineAuthorized
      const answer = this.state.answer
      
     
    
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
                onChangeText={(text) => {this.setState({ answer: text })}}
                onSubmitEditing={() => {
                    Keyboard.dismiss()
                }}
                onEndEditing={() =>this.inputChange()}
                keyboardAppearance = 'dark'
                value = {answer}
                ref='input'

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

const mapStateToProps = (state) => {
    return {
      newDream: state.newDream
    }
}

export default connect (mapStateToProps)(QuestionInput)