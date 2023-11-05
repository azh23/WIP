import { FlatList, Text, View, Button, Animated } from 'react-native'
import React from 'react'
import {
    
} from 'react'

const Table = ({Todo, Delete, Toggle, incHealth, decHealth}) => {
    const item = ({ item }) => (
        <View style={{ flexDirection: 'row',
        width: 420,
        height: 50,
        margin: 10,
        opacity: (item.completed ? 0.3 : 1)}}>
            <View style={{ 
                borderRadius: 15,
                width: '10%', 
                margin: 5,
                backgroundColor: '#92946f',}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>
                    <View>
                    <Button
            onPress = {() => Toggle(item.id)}
            title = {(item.completed ? 'X' : 'O')}
            
            alignItems = 'center'
            color="#ffffffff" /></View>
            </Text>
            </View>
            <View style={{ width: '40%', backgroundColor: '#F7efdb'}}>
                <Text style={{ fontSize: 12, fontWeight: 'light' , textAlign: 'center'}}>{item.task}</Text>
            </View>
            <View style={{ width: '30%', backgroundColor: '#F7efdb'}}>
                <Text style={{ fontSize: 12, fontWeight: 'bold' , textAlign: 'center'}}>{item.date}</Text>
            </View>
            <View style={{ width: '10%', margin: 2, borderRadius: 20, backgroundColor: '#92946f'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}><View><Button
            onPress = {() => Delete(item.id)}
            title = 'x'
            alignItems = 'center'

            color="#Ffffff" /></View></Text>
            </View>
        </View>
    )

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '10%', maxHeight: 1000}}>
            <FlatList data={Todo} renderItem={item} keyExtractor={item => item.id}/>
        </View>
    )
}
export default Table