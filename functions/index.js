const functions = require("firebase-functions");
const admin = require('firebase-admin')
const speech = require('@google-cloud/speech')





admin.initializeApp()
const db = admin.firestore()
const auth = admin.auth()

// set date to initialize first dream

const today = new Date()
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


exports.UserCreated = functions.auth.user().onCreate( (user) => {
    
    functions.logger.info(user, {structuredData: true});
    db.collection('users').doc(user.uid).collection("dreams").doc('dream_0').set({
      title:"Mon premier rêve", 
      story:"J'ai rêvé que je me souvenais de mon premier rêve...", 
      date: formatDate(today), 
      tags:["joie","plaisir"],
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
    })
    .then(() => {
      console.log("User successfully created!");
  })
  .catch((error) => {
      console.error("Error creating document: ", error);
  });

  // Creer un nouveau user avec une collections de dreams et un json profil

  db.collection('users').doc(user.uid).set({
    profil:{
      first_name: '',
      last_name:'',
      age:'',
      proffession:'',
      date_of_birth: '', 

    }

  })
    .then(() => {
      console.log("Profil user successfully created!");
  })
  .catch((error) => {
      console.error("Error creating profil: ", error);
  });
    
  
    
    // await db.collection('logging').add({description: "Email waas sent to user with username: values.user_id " })

})

exports.getAudioTranscript = functions.storage.object().onFinalize( async(object)  => {

    const bucket_name = object.bucket
    const file_name = object.name
    const user_id = file_name.substring(16, 44)
    const date = file_name.substring(0,16)
    
    const client = new speech.SpeechClient()

    const gcsUri = 'gs://'+bucket_name+'/'+file_name

    const config = {
        encoding: 'LINEAR16',
        sampleRateHertz: 44100,
        audioChannelCount: 2,
        enableSeparateRecognitionPerChannel: false,
        languageCode: 'fr-FR',
        enableSpokenPunctuation: true

      };
      
      const audio = {
        uri: gcsUri,
      };
      
      const request = {
        config: config,
        audio: audio,
      };
      functions.logger.info(request, {structuredData: true});
      // Detects speech in the audio file. This creates a recognition job that you
    // can wait for now, or get its result later.
    
    const [operation] = await client.longRunningRecognize(request);
    // Get a Promise representation of the final result of the job
    const [response] = await operation.promise();
    functions.logger.info(response.results, {structuredData: true});

    const transcription = response.results
                            .map(result => result.alternatives[0].transcript)
                            .join('\n');
    
    functions.logger.info(transcription, {structuredData: true});
    functions.logger.info(user_id, {structuredData: true});
    functions.logger.info(date, {structuredData: true});

    //get the number of dreams of collection


    // const dreamsCollectionRef = query(collection(db, "users", uid, "dreams" ))
    // const querySnapshot = await getDocs(dreamsCollectionRef);
    // let numberOfDreams = 0
    // querySnapshot.forEach((doc) => {
    //     numberOfDreams += 1
    //     // console.log(doc.id, " => ", doc.data());
    // });


    //set ref of collection
     db.collection('users').doc(user_id).collection("transcripts").doc(date).set({
        transcript: transcription, 
        date: date
    })
    

    //send transcript to ref
    // const res = await dream_ref.update({transcript: {transcription}})
    // await db.ref('/users/user_id/dreams/dream_id').set({transcript: transcription})
    return transcription
})


