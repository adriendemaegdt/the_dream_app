import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import Header from './header'
import QuestionInput from './questionInput'

class Recit extends React.Component {
    render() {
      
      return (
       <View style={styles.container}>
           <Header></Header>
           <QuestionInput></QuestionInput>
           <QuestionInput></QuestionInput>
           <QuestionInput></QuestionInput>

       </View>
      )}
    }
const styles = StyleSheet.create({
    container: {

    }

})

export default Recit