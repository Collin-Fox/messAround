import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, Button, Image , ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';import Icon from 'react-native-vector-icons/AntDesign';
import player from "./player";
import { NavigationContainer } from '@react-navigation/native';
import DefaultButton from "./Content/defaultButton";
import Header from "./Content/header";
import Player from "./player";
import AddButton from "./Content/addButton";
import {TextInput} from "react-native-web";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectDropdown from 'react-native-select-dropdown'
import  {SelectList} from 'react-native-dropdown-select-list'
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import SectionListBasics from "./Content/sectionList";
import PlayerList from "./Content/playerList";


function PlayerScreen({navigation, route}){
    //Gets the team abv data from the team screen and passes it into a function that sends an HTTP request to the backend
    const teamAbv = route.params.infoSend;
    return(
        <PlayerList onPress = {() => navigation.navigate('Select', {playerClicked: "HELLO"})}teamabv={teamAbv}></PlayerList>

    );
}
function TeamScreen({navigation}){
    return (
        //When useState is used too many renders are done and overloads the application
        //This needs to be fixed
        //This is the current solution not good
        <ScrollView>

            <SectionListBasics
                teamName={"CLE"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'CLE'
                })}/>

            <SectionListBasics
                teamName={"CHI"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'CHI'
                })}/>

            <SectionListBasics
                teamName={"IND"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'IND'
                })}/>
            <SectionListBasics
                teamName={"JAX"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'JAX'
                })}/>
            <SectionListBasics
                teamName={"DEN"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'DEN'
                })}/>
            <SectionListBasics
                teamName={"LV"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'LV'
                })}/>
            <SectionListBasics
                teamName={"GB"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'GB'
                })}/>
            <SectionListBasics
                teamName={"NYJ"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'NYJ'
                })}/>
            <SectionListBasics
                teamName={"IND"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'IND'
                })}/>
            <SectionListBasics
                teamName={"SEA"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'SEA'
                })}/>
            <SectionListBasics
                teamName={"MIN"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'MIN'
                })}/>
            <SectionListBasics
                teamName={"CIN"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'CIN'
                })}/>
            <SectionListBasics
                teamName={"DET"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'DET'
                })}/>
            <SectionListBasics
                teamName={"BAL"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'BAL'
                })}/>
            <SectionListBasics
                teamName={"NO"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'NO'
                })}/>
            <SectionListBasics
                teamName={"LAR"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'LAR'
                })}/>
            <SectionListBasics
                teamName={"PIT"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'PIT'
                })}/>
            <SectionListBasics
                teamName={"CAR"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'CAR'
                })}/>
            <SectionListBasics
                teamName={"BUF"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'BUF'
                })}/>
            <SectionListBasics
                teamName={"WAS"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'WSH'
                })}/>
            <SectionListBasics
                teamName={"TB"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'TB'
                })}/>
            <SectionListBasics
                teamName={"NYG"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'NYG'
                })}/>
            <SectionListBasics
                teamName={"PHI"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'PHI'
                })}/>
            <SectionListBasics
                teamName={"ARI"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'ARI'
                })}/>
            <SectionListBasics
                teamName={"TEN"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'TEN'
                })}/>
            <SectionListBasics
                teamName={"SF"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'SF'
                })}/>
            <SectionListBasics
                teamName={"DAL"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'DAL'
                })}/>
            <SectionListBasics
                teamName={"HOU"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'HOU'
                })}/>
            <SectionListBasics
                teamName={"ATL"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'ATL'
                })}/>
            <SectionListBasics
                teamName={"NE"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'NE'
                })}/>
            <SectionListBasics
                teamName={"LAC"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'LAC'
                })}/>
            <SectionListBasics
                teamName={"KC"}
                onPress={() => navigation.navigate('Player', {
                    //From here need to get the item that was clicked and pass the team abv through route everything else works
                    infoSend: 'KC'
                })}/>




        </ScrollView>
    );
}

function AddScreen({navigation, route}){
    //const pClick = route.params.playerClicked
   // console.log(pClick)

    //Fetching the last clicked player and defaulting to no text if no player cicked
    let buttonText = "NOTHING"
    try{
        buttonText = route.params.playerClicked
    }catch (err){
        buttonText = "NOTTA"
    }


    //Initial loading screen where the user will have an option to add more players
    const [buttons, setButtons] = useState([]);
    const addButton = () => {
        //Function to add more buttons to the screen when pressed
        setButtons(prevButtons => [...prevButtons, <DefaultButton key={buttons.length}
                                                                  onPress={() =>navigation.navigate('Team')}/>]);

    }



    return(

        <View style={styles.container}>

            <ScrollView>
                {buttons}
            </ScrollView>
            <AddButton onPress={addButton} />

        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    //Current handler for all the screens on the app
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={"Select"} component={AddScreen}/>
            <Stack.Screen name={"Team"} component={TeamScreen} />
            <Stack.Screen name={"Player"} component={PlayerScreen}/>
        </Stack.Navigator>
    </NavigationContainer>


  );
}



//Style sheets for the application
const styles = StyleSheet.create({
  container: {
    flex:1,
      paddingTop: 30,
      paddingHorizontal: 30,
    backgroundColor: 'rgba(247,247,247,1.0)'


  },

    testStyle: {
      flex: 1,
        backgroundColor: 'rgba(247,247,247,1.0)',


    },
    tinyLogo: {
        width: 50,
        height: 50,
    },


})

