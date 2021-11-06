import React from 'react'
import { StyleSheet, View, FlatList, TextInput, TouchableOpacity, ScrollView, Modal, Text } from 'react-native'
import { connect } from 'react-redux'
import ButtonAttribute from '../components/buttonAttributes'

class ResumeScreen extends React.Component {

    render(){
        
        const info_dream = this.props.route.params.infos
       
       
        const title = info_dream.title
        const story = info_dream.story
        const tags = info_dream.tags
        return(
        <View style= {styles.centered_view}>
            <View style= {styles.title}>
                <Text style= {styles.text_title}>
                    {title}
                </Text>
            </View>

            <View style= {styles.story}>
                <ScrollView style= {styles.scrollView}>
                    <Text style= {styles.text_story}>
                        {story} 
                    </Text> 
                </ScrollView>
            </View>

            <View style = {styles.attributes_view}>
                    <FlatList 
                    horizontal
                    data= {tags}
                    keyExtractor={(item, index) => 'key'+index}
                    renderItem={({item}) => <ButtonAttribute height = {40}  fontSize = {20} dream_infos_tags={item}></ButtonAttribute>}
                    />
                </View>
        </View>
        )
    }
}
const styles = StyleSheet.create({

    centered_view:{
        backgroundColor:'#252947', 
        flex:1, 
        zIndex:10
    }, 
    title:{
        // marginTop:20,
        flex:1, 
        paddingTop:10,
        justifyContent:'center', 
        alignItems:'center'
    },
    text_title:{
        fontFamily:'Harmattan-Bold',
        fontSize:30,
        color:'white'
    },
    story:{
        flex:5, 
        paddingTop:30,
        padding:15
    },
    text_story:{
        padding:10,
        fontFamily:'Harmattan-Regular',
        fontSize:25,
        color:'#F8F5FE',  
        lineHeight: 25,
    },
    attributes_view:{
        flexDirection:'row',
        marginTop:10,
        flex:1
    }
})

const mapStateToProps = (state) => {
    return {
        myDreams: state.myDreams
    }
  }
export default connect(mapStateToProps)(ResumeScreen)