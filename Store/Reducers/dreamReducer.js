

import data_dream from "../../data/data_dream"


import thunkMiddleware from "redux-thunk"
import thunk from "redux-thunk";

/// ----------------Redux-Firestore import -----------------------////

import { reduxFirestore , getFirestore} from "redux-firestore";
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' 

/// ----------------Redux import -----------------------////

import { createStore, combineReducers, compose } from 'redux'
import {  applyMiddleware  } from "redux";

/// ----------------React redux firebase import -----------------------////
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'


import { db } from "../../firebase-config"
import { doc, setDoc } from "firebase/firestore";
import { auth } from "../../firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";


//
//Initial State
//
const today = new Date()
let today_for_analysis = today.toLocaleString('en-US', {
  weekday: 'short', // long, short, narrow
  day: '2-digit', // numeric, 2-digit
  year: 'numeric', // numeric, 2-digit
  month: '2-digit', // numeric, 2-digit, long, short, narrow
  hour: '2-digit', // numeric, 2-digit
  minute: '2-digit', // numeric, 2-digit
  second: 'numeric', // numeric, 2-digit
});

const formatDate = (date) =>{

    var months = { 
      Jan: "Janvier", 
      Feb:"Février", 
      Mar:'Mars', 
      Apr:'Avril', 
      May: 'Mai', 
      Jun: 'Juin', 
      Jul: 'Juillet', 
      Aug:'Aout', 
      Sep: 'Septembre', 
      Oct: 'Octobre', 
      Nov: 'Novembre', 
      Dec: 'Décembre'
  }
  
  
  let formated_date = date.toString().substring(4, 15)
  let theMonth = ""
  
    Object.keys(months).forEach(key => {
              
      if (formated_date.substring(0,3) === key.toString()) {
           theMonth = months[key]
      }
    });
    
    let formatedDate = formated_date.substring(4,6) + ' ' + theMonth  + ' ' + formated_date.substring(7,15)

    return formatedDate
}



const initialState = {
  newDream: {
    title:"Sans titre", 
    story:"J'ai rêvé sans raconter mon récit ;) ", 
    date: formatDate(today), 
    hour: today_for_analysis.substring(17,19),
    minutes:today_for_analysis.substring(20,22),
    day_in_week: today_for_analysis.substring(0,3),
    day_in_month:today_for_analysis.substring(8,10),
    month: today_for_analysis.substring(5,7),
    year: today_for_analysis.substring(11,15),
    tags:[],
    location:"", 
    characters:"", 
    action:"",
    rating: 2.5, 
    lucidity:2.5,
    sleepQuality:2.5, 
    nightmare: false, 
    recurrent: false, 
    feeling:"", 
    interpretation:"", 
    lifeLink:""
  }
}



//
//reducer addDream
//


// function addDream(state =initialState, action) {
//   let nextState 
  
//   switch (action.type) {
//     case 'SAVE_VALUE':
//         const key = Object.keys(action.value)[0]
//         const value = action.value[key]
//         nextState = {...state}
//         nextState.newDream[key] = value 
//         return nextState
    
//     case 'CLEAR_DREAM':
//         nextState = {...state}
//         nextState.newDream = {}
//         return nextState

//     case 'SEND_DREAM_TO_DB':
//         return {...state, dream_data: action.value}


//     case 'SAVE_DREAM':
//         nextState = {...state}
        
//         // nextState.myDreams.push(action.value)
//         // // console.log(action.value)
//         // nextState.newDream = {}
//         return nextState

      
//   default:
//     return state
//   }
// }


const dreamReducer = (state = initialState, action) =>{
  
  switch(action.type){
    
    case 'SAVE_VALUE':{
        const key = Object.keys(action.value)[0]
        const value = action.value[key]
        state.newDream[key] = value 
        
        console.log(state)
        
        return state
    }
    case 'ADD_DREAM':{

        console.log(('dream has been added'))
        // console.log(state)
        
        state.newDream = {}
        return state
    }
    default: return state
  }
}

//
//Action Creator
//






//
// Combine Reducer
//

const rootReducer = combineReducers({
  dreamReducer: dreamReducer, 
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

//
//Store
//
const store = createStore(
  
  rootReducer, 
  applyMiddleware(thunk.withExtraArgument({getFirebase}))
  )


export {store}
