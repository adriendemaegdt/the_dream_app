const functions = require("firebase-functions");
const admin = require('firebase-admin')
const speech = require('@google-cloud/speech')



admin.initializeApp()
const db = admin.firestore()


exports.UserCreated = functions.auth.user().onCreate( (user) => {
    
    functions.logger.info(user, {structuredData: true});
    db.collection('users').doc(user.uid).collection("dreams").doc('dream_0').set({
      title:'',
      story:''
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
    functions.logger.info(db, {structuredData: true});
    const dream_ref = db.collection('dreams').doc('dream_id')
    functions.logger.info(dream_ref, {structuredData: true});
    const res = await dream_ref.update({transcript: {transcription}})
    // await db.ref('/users/user_id/dreams/dream_id').set({transcript: transcription})
    return transcription
})



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
