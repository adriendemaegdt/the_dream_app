import React from 'react'
import { StyleSheet, View, Text, Image, Button, FlatList, TouchableOpacity } from 'react-native'
import ButtonAttribute from './buttonAttributes'
import data_dream from '../data/data_dream'

class OneDream extends React.Component {

    render() {

        const dream_infos = this.props.dream_infos
        // console.log(dream_infos)
        return (
    <View style={styles.oneDream}>
        <View style= {styles.date}>
                <Text style = {styles.date_text}> {dream_infos.date} </Text>
        </View>
        <View style={styles.main_container}>
            <View style={styles.content_container}>
                <View style={styles.title_view}>
                    <Text style={styles.title_text} numberOfLines={1}>{dream_infos.title} </Text>
                </View>
                <View style= {styles.description_view}>
                    <Text style={styles.description_text}  numberOfLines={2} ellipsizeMode= "tail" >{dream_infos.overview}</Text>
                    <View style= {styles.button_play_view}>
                        <TouchableOpacity
                            onPress={console.log('hey')}
                            style={styles.button_play}>
                            <View style={[styles.triangle,styles.arrowRight]}></View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.attributes_view}>
                    <FlatList 
                    horizontal
                    data= {dream_infos.tags}
                    keyExtractor={(item, index) => 'key'+index}
                    renderItem={({item}) => <ButtonAttribute dream_infos_tags={item}></ButtonAttribute>}
                    
                    />
                </View>
            </View>
        </View>
    
    </View>
        )
    }
  }

  const styles = StyleSheet.create({

    oneDream:{
        height:220,
        padding:20,

    },
    date:{
        flex:1
    },
    date_text:{
        fontFamily:'Harmattan-Bold',
        color:'white',
        fontSize:20
    },
    main_container: {
        paddingLeft: 30,
        backgroundColor: '#252947',
        borderRadius:22,
        flex:5
    },
    content_container:{
        height:'100%',
        width:"100%",
        flexDirection:"column",
    },
    title_view:{
        flex:2,
        paddingTop:10
    },
    title_text:{
        fontFamily:'Harmattan-Bold',
        fontSize:18,
        color:'white'
    },
    description_view:{
        flex:3.4, 
        flexDirection:'row',
    },
    description_text:{
        fontFamily:'Harmattan-Regular',
        fontSize:12,
        color:'#F8F5FE', 
        flex:5, 
        lineHeight: 20,
        paddingRight:20
        
    },
    button_play_view:{
        flex:1.5,
        justifyContent:'center',
        alignItems:'center'
    },
    button_play: {
        height:50,
        width:50,
        borderRadius: 180,
        backgroundColor:'#7A40C6',
        justifyContent:'center',
        alignItems:'center'
        // marginRight:10
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
    },
    arrowRight: {
        borderTopWidth: 10,
        borderRightWidth: 0,
        borderBottomWidth: 10,
        borderLeftWidth: 14,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: "white",
        borderRadius:5
    },
    attributes_view:{
        flex:1.5, 
        flexDirection:'row',
        marginBottom:10
    },
    flatlist_items:{

    }
})

export default OneDream