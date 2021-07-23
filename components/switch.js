import React, { useState } from 'react'
import { StyleSheet, View, Text, Switch } from 'react-native'
import data_dream from '../data/data_dream'
import Slider from '@react-native-community/slider';


const SwitchComponent = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const title = props.title
      return (
          <View style= {styles.container}>
              <View style= {styles.title_container}>
                  <Text style= {styles.title}> {title} </Text>
              </View>
              <View style= {styles.switch_container}>
              <Switch
                trackColor={{ false: "#9598A7", true: "#8246D1" }}
                thumbColor="#white"
                ios_backgroundColor="#9598A7"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
              </View>
              

          </View>
      )}
    

const styles = StyleSheet.create({
    container: {
        height:40, 
        width:'100%', 
        flexDirection:'row', 
        paddingLeft:10, 
        marginTop:20
        // justifyContent: 'space-around'

    }, 
    title_container:{
        flex:5, 
        // backgroundColor:'grey'
    }, 
    title:{
        fontFamily:'Harmattan-Bold',
        fontSize:25, 
        color:"white"
    }, 
    switch_container:{
        flex:2.5,
        marginTop:5
        // backgroundColor:'pink'
    }

})

export default SwitchComponent