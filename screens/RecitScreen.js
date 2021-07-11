import React from 'react'
import { StyleSheet, View, Text, TextInput, ScrollViewComponent } from 'react-native'
import Header from '../components/header'
import QuestionInput from '../components/questionInput'



class RecitScreen extends React.Component {
    render() {
      console.log("yo")
      return (
       <View style={styles.container}>
           
           <QuestionInput height = {100} title = "Titre" custom_placeholder = "Ex: Donnez un titre à votre reve..." ></QuestionInput>
           {/* <QuestionInput height = {100} title = "Titre" custom_placeholder = "Ex: Donnez un titre à votre reve..." ></QuestionInput> */}
           <QuestionInput height = {200} title = "Racontez votre rêve" custom_placeholder = "Ex: Racontez votre reve..." ></QuestionInput>
          
            {/* <Header></Header> */}
       </View>
      )}
    }
const styles = StyleSheet.create({
    container: {
        height:"100%", 
        backgroundColor:"#0F1538"

    }

})

export default RecitScreen