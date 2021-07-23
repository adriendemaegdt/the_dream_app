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


class DetailScreen extends React.Component {
    render() {
      
      return (
        <KeyboardAvoidingView style={{flexGrow:1,height:'100%'}}behavior={Platform.OS === "ios" ? "position" : "height"} automaticallyAdjustContentInsets={false} keyboardVerticalOffset={-200} >
            {/* <View style={{height: 10000, }}> */}
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.title_emotions_container}>
                        <Text style= {styles.title_emotions}>Emotions</Text>
                    </View>
                    <PositiveEmotions></PositiveEmotions>
                    <NegativeEmotions></NegativeEmotions>
                    <QuestionInput multilineAuthorized = {false} height = {120} title = "Lieu" custom_placeholder = "Ex: Ou se passait votre reve ?" ></QuestionInput>
                    <QuestionInput  multilineAuthorized = {true} height = {120} title = "Personnages" custom_placeholder = "Ex: Quels étaient les personnages ? " ></QuestionInput>
                    <QuestionInput  multilineAuthorized = {false} height = {120} title = "Action" custom_placeholder = "Ex: Courrir, Voler etc  " ></QuestionInput>
                    <SliderComponent title = 'Note du Rêve'></SliderComponent>
                    <SliderComponent title = 'Niveau de Lucidité'></SliderComponent>
                    <SliderComponent title = 'Qualité de sommeil'></SliderComponent>
                    <SwitchComponent title = "Present dans le rêve: "></SwitchComponent>
                    <SwitchComponent title = "Cauchemard: "></SwitchComponent>
                    <SwitchComponent title = "Rêve récurrent: "></SwitchComponent>
                    
                </ScrollView>
            
        </KeyboardAvoidingView>
      )}
    }
const styles = StyleSheet.create({
    container: {
        // height:5000, 
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

export default DetailScreen