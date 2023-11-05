import Com from "./components/Tasks/Com";
import Pet from "./components/Pet";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Button, View, Text, StyleSheet, SafeAreaView } from "react-native";

function TaskTitle() {
  return (
    <Text>Tasks</Text>

  );
}

function TaskScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <SafeAreaView style ={styles.container}>
        <Text><Com/></Text>
        <Button
        style={styles.petbutton}
        title="Pet Time Pet Time Pet Time"
        onPress={() => navigation.navigate('Pet')}
      />
    </SafeAreaView>
    </View>
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

function PetScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <SafeAreaView style ={styles.pet}>
        <Text><Pet/></Text>
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
        options={{ headerTitle: (props) => <TaskTitle {...props} /> }}/>
      <Stack.Screen name="Pet" component={PetScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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
    flex: 1,
    backgroundColor: '#CFECF7',
    color: '#525E62'
  }
});