

import data_dream from "../../data/data_dream"

// import {setDoc,doc} from '@firebase/firestore';
import firebase from 'firebase/compat' 
import { db } from "../../firebase-config"
// import { collection, doc } from 'firebase/firestore';
import { doc, setDoc } from "firebase/firestore";

const initialState = { 
    myDreams: data_dream,
    newDream: {}
}

function addDream(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'SAVE_VALUE':
        const key = Object.keys(action.value)[0]
        const value = action.value[key]
        nextState = {...state}
        nextState.newDream[key] = value 
        return nextState
    
    case 'CLEAR_DREAM':
        nextState = {...state}
        nextState.newDream = {}
        return nextState

    case 'SAVE_DREAM':
        nextState = {...state}
        
        nextState.myDreams.push(action.value)
        console.log(action.value)
        nextState.newDream = {}

        // Save Dream to firestore //
        // console.log(db)
        // db.collection("users")
        // .doc("user_id")
        // .collection("dream_id")
        // .doc("dream_1")
        // .set({
      
           
        // })
        setDoc(doc(db, "dream_id", "dream_1"), {
          title: action.value.title, 
          story: action.value.story,
        });

        // setDoc(doc(db, "user_id", "reve_nb"), {
        // employment: "plumber",
        // outfitColor: "red",
        // specialAttack: "fireball"
        // });

        return nextState

       

  default:
    return state
  }
}

export default addDream 