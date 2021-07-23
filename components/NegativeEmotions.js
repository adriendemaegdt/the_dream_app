import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import EmotionComponent from './emotion'


class NegativeEmotions extends React.Component {
    
    render() {
        


      return (
          <View style= {styles.container}>
              <View style= {styles.title_container}>
                  <Text style= {styles.title}> Négatives </Text>
              </View>
              <View style= {styles.emotions_container}>
                    <EmotionComponent emotion = "Peur" ></EmotionComponent>
                    <EmotionComponent emotion = "Désespoir"></EmotionComponent>
                    <EmotionComponent emotion = "Tristesse"></EmotionComponent>
                    <EmotionComponent emotion = "Solitude"></EmotionComponent>
                    {/* <EmotionComponent emotion = "Soulagement"></EmotionComponent> */}
              </View>
              <View style= {styles.emotions_container_2}>
                <EmotionComponent emotion = "Frustration"></EmotionComponent> 
                <EmotionComponent emotion = "Honte"></EmotionComponent> 
                <EmotionComponent emotion = "Confusion"></EmotionComponent> 
                <EmotionComponent emotion = "Dégoût"></EmotionComponent> 
                    {/* /* <TouchableOpacity style= {styles.other_emotions}>
                        <Text style = {styles.other_text}> Autres ...</Text>
                    </TouchableOpacity> */}
              </View> 
              
            </View>
      )}
    }
const styles = StyleSheet.create({
    container: {
        height: 150,
        width:"100%",
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#0F1538',
        // alignSelf: 'flex-start'
        

    },
    title_container:{
        flex:3, 
        justifyContent: 'center',
        alignItems:'center', 
        // marginBottom:20

    },

    title:{
        color:"white",
        fontFamily:'Harmattan-Bold',
        fontSize:25
    },
    emotions_container:{
        flex:4,  
        flexDirection:"row"
    },
    emotions_container_2:{
        flex:4, 
        flexDirection:"row"
    },
    other_emotions:{
        height: 35,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#252947',
        borderRadius:8, 
        marginRight:20,
        paddingRight:10,
        paddingLeft:10,
        alignSelf: 'flex-start'
        
    },
    other_text:{
        color:"white",
        fontFamily:'Harmattan-Bold',
        fontSize:15
    },

})

export default NegativeEmotions