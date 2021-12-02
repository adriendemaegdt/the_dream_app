import { db, auth } from "../firebase-config"
import { addDoc, doc, setDoc, collection, getDocs, getDoc, query } from "firebase/firestore";
import { useState, useEffect } from "react";

// Essai 1 ! 
// const [dreams, setDreams] = useState([]);

// useEffect(() => {
//    const getDataDream = async () => {
//       const uid = auth.currentUser.uid
//       const dreamsCollectionRef = query(collection(db, "users", uid, "dreams" ))
//       const data = await getDocs(dreamsCollectionRef);
//       setDreams(dreamsCollectionRef.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     
//    }
//    getDataDream();
// }, [])

// console.log(dreams)


// Essai 2

// const getDataDream = async () =>{
//    const uid = auth.currentUser.uid
//    // const data = []
//    const dreamsCollectionRef = query(collection(db, "users", uid, "dreams" ))

//    getDocs(dreamsCollectionRef)
//          .then((snapshot) => {
//             let dreams = []
//             snapshot.docs.forEach((doc) => {
//                dreams.push({...doc.data(), id:doc.id })
//             })
//             // console.log(dreams)
//             return dreams

//          })
         
//    // const querySnapshot = await getDocs(dreamsCollectionRef);
//    // const data = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))

//  }



// const dreams = getDataDream()
// .then(dreams => {
//    const 
//    console.log("vasy petiot")
//    return dreams 
// })
// .catch(err => console.error(err))

// console.log(data)

export default data = [
    {
       id:181808,
       title:"Un Voyage interminable",
       story:"Les héros du Réveil de la force rejoignent les figures légendaires de la galaxie dans une aventure épique qui révèle des secrets ancestraux sur la Force et entraîne de choquantes révélations sur le passé… Les héros du Réveil de la force rejoignent les figures légendaires de la galaxie dans une aventure épique qui révèle des secrets ancestraux sur la Force et entraîne de choquantes révélations sur le passé…Les héros du Réveil de la force rejoignent les figures légendaires de la galaxie dans une aventure épique qui révèle des secrets ancestraux sur la Force et entraîne de choquantes révélations sur le passé…",
       date:"29 Septembre 2020",
       tags:[ 'merveilleux',"joyeux"]
    },
    {
       id:181809,
       title:"L'affreux petit f ",
       story :"J'ai revé qu'un petit f gachait totalement mon recueil ! Quelle était ma surprise lorsque j'ai tourné la page et que ce diable de petit f etait toujours la...",
       date:"07 Juillet 2021",
       tags: ['affreux', 'inquietant']
    },
    {
       id:181810,
       title:"Le marchand sournois ",
       story:"Un petit marchand courait les rues sans chausettes ni loi...",
       date:"04 Novembre 2022",
       tags: ['rassurant', 'rigolo']
    },

 ]