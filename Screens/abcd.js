// import React, { useState } from 'react'
// import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
// import { useDispatch } from 'react-redux'
// import { saveNote } from '../redux/actions/saveNoteAction'

// const Note = ({ navigation }) => {
//     const [notes, setNotes] = useState('')
//     const dispatch = useDispatch();

//     const handleTextChange = (text) => {
//         setNotes(text)
//     }

//     const saveNotes = () => {
//         dispatch(saveNote(notes));
//         setNotes(''); // Clear the TextInput after saving
//     }

//     return (
//         <View style={styles.container}>
//             <Text style={styles.heading}>Notes App</Text>
//             <TextInput 
//                 style={styles.textcontainer} 
//                 placeholder='Enter Your Notes' 
//                 value={notes}
//                 onChangeText={handleTextChange} 
//             />
//             <View style={styles.btnContainer}>
//                 <Button title='Save Notes' onPress={saveNotes} />
//                 <Button title='View Notes' onPress={() => navigation.navigate('MyNotes')} />
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center"
//     },
//     textcontainer: {
//         marginTop: 40,
//         borderWidth: 1,
//         padding: 12,
//         width: "80%",
//         height: 40,
//         fontSize: 16
//     },
//     heading: {
//         fontSize: 24,
//         fontFamily: "numito"
//     },
//     btnContainer: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: 24,
//     }
// })

// export default Note
