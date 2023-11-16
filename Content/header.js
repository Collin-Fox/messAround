import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return (
        <View style = {styles.header}>
            <Text style = {styles.title}>
                NFL Bet Tracker
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 50,


        paddingTop: 38,
        backgroundColor: 'dodgerblue'
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',

    }

})

