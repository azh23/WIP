import { FlatList, Text, View, Button } from 'react-native'
import React from 'react'


const Table = ({Todo}) => {
    const item = ({ item }) => (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '20%', backgroundColor: 'lightyellow'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}><Button
            onPress = {() =>
                
                item.completed = !item.completed
            }
            title = "O" 
            alignItems = 'center'
            color="#841584" />
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
            <FlatList data={Todo} renderItem={item} />
        </View>
    )
}
export default Table

{/* <Button
    OnPress = !{item.completed}
    title = "Y"
    color="#841584"
/> */}


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
