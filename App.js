import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, Button, Image , ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import player from "./player";
//import {TouchableOpacity} from "react-native-web";
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



function PlayerScreen({navigation}){
    return(
        <PlayerList></PlayerList>
    );
}
function TeamScreen({navigation}){
    return (
        <SectionListBasics
        onPress={()=> navigation.navigate('Player')}/>
    );
}

function AddScreen({navigation}){
    //Initial loading screen where the user will have an option to add more players
    const [buttons, setButtons] = useState([]);
    const addButton = () => {
        setButtons(prevButtons => [...prevButtons, <DefaultButton key={buttons.length}
                                                                  onPress={()=> navigation.navigate('Team')}/>]);
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




const styles = StyleSheet.create({
  container: {
    flex:1,
      paddingTop: 30,
      paddingHorizontal: 30,
    backgroundColor: 'azure',


  },

    testStyle: {
      flex: 1,
        backgroundColor: 'rgba(247,247,247,1.0)',


    }


})

