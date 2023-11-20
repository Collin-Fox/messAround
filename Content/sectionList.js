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
                    {
                        title: 'Teams', data: [
                            'NE',
                            'LAC',
                            'KC',
                            'ATL',
                            'HOU',
                            'CLE',
                            'DAL',
                            'ARI',
                            'TEN',
                            'CHI',
                            'SF',
                            'TB',
                            'NYG',
                            'PHI',
                            'CAR',
                            'BUF',
                            'WSH',
                            'NO',
                            'LAR',
                            'PIT',
                            'CIN',
                            'DET',
                            'BAL',
                            'MIA',
                            'SEA',
                            'MIN',
                            'NYJ',
                            'GB',
                            'LV',
                            'DEN',
                            'JAX',
                            'IND'
                        ]},

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