import { FlatList, Text, View, Button, Animated } from 'react-native'
import React from 'react'
import {useState} from 'react'

const Table = ({Todo, Delete, Toggle}) => {
    const item = ({ item }) => (
        <View style={{ flexDirection: 'row', 
        opacity: (item.completed ? 0.3 : 1)}}>
            <View style={{ 
                width: '20%', 
                backgroundColor: 'lightyellow', }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>
                    <View>
                    <Button
            onPress = {() => Toggle(item.id)}
            title = {(item.completed ? 'X' : 'O')}
            alignItems = 'center'
            color="#841584" /></View>
            </Text>
            </View>
            <View style={{ width: '40%', backgroundColor: 'lightpink'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>{item.task}</Text>
            </View>
            <View style={{ width: '20%', backgroundColor: 'lavender'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>{item.date}</Text>
            </View>
            <View style={{ width: '20%', backgroundColor: 'lavender'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}><View><Button
            onPress = {() => Delete(item.id)}
            title = 'X'
            alignItems = 'center'
            color="#FF0000" /></View></Text>
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