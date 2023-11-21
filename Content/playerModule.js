import React from 'react'
import Icon from "react-native-vector-icons/AntDesign";
import player from "../player";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {useState} from 'react';
export default function PlayerModule({names}){

    return(
                <Text
                    style={styles.textContainer}>
                    {names}
                </Text>
    )
}

const  styles = StyleSheet.create({

    item: {
        flex: 1,
        borderRadius: 25,
        padding: 25,
        backgroundColor: 'dodgerblue',
        marginTop: 24,
        justifyContent: 'center'


    },
    iconContainer:{

        alignSelf: 'center'
    },
    textContainer:{
        fontSize: 25,
        color: 'black'

    }

});

