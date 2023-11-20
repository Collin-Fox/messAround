import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        marginBottom: 50
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
    },
});

const SectionListBasics = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={[
                    {title: '#', data: ['49ers']},
                    {
                        title: 'B', data: [
                            'Bears',
                            'Bengals',
                            'Bills',
                            'Broncos',
                            'Browns',
                            'Buccaneers'
                        ]},
                    {
                        title: 'C', data: [
                            'Cardinals',
                            'Chargers',
                            'Chiefs',
                            'Colts',
                            'Commanders',
                            'Cowboys'
                        ]
                    },
                    {
                        title: 'D', data: [
                            'Dolphins'
                        ]
                    },
                    {
                        title: 'E', data:[
                            'Eagles'
                        ]
                    },
                    {
                        title: 'F', data:[
                            'Falcons'
                        ]
                    },
                    {
                        title: 'G', data:[
                            'Giants'
                        ]
                    },
                    {
                        title: 'J', data:[
                            'Jaguars',
                            'Jets'
                        ]
                    },
                    {
                        title: 'L', data:[
                            'Lions'
                        ]
                    },
                    {
                        title: 'P', data:[
                            'Packers',
                            'Panthers',
                            'Patriots',
                        ]
                    },
                    {
                        title: 'R', data:[
                            'Raiders',
                            'Rams',
                            'Ravens'
                        ]
                    },
                    {
                        title: 'S', data:[
                            'Saints',
                            'Seahawks',
                            'Steelers'
                        ]
                    },
                    {
                        title: 'T', data:[
                            'Texans',
                            'Titans'
                        ]
                    },
                    {
                        title: 'V',
                        data: [
                            'Vikings'
                        ],
                    },
                ]}
                renderItem={({item}) => <TouchableOpacity><Text onPress={onPress} style={styles.item}>{item}</Text></TouchableOpacity>}
                renderSectionHeader={({section}) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={item => `basicListEntry-${item}`}
            />
        </View>
    );
};

export default SectionListBasics;