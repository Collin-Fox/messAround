import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

export default function AddButton({ onPress }){
    return(
        <TouchableOpacity
            onPress={onPress}>
            <View style={styles.item}>
                <Icon
                    style={styles.iconContainer}
                    name={"pluscircleo"}
                    size={35}
                    color={'white'}
                    backgroundColor={'dodgerblue'}
                >

                </Icon>
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    item: {

        width: 75,
        height: 75,
        borderRadius: 75/2,
        padding: 20,
        alignContent: 'center',
        backgroundColor: 'dodgerblue',
        marginBottom: 35,
        alignSelf: 'flex-end'



    },
    iconContainer:{

    }


})
