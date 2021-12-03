import React from 'react'
import { StyleSheet, View, FlatList, TextInput, TouchableOpacity, ScrollView, Modal, Text } from 'react-native'
// import Plus from '../components/plus'

import OneDream from '../components/oneDream'
import Header from '../components/header'
import Header2 from '../components/header2'

import SearchIcon from '../assets/images/search_icon.svg';





import { useState, useEffect } from "react";
import { db, auth } from '../firebase-config';
import { addDoc, doc, setDoc, collection, getDocs, getDoc, query } from "firebase/firestore";
import { useFocusEffect } from '@react-navigation/native';

import { firestoreConnect } from 'react-redux-firebase'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { compose } from 'redux'
import { connect } from 'react-redux'





function JournalScreen({data_dreams}) {
 

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
                    // data = {props.myDreams}
                    // data = {data.user_dreams}
                    data = {data_dreams}
                   
                    keyExtractor={(item) => item.title.toString()}
                    renderItem = {({item}) => <OneDream dream_infos = {item} /> }
                />
                </View>
        </View>
        )
    }

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#0F1538', 
        marginBottom:60
        
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

    centered_view:{
        width:'95%', 
        height:'80%', 
        backgroundColor:'#252947', 
        // flexDirection:'row', 
        // flex:1
    }, 
    title:{
        marginTop:40,
        backgroundColor:'brown', 
        height:60, 
        // flex:1, 
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
        
        height:250, 
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
    tags:{
        backgroundColor:'purple', 
        height:20, 
        width:40, 
        // flex:1
    }
})

const mapStateToProps = state => {
    
    
    const dreams = state.firestore.ordered.user_dreams
    
    return {
        data_dreams: dreams,
        // uid: state.firebase.auth.uid
    }
  }
const mapDispatchToProps = state => {
    return {
        // myDreams: state.myDreams
    }
  }
export default compose (

    connect(mapStateToProps),

    firestoreConnect( ownProps => [
        {collection: 'users', doc: auth.currentUser.uid  , subcollections: [{ collection: "dreams" }], storeAs: 'user_dreams' }
    // tuto collection: "dreams", 
    // where: ["authorId", "==", ownProps.uid],
    // orderBy:["date", "desc"]
    // 
    
    ]),
    
)(JournalScreen);


