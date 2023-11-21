import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from "react-native";
import axios from "axios";


const styles = StyleSheet.create({
    container: {

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
        padding: 10,
        fontSize: 18,
        height: 44,
        color: 'white'
    },
});





const SectionListBasics = ({ onPress, teamName}) => {

    return (
        <TouchableOpacity onPress = {onPress}>
            <View style={styles.container}
            >
                <Text style = {styles.item}>
                    {teamName}
                </Text>
            </View>
        </TouchableOpacity>

    );
};

export default SectionListBasics;