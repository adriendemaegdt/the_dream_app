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


import DropDownPicker from 'react-native-dropdown-picker';
import DownArrow from '../assets/images/down_arrow.png'

import {connect} from 'react-redux'


class DetailScreen extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
          open: false,
          value: [],
          items: [
            
            {label: 'Joie', value: 'joie'},
            {label: 'Calme', value: 'calme'},
            {label: 'Plaisir', value: 'plaisir'},
            {label: 'Soulagement', value: 'soulagement'},
            {label: 'Excitation', value: 'excitation'},
            {label: 'Curiosité', value: 'curiosité'},
            {label: 'Sympathie', value: 'sympathie'},

            
            {label: 'Peur', value: 'peur'},
            {label: 'Désespoir', value: 'desespoir'},
            {label: 'Tristesse', value: 'tristesse'},
            {label: 'Solitude', value: 'solitude'},
            {label: 'Frustration', value: 'frustration'},
            {label: 'Honte', value: 'honte'},
            {label: 'Confusion', value: 'confusion'},
            {label: 'Dégout', value: 'degout'},
           ]
        };
    
        this.setValue = this.setValue.bind(this);
      }
    
      setOpen(open) {
        this.setState({
          open 
        });
      }
    
      setValue(callback) {
        this.setState(state => ({
          value: callback(state.value)
        }));
      }
    
      setItems(callback) {
        this.setState(state => ({
          items: callback(state.items)
        }));
      }

    

    saveInput = (field,value) => {
        const action = {type : 'SAVE_VALUE' ,value : {[field] : value}}
        // console.log(action)
        this.props.dispatch(action)
    }
    
    render() {
        const { open, value, items } = this.state;
        
      return (
        <KeyboardAvoidingView 
            style={{flexGrow:1,height:'100%', backgroundColor:'#0F1538'}}
            behavior={Platform.OS === "ios" ? "position" : "height"} 
            automaticallyAdjustContentInsets={false} 
            keyboardVerticalOffset={35} >
            
                <ScrollView 
                    contentContainerStyle={styles.container}>

                    <View style={styles.title_emotions_container}>
                        <Text style= {styles.title_emotions}>Emotions</Text>
                    </View>

                    <DropDownPicker
                    theme="DARK"
                    multiple = {true}
                    min = {0}
                    max = {3} 
                    
                    // dropDownDirection="BOTTOM"
                    // bottomOffset={300}
                    dropDownContainerStyle={{
                        // backgroundColor: "#dfdfdf",
                        minHeight:250
                      }}
                    dropDownMaxHeight={250}
                    // dropDownMinHeight={2000}

                    // La place de toute la selection quand ca deplie
                    containerStyle={{
                        height: 80,
                        flexDirection:'row'
                    }}

                    placeholder="Choisissez votre émotion ..."
                    mode = "BADGE"
                    // style des emotions selectionnés
                    badgeStyle={{
                        padding: 10, 
                        height:40, 
                        justifyContent:'center',
                        textAlign:'center'
                      }}
                    badgeColors={["#23195E"]}
                    badgeDotStyle={{
                        borderRadius: 5, 
                        width:5, 
                        height:5
                      }}
                    badgeDotColors={["white"]}
                    badgeSeparatorStyle={{
                        width: 20
                      }}

                    // On enregistre les emotions selectionnées 
                    onChangeValue= {(value) => {
                        this.saveInput('tags', value)
                        
                    }}
                    onChangeItem={(item) => console.log(item.label, item.value)}

                    open = {open}
                    value = {value}
                    items ={items}
                    
                    setOpen={(open) => {
                        this.setState(state => ({
                          open
                        }));
                      }}
                    setValue={(callback) => {
                        this.setState(state => ({
                          value: callback(state.value)
                        }));
                      }}
                    setItems={(callback) =>{
                        this.setState(state => ({
                          items: callback(state.items)
                        }));
                      }}
                    
                    // Search bar 
                    searchable = {true}
                    searchPlaceholder="Cherchez une émotion..."
                    searchTextInputStyle={{
                        color: "white",
                        opacity:0.5 
                    }}
                    searchPlaceholderTextColor="white"
                    searchTextInputProps={{
                        color:'#c4d4e3'
                      }}
                    arrowIconStyle={{
                        width:30
                      }}
                    tickIconStyle={{
                        width: 30,
                        height: 30
                    }}
 
                    style={{
                        
                        backgroundColor: '#252947',
                        borderRadius:12,
                        width: '95%',
                        borderColor: '#252947'
                    }}
                    textStyle= {{
                        fontFamily:'Harmattan-Bold', 
                        fontSize:20, 
                        color:'white',
                        textAlign:'center'
                    }}

                    >
                    </DropDownPicker>
                    
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

                    <View style= {{marginTop:40}}></View>
                        
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
        zIndex: 2,
        // flex:1,
        backgroundColor:"#0F1538", 
    

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