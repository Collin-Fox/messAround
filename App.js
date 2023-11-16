import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, Button, Image , ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import player from "./player";
//import {TouchableOpacity} from "react-native-web";
import DefaultButton from "./Content/defaultButton";
import Header from "./Content/header";
import Player from "./player";
import AddButton from "./Content/addButton";



export default function App() {
    const [buttons, setButtons] = useState([]);

    const addButton = () => {
        setButtons(prevButtons => [...prevButtons, <DefaultButton key={buttons.length} />]);
    }
    return (
    <View style={styles.container}>



        <ScrollView>
            {buttons}


        </ScrollView>
        <AddButton onPress={addButton} />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex:1,
      paddingTop: 30,
      paddingHorizontal: 30,
    backgroundColor: 'azure',


  },

})

