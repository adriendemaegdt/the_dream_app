import React from 'react'
import { StyleSheet, View, Text, Image, Button, FlatList, TouchableOpacity } from 'react-native'

import Header_center from '../assets/images/header_center.svg';
import Header_left from '../assets/images/header_left.svg';
import Header_right from '../assets/images/header_right.svg';

export default class Header extends React.Component {
	render() {
        // const height = this.props.height
        // console.log(height)
		return (
			<View style={styles.container}>

                <View style={styles.left}>
                <Header_left style={styles.vectorLeft}/>
                </View>
                <View style={styles.center}>
                    <Text style={styles.title_text}>Mes Rêves</Text>
                </View>
                <View style={styles.right}>
                    <Header_center  height="140" style={styles.vectorCenter} />
				    <Header_right height = "140" style={styles.vectorRight} />
                </View>
                <View style = {[styles.shiny_star, styles.star_1]}></View>
                <View style = {[styles.normal_star, styles.star_2]}></View>
                <View style = {[styles.shiny_star, styles.star_3]}></View>
                <View style = {[styles.normal_star, styles.star_4]}></View>
                <View style = {[styles.shiny_star, styles.star_5]}></View>
                <View style = {[styles.normal_star, styles.star_6]}></View>
                <View style = {[styles.normal_star, styles.star_7]}></View>
                <View style = {[styles.good_star, styles.star_8]}></View>
                <View style = {[styles.normal_star, styles.star_9]}></View>
                <View style = {[styles.shiny_star, styles.star_10]}></View>
                <View style = {[styles.normal_star, styles.star_11]}></View>
				
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
        height:140,
        flexDirection:"row",
        backgroundColor:"#23195E"
		// justifyContent: 'center', 
		// alignSelf: 'center', 
	},
    left:{
        flex:2,
    },
    center:{

        flex:3,
        justifyContent: 'center', 
		alignItems: 'center',

    },
    title_text:{
        fontFamily:'Rancho',
        color:"white",
        fontSize:40
    },
    right:{
        flex:2,
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems: 'stretch'
    },
    vectorLeft:{
        position:'absolute',
        bottom:0

    },
    vectorCenter:{
        position:"absolute",
        left:-20,
        height:100,
        

    },
    vectorRight:{
        transform: [{ rotate: "0deg" }],
        position:"absolute",
        right:-35,
        top:-20,
        
    }, 
    shiny_star:{
        width:2.5,
        height:2.5,
        backgroundColor:"white",
        borderRadius:90
    },
    normal_star:{
        width:2.5,
        height:2.5,
        backgroundColor:"white",
        borderRadius:90,
        opacity:0.33 
    
    },
    good_star:{
        width:2.5,
        height:2.5,
        backgroundColor:"white",
        borderRadius:90,
        opacity:0.66 
    
    },
    star_1:{
        position:'absolute',
        top: 20,
        left:20
    },
    star_2:{
        position:'absolute',
        top: 30,
        left:80
    }
    , 
    star_3:{
        position:'absolute',
        bottom: 20,
        left:40
    }
    , 
    star_4:{
        position:'absolute',
        top: 60,
        left:100
    }
    , 
    star_5:{
        position:'absolute',
        top: 10,
        left:160
    }
    , 
    star_6:{
        position:'absolute',
        bottom: 15,
        left:120
    }
    , 
    star_7:{
        position:'absolute',
        bottom: 35,
        left:170
    }
    , 
    star_8:{
        position:'absolute',
        bottom: 25,
        right:150
    }
    , 
    star_9:{
        position:'absolute',
        bottom: 40,
        right:60
    }
    , 
    star_10:{
        position:'absolute',
        top: 40,
        right:60
    }
    , 
    star_11:{
        position:'absolute',
        top: 25,
        right:130
    }
    , 
});
