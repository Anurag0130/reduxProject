import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions/countAction';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
    const navigation = useNavigation();
    // const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    // const Increment = () => {
    //     setCount(count + 1);
    // }
    // const Decrement = () => {
    //     setCount(count - 1);
    // }
    const handleIncrement = () => {
        dispatch(increment())
    }
    const handledecrement = () => {
        dispatch(decrement());
    }

    const count = useSelector((store) => store.count.count)
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24 }} >{count}</Text>
            {/* <TouchableOpacity onPress={Increment} style={styles.incButton}><Text style={{ color: "#fff" }}>Increment</Text></TouchableOpacity>
            <TouchableOpacity onPress={Decrement} style={styles.decButton}><Text style={{ color: "#fff" }}>Decrement</Text></TouchableOpacity> */}
            <TouchableOpacity onPress={handleIncrement} style={styles.incButton}><Text style={{ color: "#fff" }}>Increment</Text></TouchableOpacity>
            <TouchableOpacity onPress={handledecrement} style={styles.decButton}><Text style={{ color: "#fff" }}>Decrement</Text></TouchableOpacity>
            <Button
                title="Save data"
                onPress={() =>
                    navigation.navigate('Note')
                }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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
    }
})
export default Home