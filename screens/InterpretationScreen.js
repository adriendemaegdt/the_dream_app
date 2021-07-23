import React from 'react'
import { StyleSheet, View, Text, TextInput,KeyboardAvoidingView,ScrollView} from 'react-native'
import Header from '../components/header'
import QuestionInput from '../components/questionInput'




class InterpretationScreen extends React.Component {
    render() {
      
      return (
        <KeyboardAvoidingView style = {{flex:1}}behavior={Platform.OS === "ios" ? "height" : "height"} keyboardVerticalOffset={-200}>
            {/* <View style={{height: 10000, }}> */}
                <ScrollView contentContainerStyle={styles.container}>
                    {/* <View style={styles.warning_container}>
                        <Text style= {styles.title_emotions}>Emotions</Text>
                    </View> */}
                    
                    <QuestionInput  marginTop = {50} multilineAuthorized = {true} height = {150} title = "Qu'avez vous ressenti en vous réveillant ? " custom_placeholder = "Ex: Je me sentais particulièrement apaisé..." ></QuestionInput>
                    <QuestionInput  marginTop = {30} multilineAuthorized = {true} height = {300} title = "Comment interpréteriez vous votre rêve ? " custom_placeholder = "Ex: L’action de mon petit frère m’a paru étrangement déplacé peut etre parce que .... " ></QuestionInput>
                    <QuestionInput  marginTop = {30} multilineAuthorized = {true} height = {300} title = "Quel élément de votre vie ou de votre personnalité ce rêve met il en avant ? " custom_placeholder = "Ex: J’ai tendance à être possesive et dans mon rêve mon voisin m’avait ...  " ></QuestionInput>
                    <View style= {{height:300, width:'100%', backgroundColor:'#0F1538'}}></View>
                    
                </ScrollView>
            {/* </View> */}
        </KeyboardAvoidingView>
      )}
    }
const styles = StyleSheet.create({
    container: {
        
        backgroundColor:"#0F1538", 
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

export default InterpretationScreen