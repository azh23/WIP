import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Table from "./Table"

//import { NavigationContainer } from '@react-navigation/native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView } from "react-native";

const Todo_list = [{ "completed": false, "date": "Date", "id": -1, "task": "What do you need to do" }]

export default function Com({incHealth, decHealth}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [month, setMonth] = React.useState('');
  //const [day, setDay] = React.useState('');
  //const [year, setYear] = React.useState('');
  const [tasks, setTasks] = React.useState(Todo_list);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };



  function Add_input() {
    New_tasks = [...tasks]
    if (tasks.length != 0) {
      last_ele = tasks[tasks.length - 1].id + 1;
    }
    else {
      last_ele = 0
    }


    //new_date = new Date(year, month, day)
    //console.log(new_date)
    New_tasks.push({ id: last_ele, task: text, date: number, completed: false })
    setTasks(New_tasks)
    console.log(New_tasks)
    setNumber('')
    setText('')
  }
  function Delete_input(id) {
    New_tasks = tasks.filter((item) => item.id != id)
    setTasks(New_tasks)
  }

  function toggle_completed(id) {
    console.log(tasks)
    New_tasks = tasks.map(item => {
      if (item.id === id) {
        if (!item.completed) {
          incHealth();
        }
        return { ...item, completed: !item.completed }
      }
      return item;
    })
    //const today = new Date();
    //console.log(today)
    setTasks(New_tasks)

  }
  return (
    <View >
      {/* Plus button */}
      <Pressable
        style={styles.buttonOpen}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>+</Text>
      </Pressable>
      {/* Plus button */}
      <Table Todo={tasks} Delete={Delete_input} Toggle={toggle_completed} incHealth={incHealth} decHealth={decHealth}/>
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
                  value={text}
                  placeholder="What do you need to do?"
                  placeholderTextColor="#808080"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={setNumber}
                  value={number}
                  placeholder="Done by when?"
                  placeholderTextColor="#808080"
                />
                    {/* <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onChange = {setMonth}
        value = {month}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View> */}
                {/* <TextInput
                  style={styles.input}
                  onChangeText={setMonth}
                  value={month}
                  placeholder="Month"
                  placeholderTextColor="#808080"
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={setDay}
                  value={day}
                  placeholder="Day"
                  placeholderTextColor="#808080"
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={setYear}
                  value={year}
                  placeholder="Year"
                  placeholderTextColor="#808080"
                  keyboardType="numeric"
                /> */}
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
    alignItems: 'center',
  },
  buttonOpen: {
    backgroundColor: '#92946f',
    borderRadius: 20,
    elevation: 1,
    width: 100,
  },
  buttonClose: {
    backgroundColor: '#92946f',
    width: 205,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
});