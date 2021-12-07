import React from 'react'
import {View, TextInput, Button, StyleSheet } from 'react-native'

export default function AddItem(props) {

    const { setTextInput, onAdd } = props

    return (
        <View style={styles.containerInput} >
            <TextInput placeholder="Escribe aqui" onChangeText={(text) => setTextInput(text)} style={styles.input}/>
            <Button title="Add" onPress={() => onAdd()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerInput: {
        flexDirection: "row", 
        width: "100%", 
        height: "10%", 
        marginTop: "3%", 
        justifyContent: "space-around", 
        alignItems: "center"
    },
    input: {
        borderBottomColor: "grey", 
        borderBottomWidth: 5, 
        width: "70%"
    },
})