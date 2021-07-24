import React from 'react'
import { StyleSheet, View, Text, TextInput,KeyboardAvoidingView,ScrollView} from 'react-native'
import Header from '../components/header'
import QuestionInput from '../components/questionInput'
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerComponent } from '../components/dateTimePicker';



class RecitScreen extends React.Component {
    render() {
const clearInputs = () => {
    this.title.clearInput()
}

      return (
        <KeyboardAvoidingView style = {{flex:1}}behavior={Platform.OS === "ios" ? "position" : "position"}  keyboardVerticalOffset={-200}>
            <ScrollView style={styles.container}>
                
                <DateTimePickerComponent></DateTimePickerComponent>
                
                <QuestionInput 
                multilineAuthorized = {false} 
                height = {120} 
                title = "Titre" 
                clearInput = {clearInput}
                custom_placeholder = "Ex: Donnez un titre à votre reve..."
                ref = 'title'
                >
                </QuestionInput>
                <QuestionInput 
                multilineAuthorized = {true} 
                height = {200} 
                title = "Racontez votre rêve" 
                custom_placeholder = "Ex: Racontez votre reve..." >
                    
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

export default RecitScreen