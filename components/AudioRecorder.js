import React from 'react'
import { StyleSheet, View, Text, Button, Pressable } from 'react-native'
import { Audio } from 'expo-av';
import * as firebase from 'firebase'
import {useState} from "react";
import * as FileSystem from 'expo-file-system';

export default function AudioRecorder(){

    const recordingSettings = {
        android: {
          extension: ".m4a",
          outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
          audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
        },
        ios: {
          extension: ".m4a",
          outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC,
          audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN,
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
          linearPCMBitDepth: 16,
          linearPCMIsBigEndian: false,
          linearPCMIsFloat: false,
        },
      };
      
      const db = firebase.database();
      
      const [isRecording, setIsRecording] = useState(false);
      const [recording, setRecording] = useState(null);
      const [sound, setSound] = useState(null);
      const [isPlaying, setIsPlaying] = useState(false);

    //   let recording = new Audio.Recording()
    // let _recording = new Audio.Recording();

    // Start Recording

    const startRecording = async () => {
        // stop playback
        if (sound !== null) {
          await sound.unloadAsync();
          sound.setOnPlaybackStatusUpdate(null);
          setSound(null);
        }
    
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
          interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
          playThroughEarpieceAndroid: false,
          staysActiveInBackground: true,
        });
        let _recording = new Audio.Recording();

        try {
          await _recording.prepareToRecordAsync(recordingSettings);
          setRecording(_recording);
          await _recording.startAsync();
          console.log("recording");
        //   setIsRecording(true);
        } catch (error) {
            // console.log(_recording)
            console.log("error while recording:", error);
        }
      };

// Stop recording

      const stopRecording = async () => {
        try {
          await recording.stopAndUnloadAsync();
          console.log(_recording)
        //   await recording._cleanupForUnloadedRecorder();
        } catch (error) {
          // Do nothing -- we are already unloaded.
          
        }
        const info = await FileSystem.getInfoAsync(recording.getURI());
        console.log(`FILE INFO: ${JSON.stringify(info)}`);
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          playsInSilentModeIOS: true,
          playsInSilentLockedModeIOS: true,
          shouldDuckAndroid: true,
          interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
          playThroughEarpieceAndroid: false,
          staysActiveInBackground: true,
        });
        const { sound: _sound, status } = await recording.createNewLoadedSoundAsync(
          {
            isLooping: true,
            isMuted: false,
            volume: 1.0,
            rate: 1.0,
            shouldCorrectPitch: true,
          }
        );
        setSound(_sound);
        // setIsRecording(false);
        // console.log(isRecording)
      };

    //   Upload Audio 

    const uploadAudio = async () => {
    const uri = recording.getURI();
    try {
        const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            try {
            resolve(xhr.response);
            } catch (error) {
            console.log("error:", error);
            }
        };
        xhr.onerror = (e) => {
            console.log(e);
            reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", uri, true);
        xhr.send(null);
        });
        if (blob != null) {
        const uriParts = uri.split(".");
        const fileType = uriParts[uriParts.length - 1];
        const fileName = Math.random().toString()
        firebase
            .storage()
            .ref()
            .child(`nameOfThe${fileName}.${fileType}`)
            .put(blob, {
            contentType: `audio/${fileType}`,
            })
            .then(() => {
            console.log("Sent!");
            })
            .catch((e) => console.log("error:", e));
        } else {
        console.log("erroor with blob");
        }
    } catch (error) {
        console.log("error:", error);
    }
    };

    

    // Dowload audio

    const downloadAudio = async () => {
        const uri = await firebase
          .storage()
          .ref("nameOfTheFile.filetype")
          .getDownloadURL();
    
        console.log("uri:", uri);
    
        // The rest of this plays the audio
        const soundObject = new Audio.Sound();
        try {
          await soundObject.loadAsync({ uri });
          await soundObject.playAsync();
        } catch (error) {
          console.log("error:", error);
        }
      };


    return(
        <View >
            <Pressable 
                
                style={styles.button_recorder}
                onPressIn= {startRecording}
                onPressOut= { () => {
                                        stopRecording() ;
                                        uploadAudio()
                                    }
                            }
            >

                <Text style={styles.text_recorder} >
                    Text me
                </Text>
            </Pressable>
        </View>
        
    )
}
const styles = StyleSheet.create({
    button_recorder: {
        backgroundColor:'purple', 
        width:80, 
        height:80, 
        borderRadius:40, 
        justifyContent:'center', 
        textAlign:'center'
    }, 
    text_recorder:{
        fontFamily:"Harmattan-Regular", 
        color:"white", 
        fontSize:15
    }
})