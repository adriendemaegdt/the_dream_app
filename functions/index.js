const functions = require("firebase-functions");
const admin = require('firebase-admin')
const speech = require('google-cloud/speech')

admin.initializeApp()
const db = admin.firestore()

exports.AudioCreated = functions.firestore.document('users/{user_id}').onCreate( doc => {
    const values = doc.data()
    // functions.logger.info(values, {structuredData: true});
    return values 
    // await db.collection('logging').add({description: "Email waas sent to user with username: values.user_id " })

    // appdream.appspot.com/nameOfThe0.3331167377098728.m4a/1637059032934955
    // https://firebasestorage.googleapis.com/v0/b/appdream.appspot.com/o/transcripts%2FnameOfThe0.38379679470797035.m4a-20211112053155.json?alt=media&token=9b1de837-5f63-4e3d-b16e-0341b4b1a629
   
    // Quand un user est crée, une collection logging avec un description et aussi créee
})

exports.getAudioTranscript = functions.storage.object().onFinalize( async(object)  => {

    const bucket_name = object.bucket
    const file_name = object.name
    
    const client = new speech.SpeechClient()

    const gcsUri = 'gs://'+bucket_name+'/o/'+file_name

    const config = {
        encoding: 'MP3',
        sampleRateHertz: 44100,
        languageCode: 'fr-FR',
      };
      
      const audio = {
        uri: gcsUri,
      };
      
      const request = {
        config: config,
        audio: audio,
      };

      // Detects speech in the audio file. This creates a recognition job that you
    // can wait for now, or get its result later.
    
    const [operation] = await client.longRunningRecognize(request);
    // Get a Promise representation of the final result of the job
    const [response] = await operation.promise();
    const transcription = response.results
                            .map(result => result.alternatives[0].transcript)
                            .join('\n');
    
    functions.logger.info(transcription, {structuredData: true});
    return transcription
})



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
