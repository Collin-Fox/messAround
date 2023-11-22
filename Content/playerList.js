import React from 'react';
import {Button, ScrollView, SectionList, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from "react-native";
import axios from "axios";
import {useState} from 'react'
import PlayerModule from "./playerModule";




//Style sheets for the player lists
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

const PlayerList = ({ teamabv, onPress}) => {

    //useState for players by team
    const [player, setPlayer] = useState([])
    const addPlayer = (name, image, jersey, pos) => {
        // function that adds players to the list of players from the teams roster
        setPlayer(prevPlayers => [...prevPlayers, <PlayerModule
            onPress = {onPress}
            names ={name}
            photo = {image}
            jersey = {jersey}
            pos = {pos}/>])
    }



    //Temporary function to avoid api call explosion
    //Contains the api call to the specific team roster
    function whenCalled() {
        const apiCall =  async (parameter) =>{
            //Method of getting the roster by team abv
            //Returns an object promise
            const options = {
                method: 'GET',
                url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeamRoster',
                params: {teamAbv: parameter},
                headers: {
                    'X-RapidAPI-Key': '9644ba66f6msh91f9bbb1863cc23p109ea5jsn2b480abdcd7d',
                    'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
                }
            };
            const response = await axios.request(options)
            return response
        }

        const players = apiCall(teamabv).then(
            //If the HTTP request is successful we iterate through the list of players and send their name as a function to be rendered to the UI
            res => {
                const size = res.data.body.roster.length
                const arr = res.data.body.roster
                for(let i = 0; i < size; i++){
                    //change here to get more player data than name
                    addPlayer(String(arr[i].espnName), String(arr[i].espnHeadshot), String(arr[i].jerseyNum), String(arr[i].pos))
                }
            }
        ).catch(
            //Log the error if HTTP request fails
            err => {
                console.log(err)
            }
        )




    }

    //whenCalled() uncomment causes api explosion not good
    return (

        <View style={styles.container}>
            <ScrollView>
                <Button title={"Click ME"}
                        //only load the api when the button is pressed or else will infinite loop api calls
                onPress={() => whenCalled()}/>
                {player}

            </ScrollView>
        </View>
    );
};

export default PlayerList;