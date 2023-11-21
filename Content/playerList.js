import React from 'react';
import {Button, ScrollView, SectionList, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from "react-native";
import axios from "axios";
//import axios from 'axios';
import {useState} from 'react'
import PlayerModule from "./playerModule";





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
function getData(teamAbv) {
    const options = {
        method: 'GET',
        url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeamRoster',
        params: {teamAbv: teamAbv},
        headers: {
            'X-RapidAPI-Key': '9644ba66f6msh91f9bbb1863cc23p109ea5jsn2b480abdcd7d',
            'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
        }
    };
    return options
}






const PlayerList = ({ teamabv }) => {

    //Send the request for the api backend
    const [player, setPlayer] = useState([])
    function whenCalled() {
        const apiCall =  async (parameter) =>{



            const options = {
                method: 'GET',
                url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeamRoster',
                params: {teamAbv: parameter},
                headers: {
                    'X-RapidAPI-Key': '9644ba66f6msh91f9bbb1863cc23p109ea5jsn2b480abdcd7d',
                    'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
                }
            };
            let x = []
            const response = await axios.request(options)
            return response
        }
        const addPlayer = (name) => {
            console.log("SO CLOSE")
            setPlayer(prevPlayers => [...prevPlayers, <PlayerModule
            names ={name}/>])
        }


        const players = apiCall('CHI').then(
            res => {
                const size = res.data.body.roster.length
                const arr = res.data.body.roster

                console.log("THIS IS WORKING")
                for(let i = 0; i < size; i++){
                    console.log(arr[i].espnName)
                    addPlayer(String(arr[i].espnName))
                }


            }
        ).catch(
            console.log("PISS")
        )




    }

    console.log("TRACER")
    console.log(player)
    return (
        <View style={styles.container}>
            <ScrollView>
                <Button onPress = {() => [whenCalled(), alert("Hello")]}title={"Click ME"}/>
                {player}

            </ScrollView>
        </View>
    );
};

export default PlayerList;