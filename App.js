import Com from "./components/Tasks/Com";
import Pet from "./components/Pet";
import Home from "./components/home_screen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Button, View, Text, ImageBackground, StyleSheet, SafeAreaView } from "react-native";

function TaskTitle() {
  return (
    <Text>Tasks</Text>

  );
}

function TaskScreen({ navigation }) {
  return (
    <>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SafeAreaView style={styles.petcontainer}>
        {/* <Home/> */}
        <Com />
      </SafeAreaView>
      <Button
        style={styles.petbutton}
        title="Pet Time Pet Time Pet Time"
        onPress={() => navigation.navigate('Pet')}
      />
    </View>
    </>
  );
}

// function inputScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <SafeAreaView style ={styles.container}>
//         <Text><Input/></Text>
//     </SafeAreaView>

//     </View>
//   );
// }

function PetScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: "relative" }}>
      <SafeAreaView style={styles.petcontainer}>
        <Text style={styles.petText}>Zot zot zot</Text>
        <Image style={styles.logo} source={require('./assets/Anteater/pixil-layer-3.png')} />
      </SafeAreaView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tasks"
          component={TaskScreen}
          options={{ headerTitle: (props) => <TaskTitle {...props} /> }} />
        <Stack.Screen name="Pet" component={PetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  petcontainer: {
    backgroundColor: 'white',
    padding: 0, /* margins */
    borderRadius: 10,
    borderWidth: 0,
    borderColor: 'gray',
    width: '100%',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFC0CB',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pet: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFC0CB',
    padding: 8,
  },

  petbutton: {
    // flex: 1,
    backgroundColor: '#CFECF7',
    color: '#525E62',
    position: "fixed",
    bottom: 0
  },

  petImage: {
    width: 400,
    height: 200,
  },
  petText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});