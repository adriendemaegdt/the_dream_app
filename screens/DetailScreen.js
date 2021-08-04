import React from 'react'
import { StyleSheet, View, Text, TextInput,KeyboardAvoidingView,ScrollView} from 'react-native'
import Header from '../components/header'
import QuestionInput from '../components/questionInput'
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerComponent } from '../components/dateTimePicker';
import Slider from '@react-native-community/slider';
import SliderComponent from '../components/slider';
import SwitchComponent from '../components/switch';
import PositiveEmotions from '../components/PositiveEmotions';
import NegativeEmotions from '../components/NegativeEmotions';

import {connect} from 'react-redux'


class DetailScreen extends React.Component {

    saveInput = (field,value) => {
        const action = {type : 'SAVE_VALUE' ,value : {[field] : value}}
        console.log(action)
        this.props.dispatch(action)
    }
    
    
    render() {
      
      return (
        <KeyboardAvoidingView 
            style={{flexGrow:1,height:'100%', backgroundColor:'#0F1538'}}
            behavior={Platform.OS === "ios" ? "position" : "height"} 
            automaticallyAdjustContentInsets={false} 
            keyboardVerticalOffset={-200} >
            
                <ScrollView 
                    contentContainerStyle={styles.container}>

                    <View style={styles.title_emotions_container}>
                        <Text style= {styles.title_emotions}>Emotions</Text>
                    </View>
                    <PositiveEmotions></PositiveEmotions>
                    <NegativeEmotions></NegativeEmotions>
                    <QuestionInput 
                        multilineAuthorized = {false} 
                        height = {120} 
                        title = "Lieu" 
                        name='location'
                        custom_placeholder = "Ex: Ou se passait votre reve ?"
                        onChange = {this.saveInput.bind(this)}
                    ></QuestionInput>
                    <QuestionInput  
                        multilineAuthorized = {true} 
                        height = {120} 
                        title = "Personnages"
                        name='characters'
                        custom_placeholder = "Ex: Quels étaient les personnages ? "
                        onChange = {this.saveInput.bind(this)}
                    ></QuestionInput>
                    <QuestionInput  
                        multilineAuthorized = {false} 
                        height = {120} 
                        title = "Action"
                        name='action'
                        custom_placeholder = "Ex: Courrir, Voler etc  "
                        onChange = {this.saveInput.bind(this)} 
                    ></QuestionInput>

                    <SliderComponent 
                        onChange = {this.saveInput.bind(this)}
                        title = 'Note du Rêve'
                        name = "rating"
                    ></SliderComponent>
                    <SliderComponent 
                        title = 'Niveau de Lucidité'
                        name='lucidity'
                        onChange = {this.saveInput.bind(this)}
                    ></SliderComponent>
                    <SliderComponent 
                        title = 'Qualité de sommeil'
                        name='sleepQuality'
                        onChange = {this.saveInput.bind(this)}
                    ></SliderComponent>
                    <View style= {{marginTop:40}}>
                        <SwitchComponent 
                        title = "Present dans le rêve: "
                        name='presence'
                        onChange = {this.saveInput.bind(this)}
                        
                    ></SwitchComponent>
                    </View>
                    
                    <SwitchComponent 
                        title = "Cauchemard: "
                        name='nightmare'
                        onChange = {this.saveInput.bind(this)}
                    ></SwitchComponent>
                    <SwitchComponent 
                        title = "Rêve récurrent: "
                        name='recurrent'
                        onChange = {this.saveInput.bind(this)}
                    ></SwitchComponent>
                    
                </ScrollView>
            
        </KeyboardAvoidingView>
      )}
    }
const styles = StyleSheet.create({
    container: {
        height:1300, 
        // flex:1,
        backgroundColor:"#0F1538", 
        // maxHeight:3000
        // justifyContent: 'space-around'

    }, 
    title_emotions_container:{
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

export default connect()(DetailScreen)