import React, {useState} from 'react';
import {View, Platform, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


export const DateTimePickerComponent = (props) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show_android, setShowAndroid] = useState(false);
  const [show_ios, setShowIOS] = useState(true);

  const onChange = props.onChange

  const showMode = (currentMode) => {
    setShowIOS(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const usedOS = Platform.OS
  return (
    <View style= {styles.container }>
        <View style= {styles.question_view}>
                    
            <Text style= {styles.question}> Date </Text>
        </View>
        { usedOS === 'android' ? 
            <TouchableOpacity  style= {styles.response_view }  
            onPress= {setShowAndroid}
            >
                {show_android && (
                        <DateTimePicker
                        // testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        // placeholder="select date"
                        format="DD-MM-YYYY"
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        textColor = 'white'
                        themeVariant = "light"
                        style={{textColor: "white", backgroundColor:'#252947', height:60, width:'85%', borderRadius:12}}
                    
                        />
                )}
            <Text style={{ color:'white', fontFamily:'Harmattan-Bold', fontSize:20}}>{date.toString().substring(4,15)}</Text>
            <Image 
                    source= {require('../assets/images/down_arrow.png')}
                    style={
                      {width: 10,
                      height:13,
                      tintColor: "white" ,
                      marginLeft:10
                      }
                    }></Image>
            </TouchableOpacity>
        : 
        <View>
            {show_ios && (
                <DateTimePicker
                // testID="dateTimePicker"
                value={date}
                mode={mode}
                // placeholder="select date"
                format="DD-MM-YYYY"
                is24Hour={true}
                display="default"
                onChange={onChange}
                textColor = 'white'
                themeVariant = "light"
                // style={{textColor: "white", backgroundColor:'#252947', height:60, width:'85%', borderRadius:12}}
                />
        )}
        </View>
    }
    </View>





  );
};
const styles = StyleSheet.create({
    container: {
        
        // justifyContent:'center',
        // alignItems:'center',
        padding:10,
        // backgroundColor:'grey',
        // borderBottomColor:'red'
        // backgroundColor:'red', 
        // height:200

    },
    question_view:{
        
        paddingRight:"25%",
        
        // flex:2
    },
    question:{
        // position:'absolute',
        // top:0,
        color:"white",
        fontFamily:'Harmattan-Bold',
        fontSize:30,
        // lineHeight:1
    },
    response_view:{
        // backgroundColor:'red',
        backgroundColor: '#252947',
        borderRadius:12,
        width: '30%',
        height:45,
        justifyContent:'center',
        alignItems:'center',
        // height: height,
        flexDirection:'row',
        // flex:3
    }, 
    response:{
        fontFamily:'Harmattan-Regular', 
        fontSize:25, 
        color:'white'
    }
})