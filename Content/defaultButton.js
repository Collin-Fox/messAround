import React from 'react'
import Icon from "react-native-vector-icons/AntDesign";
import player from "../player";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {useState} from 'react';
export default function DefaultButton({onPress}){
    const [name, addName] = useState('Player Name and Number')
    return(
        <TouchableOpacity
            onPress={() => addName("Collin")}>
            <View style={styles.item}>
                <Icon
                    style={styles.iconContainer}
                    name={"infocirlceo"}
                    size={30}
                    color={'white'}
                    backgroundColor={'dodgerblue'}
                >
                    <Text
                        style={styles.textContainer}>
                        {name}
                    </Text>
                </Icon>
            </View>
        </TouchableOpacity>

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
        fontWeight: 'bold',
        fontSize: 30,

    }

});

