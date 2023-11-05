import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput} from 'react-native';


import Table from "./Table"

//import { NavigationContainer } from '@react-navigation/native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView } from "react-native";

const Todo_list = [
    {task:"Walk the dog", date: "10/12/2120", completed: false}
]

export default function Com() {
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = React.useState('What do you need to do');
    const [number, setNumber] = React.useState('Date');
    const [tasks, setTasks] = React.useState(Todo_list);
    
    function Add_input(){
        New_tasks = [...tasks]
        New_tasks.push({task:text, date:number})
        setTasks(New_tasks)
        console.log(New_tasks)
    }
  return (
    <SafeAreaView style ={styles.container}>
    <Pressable
    style={[styles.button, styles.buttonOpen]}
    onPress={() => setModalVisible(true)}>
    <Text style={styles.textStyle}>+</Text>
    </Pressable>
    <Table Todo = {tasks}/>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
        <View style={styles.modalView}>
    {/* User Input */}
    <View>
        <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text.toString()}
      />
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      {/* User Input */}
      </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                Add_input();
                }}>
              <Text style={styles.textStyle}>Done</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 50,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      marginTop: 20,
      borderRadius: 20,
      padding: 20,
      elevation: 2,
      alignItems: 'right',
    },
    buttonOpen: {
      backgroundColor: '#FFC0CB',
    },
    buttonClose: {
      backgroundColor: '#FFC0CB',
    },
    textStyle: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 20,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    input: {
        height: 10,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'black'
      },
  });