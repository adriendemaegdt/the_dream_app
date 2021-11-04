import React from 'react'
import { StyleSheet, View, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Plus from '../components/plus'

import OneDream from '../components/oneDream'
import Header from '../components/header'

import SearchIcon from '../assets/images/search_icon.svg';

import { connect } from 'react-redux'

class JournalScreen extends React.Component {

    render() {

        // const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Header style = {styles.header}></Header>
                <View style={styles.search_view}>
                    <View style={styles.input_view}>
                        <View style={styles.search_icon_view}> 
                            <SearchIcon></SearchIcon>
                        </View>
                        <TextInput style={styles.search_input} 
                                placeholder="Rechercher mon rêve" 
                                placeholderTextColor={'#5A5D6F'}>
                        </TextInput>
                    </View>
                    
                </View>
                <View style={styles.flatlist_container}>
                    <FlatList 
                    contentContainerStyle={styles.flatlist}
                    data = {this.props.myDreams}
                    keyExtractor={(item) => item.title.toString()}
                    renderItem = {({item}) => <OneDream dream_infos = {item} /> }
                />
                </View>
        </View>
        )
    }
}
const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#0F1538', 
        marginBottom:60
        
    },

    header:{
        // flex:2
    },
    search_view:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    input_view:{
    backgroundColor: '#252947',
    borderRadius:22,
    width: '75%',
    height:"75%" ,
    flexDirection:'row',
    padding:10
    },
    search_icon_view:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center'
    },
    search_input:{
        flex:4,
        fontFamily:'Harmattan-Regular',
        color:'white',
        fontSize:20
    },

    flatlist:{
        justifyContent: 'space-around', 
        
    },

    flatlist_container:{
        flex:6,
        height:1000
    },

})

const mapStateToProps = (state) => {
    return {
        myDreams: state.myDreams
    }
  }
export default connect(mapStateToProps)(JournalScreen)

