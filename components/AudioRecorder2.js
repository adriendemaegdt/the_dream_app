import React from 'react'
import { StyleSheet, View, Text, Button, Pressable, Image } from 'react-native'
import { Audio } from 'expo-av';
import * as firebase from 'firebase'
import {useState, useRef , useEffect} from "react";
import * as FileSystem from 'expo-file-system';

// import Microphone from '../assets/images/microphone.svg';

let recording = new Audio.Recording();

export default function AudioRecorder2(){

      
    const db = firebase.database();
    
    // const [isRecording, setIsRecording] = useState(false);
    const [sound, setSound] = useState(null);
    
    const [finalDuration, setFinalDuration] = useState("0.0 s ")
    const [duration, setDuration] = useState("0.0 s ")
    const [timer, setTimer] = useState(0)

    const [RecordedURI, SetRecordedURI] = useState('');
    const [AudioPerm, SetAudioPerm] = useState(true);
    const [isRecording, SetisRecording] = useState(false);
    const [isPLaying, SetisPLaying] = useState(false);
    const Player = useRef(new Audio.Sound());

    let start_time = Date.now()
    let end_time = Date.now()
    function findDuration(){
                 
        return setDuration(((Date.now() - start_time)/1000).toString().substring(0,1))
    }

    useEffect(() => {
        GetPermission();
      }, []);

    const GetPermission = async () => {
    const getAudioPerm = await Audio.requestPermissionsAsync();
    SetAudioPerm(getAudioPerm.granted);
    };

    // Start Recording
    const startRecording = async () => {
        if (AudioPerm === true) {
          try {
            await recording.prepareToRecordAsync(
              Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            );
            await recording.startAsync();
            SetisRecording(true);

            let start_time = Date.now() 
            setTimer(0)
            let timer = setInterval(findDuration, 1000)
            setTimer(timer)

          } catch (error) {
            console.log(error);
          }
        } else {
          GetPermission();
        }
      };

    //   StopRecording
    const stopRecording = async () => {
    try {
        await recording.stopAndUnloadAsync();
        const result = recording.getURI();
        SetRecordedURI(result); // Here is the URI
        recording = new Audio.Recording();
        SetisRecording(false);

        let end_time = Date.now()
        let finalDuration = (end_time - start_time)/1000
        setFinalDuration(finalDuration)
        console.log(finalDuration)
        clearInterval(timer)
        setTimer(timer)

    } catch (error) {
        console.log(error);
    }
    };

    const playSound = async () => {
        try {
          const result = await Player.current.loadAsync(
            { uri: RecordedURI },
            {},
            true
          );
    
          const response = await Player.current.getStatusAsync();
          if (response.isLoaded) {
            if (response.isPlaying === false) {
              Player.current.playAsync();
              SetisPLaying(true);
            }
          }
        } catch (error) {
          console.log(error);
        }
      };

    const stopSound = async () => {
    try {
        const checkLoading = await Player.current.getStatusAsync();
        if (checkLoading.isLoaded === true) {
        await Player.current.stopAsync();
        SetisPLaying(false);
        }
    } catch (error) {
        console.log(error);
    }
    };
    

      
      
      

    // Start Recording
    // const startRecording = async () => {

    //     let start_time = Date.now() 
    //     setTimer(0)

    //     // stop playback
    //     if (sound !== null) {
    //       await sound.unloadAsync();
    //       sound.setOnPlaybackStatusUpdate(null);
    //       setSound(null);
    //     }
    
    //     await Audio.setAudioModeAsync({
    //       allowsRecordingIOS: true,
    //       interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    //       playsInSilentModeIOS: true,
    //       shouldDuckAndroid: true,
    //       interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    //       playThroughEarpieceAndroid: false,
    //       staysActiveInBackground: true,
    //     });
    //     let _recording = new Audio.Recording();

    //     try {
    //       await _recording.prepareToRecordAsync(recordingSettings);
    //       setRecording(_recording);
    //       await _recording.startAsync();
    //       console.log("recording");
    //     //   setIsRecording(true);
    //     } catch (error) {
    //         // console.log(_recording)
    //         console.log("error while recording:", error);
    //     }

    //     let timer = setInterval(findDuration, 1000)
    //     setTimer(timer)
        
    //   };

// Stop recording

    //   const stopRecording = async () => {
    //     let end_time = Date.now()
    //     let finalDuration = (end_time - start_time)/1000
    //     setFinalDuration(finalDuration)
    //     console.log(finalDuration)

    //     clearInterval(timer)
    //     setTimer(timer)
        

    //     try {
    //       await recording.stopAndUnloadAsync();
    //       console.log(_recording)
    //     //   await recording._cleanupForUnloadedRecorder();
    //     } catch (error) {
    //       // Do nothing -- we are already unloaded.
    //     }
        
    //     const info = await FileSystem.getInfoAsync(recording.getURI());
    //     console.log(`FILE INFO: ${JSON.stringify(info)}`);
    //     await Audio.setAudioModeAsync({
    //       allowsRecordingIOS: false,
    //       interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    //       playsInSilentModeIOS: true,
    //       playsInSilentLockedModeIOS: true,
    //       shouldDuckAndroid: true,
    //       interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    //       playThroughEarpieceAndroid: false,
    //       staysActiveInBackground: true,
    //     });
    //     const { sound: _sound, status } = await recording.createNewLoadedSoundAsync(
    //       {
    //         isLooping: true,
    //         isMuted: false,
    //         volume: 1.0,
    //         rate: 1.0,
    //         shouldCorrectPitch: true,
    //       }
    //     );
    //     setSound(_sound);
    //     // setIsRecording(false);
    //     // console.log(isRecording)
    //   };

    //   Upload Audio 

    // const uploadAudio = async () => {
    // const uri = recording.getURI();
    // try {
    //     const blob = await new Promise((resolve, reject) => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.onload = () => {
    //         try {
    //         resolve(xhr.response);
    //         } catch (error) {
    //         console.log("error:", error);
    //         }
    //     };
    //     xhr.onerror = (e) => {
    //         console.log(e);
    //         reject(new TypeError("Network request failed"));
    //     };
    //     xhr.responseType = "blob";
    //     xhr.open("GET", uri, true);
    //     xhr.send(null);
    //     });
    //     if (blob != null) {
    //     const uriParts = uri.split(".");
    //     const fileType = uriParts[uriParts.length - 1];
    //     const fileName = Math.random().toString()
    //     firebase
    //         .storage()
    //         .ref()
    //         .child(`nameOfThe${fileName}.${fileType}`)
    //         .put(blob, {
    //         contentType: `audio/${fileType}`,
    //         })
    //         .then(() => {
    //         console.log("Sent!");
    //         })
    //         .catch((e) => console.log("error:", e));
    //     } else {
    //     console.log("erroor with blob");
    //     }
    // } catch (error) {
    //     console.log("error:", error);
    // }
    // };

    // Dowload audio

    // const downloadAudio = async () => {
    //     const uri = await firebase
    //       .storage()
    //       .ref("nameOfTheFile.filetype")
    //       .getDownloadURL();
    
    //     console.log("uri:", uri);
    
    //     // The rest of this plays the audio
    //     const soundObject = new Audio.Sound();
    //     try {
    //       await soundObject.loadAsync({ uri });
    //       await soundObject.playAsync();
    //     } catch (error) {
    //       console.log("error:", error);
    //     }
    //   };


    return(
        // <View>
        //     <Text>
        //         les minutes
        //     </Text>
        // </View>
        <View>
            <View style= {styles.container}>
                <Text style= {styles.text_time}>
                    {duration} secondes
                </Text>
                <Button 
                title='play Me'
                style = {styles.playSound}
                    onPress={playSound}
                >
                </Button>
                <Button 
                    title='stop Me'
                    style = {styles.stopSound}
                    onPress={stopSound}
                >
                </Button>
            </View>
                
            <View>
                
                <Pressable 
                    
                    style={styles.button_recorder}
                    hitSlop = {{top: 30, bottom: 50, left: 50, right: 50}}
                    onLongPress= {startRecording}
                    onPressOut= { () => {
                                            stopRecording() ;
                                            // uploadAudio()
                                        }
                                }
                >

                    <View style={styles.microphone}>
                        {/* <Microphone style = {styles.icon_mic}> */}
                        <Image source = {require('../assets/images/microphone.png')}
                                style = {styles.icon_mic}
                    >

                        </Image>
                        {/* </Microphone> */}
                    </View>
                </Pressable>
            </View>
        </View>
        
    )
}
const styles = StyleSheet.create({

    container:{
        justifyContent:'center', 
        alignItems:'center'
    },
    playSound:{
        width:60, 
        height:50,
        backgroundColor:'green'
    },
    stopSound:{
        width:60, 
        height:50,
        backgroundColor:'grey'
    },
    text_time:{
        fontFamily:'Harmattan-Regular', 
        fontSize:25,
        color:'white'
    },
    button_recorder: {
        backgroundColor:'#2E206F', 
        width:120, 
        height:120, 
        borderRadius:60, 
        justifyContent:'center', 
        alignItems:'center'
        // textAlign:'center'
    }, 
    text_recorder:{
        fontFamily:"Harmattan-Regular", 
        color:"white", 
        fontSize:15
    }, 
    microphone:{
        width:90, 
        height:90, 
        borderRadius:45,
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:'#8044CD',
    }, 
    icon_mic:{
        width:40, 
        height:40
    }
})