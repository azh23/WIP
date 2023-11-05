import Com from "./components/Tasks/Com";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState, useEffect } from 'react';

import { Button, View, Text, ImageBackground, StyleSheet, SafeAreaView, Image } from "react-native";

function TaskTitle() {
  return (
    <Text>Tasks</Text>
    

  );
}

function TaskScreen({ route }) {
  const {incHealth, decHealth} = route.params;
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SafeAreaView style={styles.container}>
          {/* <Home/> */}
          <Com incHealth={incHealth} decHealth = {decHealth}/>
        </SafeAreaView>
      </View>
    </>
  );
}

function PetScreen({ route }) {
  const {health} = route.params;
  //const [heart, setHeart] = useState(false);
  const getHeartImageSource = () => {
    console.log(health)
      switch(health) {
        case 0: return require('./assets/Heart/pixil-layer-10.png');
        case 1: return require('./assets/Heart/pixil-layer-9.png');
        case 2: return require('./assets/Heart/pixil-layer-8.png');
        case 3: return require('./assets/Heart/pixil-layer-7.png');
        case 4: return require('./assets/Heart/pixil-layer-6.png');
        case 5: return require('./assets/Heart/pixil-layer-5.png');
        case 6: return require('./assets/Heart/pixil-layer-4.png');
        case 7: return require('./assets/Heart/pixil-layer-3.png');
        case 8: return require('./assets/Heart/pixil-layer-2.png');
        case 9: return require('./assets/Heart/pixil-layer-1.png');
        default: return require('./assets/Heart/pixil-layer-0.png');
      }
    };
    

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: "relative" }}>
      <SafeAreaView style={styles.petcontainer}>
        <Text style={styles.petText}>Hi, My name is Petr!</Text> 
        {/* <ImageBackground source={require('./assets/Anteater/background.png')} /> ... </ImageBackGround> */}
        <Image style={styles.petImage} source={require('./assets/Anteater/pixil-layer-3.png')} />
        <Image style={styles.heartImage} source={getHeartImageSource()}/>
      </SafeAreaView>
    </View>
  );
}



const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();



export default function App() {
  const [health, setHealth] = React.useState(10);

  function incHealth() {
    console.log(health)
    let newHealth = Math.min(health + 1, 10);
    setHealth(newHealth);
  }

  function decHealth() {
    let newHealth = Math.max(health - 2, 0);
    setHealth(newHealth);
  }

  
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Tasks"
          component={TaskScreen}
          options={{ headerTitle: (props) => <TaskTitle {...props} /> }} />
        <Stack.Screen name="Pet" component={PetScreen} />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name="Tasks" component={TaskScreen} initialParams={{incHealth: incHealth, decHealth: decHealth}} />
        <Tab.Screen name="Pet" component={PetScreen} initialParams={{health: health}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  petcontainer: {
    backgroundColor: 'transparent',
    padding: 0, /* margins */
    borderRadius: 10,
    borderWidth: 0,
    borderColor: 'gray',
    width: '100%', // fix this maybe
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#d4cfbc',
    padding: 10,
    //width: "100%",
  },
  pet: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
    padding: 8,
  },
  petbutton: {
    // flex: 1,
    backgroundColor: '#pink',
    color: '#pink',
    position: "fixed",
    bottom: 0
  },

  petImage: {
    width: 500,
    height: 500,
    backgroundColor: 'transparent', // pet image transparent
  },
  petText: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  heartImage: {
    width: 400
  }
});