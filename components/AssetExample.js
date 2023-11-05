
import {useState} from 'react';
import { 
  FlatList, 
  Text, 
  TextInput, 
  SafeAreaView, 
  StyleSheet, 
  View,
  Alert,
  Modal,
  Pressable,
  TouchableOpacity
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper'; 

// or any files within the Snack
//import AssetExample from './components/AssetExample';

const data = [
  {id: 1, name: 'John', email: 'john@gmail.com'},
  {id: 2, name: 'Bob', email: 'bob@gmail.com'},
  {id: 3, name: 'Mei', email: 'mei@gmail.com'},
  {id: 4, name: 'Steve', email: 'steve@gmail.com'}
]

// const data2 = [
//   task1 = new Task('Walk the dog', 16),
//   task2 = new Task('Talk the dog', 18),
//   task3 = new Task('Talk the dog', 18)
// ]

const TableOne = () => {
  //const [modalVisible, setModalVisible] = useState(false);
  const item = ({ item }) => (
      <View style={{ flexDirection: 'row' }}>
          <View style={{ width: '20%', backgroundColor: 'lightyellow'}}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>{item.id}</Text>
          </View>
          <View style={{ width: '20%', backgroundColor: 'lightpink'}}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>{item.name}</Text>
          </View>
          {<View style={{ width: '60%', backgroundColor: 'lavender'}}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>{item.id}</Text>
          </View>}
      </View>
  )
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '10%'}}>
          <FlatList data={data} renderItem={item} keyExtractor={item => item.id.toString()} />
      </View>
  )
}
export default TableOne


// import { Text, View, StyleSheet, Image } from 'react-native';

// export default function AssetExample() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.paragraph}>
//         Hi
//       </Text>
//       <Image style={styles.logo} source={require('../assets/icon.png')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 24,
//     backgroundColor: '#FFC0CB',
//   },
//   paragraph: {
//     margin: 24,
//     marginTop: 0,
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   logo: {
//     height: 128,
//     width: 128,
//   }
// });

