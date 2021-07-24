import React from 'react'
import { StyleSheet,KeyboardAvoidingView,ScrollView} from 'react-native'
import QuestionInput from '../components/questionInput'
import { DateTimePickerComponent } from '../components/dateTimePicker';
import {connect} from 'react-redux'



class RecitScreen extends React.Component {

    saveInput = (field,value) => {
        const action = {type : 'SAVE_VALUE' ,value : {[field] : value}}
        this.props.dispatch(action)
    }

    saveDate = (event,value) => {
        this.saveInput('date',value)
    }

    render() {
        
      return (
        <KeyboardAvoidingView style = {{flex:1}}behavior={Platform.OS === "ios" ? "position" : "position"}  keyboardVerticalOffset={-200}>
            <ScrollView style={styles.container}>
                
                <DateTimePickerComponent onChange = {this.saveDate.bind(this)}></DateTimePickerComponent>
                
                <QuestionInput 
                multilineAuthorized = {false} 
                height = {120} 
                title = "Titre" 
                custom_placeholder = "Ex: Donnez un titre à votre reve..."
                ref = 'title'
                name = 'title'
                onChange = {this.saveInput.bind(this)}
                >
                </QuestionInput>
                <QuestionInput 
                multilineAuthorized = {true} 
                height = {200} 
                title = "Racontez votre rêve" 
                custom_placeholder = "Ex: Racontez votre reve..." 
                ref = 'story'
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
        height:2000, 
        backgroundColor:"#0F1538", 
        // justifyContent: 'space-around'

    }

})

export default connect()(RecitScreen)