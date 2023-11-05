import { FlatList, Text, View, Button } from 'react-native'
import React from 'react'
import {useState} from 'react'

const Table = ({Todo, Delete, Toggle}) => {
    const item = ({ item }) => (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '20%', backgroundColor: 'lightyellow'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>
                    <View>
                    <Button
            onPress = {() => Toggle(item.id)}
            title = {(item.completed ? 'O' : 'X')}
            alignItems = 'center'
            color="#841584" /></View>
            </Text>
            </View>
            <View style={{ width: '20%', backgroundColor: 'lightpink'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>{item.task}</Text>
            </View>
            <View style={{ width: '60%', backgroundColor: 'lavender'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>{item.date}</Text>
            </View>
        </View>
    )

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '10%'}}>
            <FlatList data={Todo} renderItem={item} keyExtractor={item => item.id}/>
        </View>
    )
}
export default Table


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
