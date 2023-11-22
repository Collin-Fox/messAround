import React from 'react'
import Icon from "react-native-vector-icons/AntDesign";
import player from "../player";
import {Text, TouchableOpacity, View, StyleSheet, Image} from "react-native";
import {useState} from 'react';

export default function PlayerModule({onPress, names, photo, jersey, pos}){

    return(

        <TouchableOpacity onPress = {onPress}>
            <View style={styles.container}>
                <Image
                    style = {styles.tinyLogo}
                    source={{
                        uri: photo,
                    }}
                />
                <Text style = {styles.item}>
                    #
                    {jersey}
                </Text>
                <Text style = {styles.item}>
                    {names}
                </Text>
                <Text style = {styles.item}>
                    {pos}
                </Text>

            </View>
        </TouchableOpacity>

    )
}

const  styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        width: 375,
        height: 75,
        borderRadius: 50,
        padding: 20,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'dodgerblue',
        marginBottom: 2,
        marginTop: 35,
        alignSelf: 'center'

    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {

        fontSize: 20,
        padding: 10,
        color: 'white'
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});

