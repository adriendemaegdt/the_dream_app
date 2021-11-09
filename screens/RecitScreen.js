import React from 'react'
import { StyleSheet,KeyboardAvoidingView,ScrollView} from 'react-native'
import QuestionInput from '../components/questionInput'
import AudioRecorder from '../components/AudioRecorder';
import { DateTimePickerComponent } from '../components/dateTimePicker';
import {connect} from 'react-redux'



class RecitScreen extends React.Component {

    saveInput = (field,value) => {
        const action = {type : 'SAVE_VALUE' ,value : {[field] : value}}
        this.props.dispatch(action)
    }

    saveDate = (event,value) => {


        // We change the format of the date given by the DateTimePickerComponent into day- month - year 

        var months = { 
            Jan: "Janvier", 
            Feb:"Février", 
            Mar:'Mars', 
            Apr:'Avril', 
            May: 'Mai', 
            Jun: 'Juin', 
            Jul: 'Juillet', 
            Aug:'Aout', 
            Sep: 'Septembre', 
            Oct: 'Octobre', 
            Nov: 'Novembre', 
            Dec: 'Décembre'
        }
        var dreamDate = value.toString().substring(4, 15)
        var theMonth = ''

        Object.keys(months).forEach(key => {
            
            if (dreamDate.substring(0,3) === key.toString()) {
                theMonth = months[key]
            }
          });
    
        var formatedDate = dreamDate.substring(4,6) + ' ' + theMonth  + ' ' + dreamDate.substring(7,15)

// We save the formated date to the redux state

this.saveInput('date',formatedDate)

}

    render() {
        
      return (
        <KeyboardAvoidingView 
            style = {{flex:1,  backgroundColor:'#0F1538'}}
            behavior={Platform.OS === "ios" ? "position" : "position"}  
            keyboardVerticalOffset={-200}>
            
            <AudioRecorder></AudioRecorder>

            <ScrollView contentContainerStyle={styles.container}>
                
                <DateTimePickerComponent onChange = {this.saveDate.bind(this)}></DateTimePickerComponent>
                
                <QuestionInput 
                multilineAuthorized = {false} 
                height = {120} 
                title = "Titre" 
                custom_placeholder = "Ex: Donnez un titre à votre reve..."
                name = 'title'
                onChange = {this.saveInput.bind(this)}
                >
                </QuestionInput>
                <QuestionInput 
                multilineAuthorized = {true} 
                height = {200} 
                title = "Racontez votre rêve" 
                custom_placeholder = "Ex: Racontez votre reve..." 
                name = 'story'
                onChange = {this.saveInput.bind(this)}
                >
                </QuestionInput>
                
            </ScrollView>
            
        </KeyboardAvoidingView>
      )}
    }
const styles = StyleSheet.create({
    container: {
        height:3000, 
        backgroundColor:"#0F1538", 

    }

})

export default connect()(RecitScreen)