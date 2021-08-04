import React from 'react'
import { StyleSheet, View, Text, TextInput,KeyboardAvoidingView,ScrollView} from 'react-native'
import Header from '../components/header'
import QuestionInput from '../components/questionInput'

import {connect} from 'react-redux'


class InterpretationScreen extends React.Component {

    saveInput = (field,value) => {
        const action = {type : 'SAVE_VALUE' ,value : {[field] : value}}
        this.props.dispatch(action)
    }

    render() {
      
      return (
        <KeyboardAvoidingView 
            style = {{flex:1,  backgroundColor:'#0F1538'}}
            behavior={Platform.OS === "ios" ? "height" : "height"} 
            keyboardVerticalOffset={-200}>
            
                <ScrollView contentContainerStyle={styles.container}>
                    
                    <QuestionInput  
                        marginTop = {50} 
                        multilineAuthorized = {true} 
                        height = {150} 
                        title = "Qu'avez vous ressenti en vous réveillant ? " 
                        custom_placeholder = "Ex: Je me sentais particulièrement apaisé..." 
                        name = 'feeling'
                        onChange = {this.saveInput.bind(this)}

                    ></QuestionInput>
                    <QuestionInput
                        marginTop = {30} 
                        multilineAuthorized = {true} 
                        height = {300} 
                        title = "Comment interpréteriez vous votre rêve ? " 
                        custom_placeholder = "Ex: L’action de mon petit frère m’a paru étrangement déplacée peut etre parce que .... "
                        name = 'interpretation'
                        onChange = {this.saveInput.bind(this)} 
                    ></QuestionInput>
                    <QuestionInput  
                        marginTop = {30} 
                        multilineAuthorized = {true} 
                        height = {300} 
                        title = "Quel élément de votre vie ou de votre personnalité ce rêve met il en avant ? " 
                        custom_placeholder = "Ex: J’ai tendance à être possesive et dans mon rêve mon voisin m’avait ...  " 
                        name = 'lifeLink'
                        onChange = {this.saveInput.bind(this)}
                    ></QuestionInput>
                    <View style= {{height:300, width:'100%', backgroundColor:'#0F1538'}}></View>
                    
                </ScrollView>
            {/* </View> */}
        </KeyboardAvoidingView>
      )}
    }
const styles = StyleSheet.create({
    container: {
        
        backgroundColor:"#0F1538",
        height:1000 
        // maxHeight:3000
        // justifyContent: 'space-around'

    }, 
    warning_container:{
        height:50, 
        textAlign:'center',
        paddingLeft:20 ,
        marginTop:30
        // alignItems:'center'
    }, 
    title_emotions:{
        color:"white",
        fontFamily:'Harmattan-Bold',
        fontSize:30,
    }

})

export default connect()(InterpretationScreen)