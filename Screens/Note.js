import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MyNotes from './MyNotes'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { saveNote } from '../redux/actions/saveNoteAction'
import { deleteNote } from '../redux/actions/saveNoteAction'

const Note = ({ navigation }) => {
    const [notes, setNotes] = useState('')
    const dispatch = useDispatch();

    const handleTextChange = (text) => {
        setNotes(text)
    }
    const saveNotes = () => {
        dispatch(saveNote(notes));
        setNotes('')
    }
    const deleteNotes = () => {
        dispatch(deleteNote(notes));
        setNotes('')
    }
    const savedNotes = useSelector((store) => store.notes.notes)
    console.log(saveNotes)
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Notes App</Text>
            <TextInput style={styles.textcontainer} placeholder='Enter Your Notes' value={notes} onChangeText={handleTextChange} />
            <View style={styles.btnContainer}>
                <Button title='save Notes' onPress={saveNotes} />
                <Button title='delete Notes' onPress={deleteNotes} />
                <Button title='View Notes' onPress={() => navigation.navigate('MyNotes')} />
            </View>
            <Text style={styles.savedData}>{savedNotes}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center"
    },
    textcontainer: {
        marginTop: 40,
        borderWidth: 1,
        padding: 12,
        width: "80%",
        height: 40,
        fontSize: 16
    },
    heading: {
        fontSize: 24,
        fontFamily: "numito"

    },
    incButton: {
        backgroundColor: "green",
        padding: 12,
        margin: 12,
    },
    decButton: {
        backgroundColor: "red",
        padding: 12,
        margin: 12
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 24,
    },
    savedData: {
        fontSize: 24
    }
})

export default Note