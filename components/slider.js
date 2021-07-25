import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import data_dream from '../data/data_dream'
import Slider from '@react-native-community/slider';


class SliderComponent extends React.Component {

    
    render() {
const title = this.props.title
const name = this.props.name
const onChange = this.props.onChange
      return (
          <View style= {styles.container}>
              <View style= {styles.title_container}>
                  <Text style= {styles.title}> {title} </Text>
              </View>
              <View style= {styles.slider_container}>
                <Slider
                    style={{width: 150, height: 40}}
                    minimumValue={0}
                    maximumValue={5}
                    value={1}
                    thumbTintColor="white"
                    minimumTrackTintColor="#8246D1"
                    maximumTrackTintColor="#9598A7"
                    onSlidingComplete= {(value) => onChange(name, value)}
                />
              </View>
              

          </View>
      )}
    }

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
        flex:3, 
        // backgroundColor:'grey'
    }, 
    title:{
        fontFamily:'Harmattan-Bold',
        fontSize:25, 
        color:"white"
    }, 
    slider_container:{
        flex:3,
        marginTop:5
        // backgroundColor:'pink'
    }

})

export default SliderComponent