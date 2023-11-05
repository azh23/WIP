import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';


import Table from "./Table"

//import { NavigationContainer } from '@react-navigation/native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView } from "react-native";

const Todo_list = [{ "completed": false, "date": "Date", "id": -1, "task": "What do you need to do" }]

export default function Com() {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [tasks, setTasks] = React.useState(Todo_list);

  function Add_input() {
    New_tasks = [...tasks]
    if (tasks.length != 0) {
      last_ele = tasks[tasks.length - 1].id + 1;
    }
    else {
      last_ele = 0
    }
    New_tasks.push({ id: last_ele, task: text, date: number, completed: false })
    setTasks(New_tasks)
    console.log(New_tasks)
  }
  function Delete_input(id) {
    New_tasks = tasks.filter((item) => item.id != id)
    setTasks(New_tasks)
  }

  function toggle_completed(id) {
    console.log(tasks)
    New_tasks = tasks.map(item => {
      if (item.id === id) {
        console.log(item.completed)
        /*if (item.completed) {
           Delete_input(item.id)
           Add_input() blehh do this later
        }*/
        return { ...item, completed: !item.completed }
      }
      return item;
    })
    setTasks(New_tasks)

  }
  return (
    <View >
      {/* Plus button */}
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>+</Text>
      </Pressable>
      {/* Plus button */}
      <Table Todo={tasks} Delete={Delete_input} Toggle={toggle_completed} />
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
                  placeholder="What do you need to do?"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={setNumber}
                  value={number}
                  placeholder="Date"
                  keyboardType="numeric"
                />
                {/* User Input */}
              </View>
              {/* Done */}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  Add_input();
                }}>
                <Text style={styles.textStyle}>Done</Text>
              </Pressable>
              {/* Done */}

              {/* Exit */}
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => { setModalVisible(!modalVisible); }}>
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
              {/* Exit */}

            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  com: {
    height: "100%"
  },
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
    color: '#000000'
  },
});